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

 /** 
  * This class takes in photo gallery information
  * And outputs a json file used to construct
  * A geo-based photo gallery inside the application
 */
 class geoPhotoGalleryGenerator {
    constructor(markerData) {
        this.markerInfo = {};
        this.blogPostImgPath = `${process.cwd()}/source/assets/img/blogs/`;
        this.photoImgPath = `${process.cwd()}/source/assets/img/photos/`;
        this.isFetchingGeo = false;

        markerData.forEach((marker) => {
            // create markerInfo key
            // for each provided marker
            this.markerInfo[marker.id] = { ...marker };

            this.getCoordinates(this.markerInfo[marker.id], this.isFetchingGeo);
    
            // before returning, make sure that 
            // get geolocation for marker
            const blogImgs = marker.isBlogPost ? this.collectPhotos(marker, this.blogPostImgPath) : [];
            const altImgs = this.collectPhotos(marker, this.photoImgPath);            
            this.markerInfo[marker.id].photos = [...blogImgs, ...altImgs];
            this.waitForExecutionComplete(this.markerInfo[marker.id]);
        });
    }

    collectPhotos(markerObj, path) {
        return fs.readdirSync(`${path}${markerObj.id}`);
    }

    /**
     * Wait for provided assertion to equal true before returning object
     * @returns {object} markerInfor
     */
    waitForExecutionComplete(markerInfo) {
        var i = 0;
        // store the interval id to clear in future
        var intr = setInterval(() => {
            if(this.isFetchingGeo) {
                clearInterval(intr);
                console.log(markerInfo);
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
                    markerObj.geoLoaction = results[0].geometry.location;
                    this.isFetchingGeo = true;
                } else {
                    throw new Error(`There was an error fetching lcoation information for ${location}, ${status}`)
                }
            });
    }
 }


 function main(photoGalleryMarkers) {
    const generator = new geoPhotoGalleryGenerator(photoGalleryMarkers);   
    // generator.writeFile();
}

 main(photoGalleryData.photoGalleryMarkers);