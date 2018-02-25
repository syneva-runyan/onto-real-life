const fs  = require("fs");
const fetch = require('node-fetch');
const photoGalleryData =  require("../source/data/photos");

require('dotenv').config();

// this script should be run during before a build
// in order to generate appropriate photo gallery output

/**
 * 1) Look up location name and key
 * 1) Look up blogpost asset imgs
 *    - pay attention to size prefixes, don't display duplicates.
 * 2) Combine blogpost asset imgs w/ other photo-gallery asset img
 */

const googleMapsLocationURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

const autoGeneratedNotice = "/** This file is automatically generated during the build process, and any direct changes will be overwritten. \n See Generate Photo Gallery util for more information.*/\n\n";

 /** 
  * This class takes in photo gallery information
  * And outputs a json file used to construct
  * A geo-based photo gallery inside the application
 */
 class geoPhotoGalleryGenerator {
    constructor(markerData) {
        this.markerInfo = {};
        this.relativeBlogPostImgPath = "assets/img/blogs/";
        this.relativePhotoImgPath = "assets/img/photos/";
        this.blogPostImgPath = `${process.cwd()}/source/${this.relativeBlogPostImgPath}`;
        this.photoImgPath = `${process.cwd()}/source/assets/img/photos/`;
        this.outputFile = `${process.cwd()}/source/data/photos/photgallerydata.js`;
        this.isFetchingGeo = false;
        this.writeFile = this.writeFile.bind(this);

        var createMarkerDataPromises = markerData.map((marker) => {
            // create markerInfo key
            // for each provided marker
            return new Promise((resolve, reject) => {
                try {
                    const markerData = { ...marker };

                    // possibly check async condition here
                    this.getCoordinates(markerData, this.isFetchingGeo);
                    // before returning, make sure that 
                    // get geolocation for marker
                    let blogImgs = marker.isBlogPost ? this.collectPhotos(marker, this.blogPostImgPath) : [];
                    blogImgs = this.filterBlogImgs(blogImgs);
                    blogImgs = blogImgs.map(img => `${this.relativeBlogPostImgPath}${marker.id}/${img}`);
                    let altImgs = this.collectPhotos(marker, this.photoImgPath);      
                    altImgs = altImgs.map(img => `${this.relativePhotoImgPath}${marker.id}/${img}`);      
                    markerData.photos = [...blogImgs, ...altImgs];
                    // resolve promise once data is read and reformatted 
                    this.waitForExecutionComplete(markerData, resolve);
                } catch(err) {
                    reject(err)
                }
            })
        });

        Promise.all(createMarkerDataPromises)
            .then((markerInfo) => {
                this.writeFile(markerInfo);
            });
    }

    /**
     * Filter out entryStamp img and redundant imgs from photo gallery listing.
     * @param {blogImgs} array of blog images 
     */
    filterBlogImgs(blogImgs) {
        const regex = RegExp('introImg.jpg|entryStamp.png|(--(sm|md|lg).jpg$)');
        return  blogImgs.filter((img) => {
            return !regex.test(img);
        });
    }

    collectPhotos(markerObj, path, filterPhotos) {
        try {
            return fs.readdirSync(`${path}${markerObj.id}`);
        } catch(err) {
            console.log(`Unable to collect photo data at ${path}${markerObj.id}`);
            return [];
        }
    }

    /**
     * Wait for provided assertion to equal true before returning object
     * @returns {object} markerInfor
     */
    waitForExecutionComplete(markerInfo, callback) {
        var i = 0;
        // store the interval id to clear in future
        var intr = setInterval(() => {
            if(this.isFetchingGeo) {
                clearInterval(intr);
                callback(markerInfo);
            }
            // clear the interval if `i` reached 100
            if (++i == 5) {
                clearInterval(intr);
                throw new Error(`\x1b[31mdata collection for ${markerInfo.id} timed out.\x1b[0m`);
            }
        }, 1000);
    }

    // given a location, 
    // fetch corresponding geo coordinates from
    // google maps API
    getCoordinates(markerObj) {
        console.assert(process.env.GOOGLE_MAPS_API_KEY, "\x1b[31m%s\x1b[0m", "Please provide a GOOGLE_MAPS_API_KEY in your environmental variables");
        
        fetch(`${googleMapsLocationURL}${markerObj.location}&key=${process.env.GOOGLE_MAPS_API_KEY}`)
            .then(res => res.json())
            .then(json => {
                const {status,results } = json || {};
                if(status && status == 'OK') {
                    markerObj.geoLocation = results[0].geometry.location;
                    this.isFetchingGeo = true;
                } else {
                    throw new Error(`There was an error fetching location information for ${location}, ${status}`)
                }
            });
    }

    writeFile(fileContents) {
        const moduleExport = `module.exports = {markerData: ${JSON.stringify(fileContents)}};`;
        fs.writeFile(this.outputFile, `${autoGeneratedNotice}${moduleExport}`, (err) => {
            if(err) {
                throw new Error(`\x1b[31mdFailed to write Photo Gallery Data to file.\x1b[0m`)
                console.log(err);
            } else {
                console.log('\x1b[32mSuccessfully generated Photo Gallery Data.\x1b[0m')
            }
        });
    }
 }

 function main(photoGalleryMarkers) {
    const generator = new geoPhotoGalleryGenerator(photoGalleryMarkers);   
}

 main(photoGalleryData.photoGalleryMarkers);