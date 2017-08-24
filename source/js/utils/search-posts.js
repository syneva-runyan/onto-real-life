import postCatalogue from "../../data/posts";

const dictFilterList = ["a", "the", "an", "of", "and"];

// Given a string and pos & length of independant word
// surrounding by white spaces in that string,
// return original string with indepedant word removed.
const removeSubstring = function (ogString, subStringStartIndex, subStringLength) {
    const firstPart = ogString.substring(0, subStringStartIndex);
    const secondPart = ogString.substring(subStringStartIndex + subStringLength, ogString.length);
    return firstPart + secondPart;
}

// check for searchTerm inside a given string
// and return start index of term (including preceding white space) || -1 if term 
// is not present.
const checkForSubstring = function(stringToCheck, subString) {
    let startIndex = stringToCheck.indexOf(` ${subString} `);

    if(startIndex !== -1) {
        return startIndex;
    }

    // check to see if subString is last word in stringToCheck.
    const endingSubStringStart = stringToCheck.length - (subString.length + 1);
    const endCheck = stringToCheck.indexOf(` ${subString}`, endingSubStringStart);
    startIndex = (endCheck !== -1) ? endCheck : -1;

    if(startIndex !== -1) {
        return startIndex; 
    }

    // check to see if subString is first word in stringToCheck.
    const startCheck = stringToCheck.indexOf(`${subString} `);
    return (startCheck === 0) ? startCheck : -1;
}

// lowercase search terms
// and remove unhelpful words
const cleanSearchTerm = function(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    for(let wordToRemove of dictFilterList) {
        let startIndex = checkForSubstring(searchTerm, wordToRemove);

        while (startIndex !== -1) {
            // making sure to include preceding white space for removal
            // from substring
            searchTerm = removeSubstring(searchTerm, startIndex, wordToRemove.length + 1);
            startIndex = checkForSubstring(searchTerm, wordToRemove);
        }
    }

    return searchTerm;
}

class SearchPosts {
    constructor(props) {
    }
}

// push tagged terms, post titles, and post taglines 
// for each post
// to a search dictionary
class SearchDictionary {
    constructor(posts) {
        this.dict = {};
        // start predictive search after 3 char are provided
        this.predictiveSearchStartIndex = 3;

        if(posts && typeof(posts) === "object") {
            Object.keys(posts).forEach(postEntry => {
                const postInfo = posts[postEntry];
                const title = cleanSearchTerm(postInfo.title);
                const tagLine = postInfo.tagLine ? cleanSearchTerm(postInfo.tagLine) : "";
                const tags = postInfo.tags ? postInfo.tags : [];
                this.createDictItem(postEntry, title, tagLine, ...tags);
            });
        } else {
            console.info("For search to work properly, please provide post catalog object to dictionary searcher");
        }

        return this;
    }

    find(searchTerm) {
        return this.dict[searchTerm] ? this.dict[searchTerm].values : null;
    }

    appendEntryToPath(currObj, charToAppend) {
        // check to see if char path already exists
        if(currObj[charToAppend]) {
            return currObj;
        }
        const newEntry = {};
        newEntry[charToAppend] = {};
        return Object.assign(currObj, newEntry);
    }

    // add provided value
    // to appropriate dictionary locations.
    appendToDict(dictionary, phrase, value) {
        for(let charIndex = this.predictiveSearchStartIndex; charIndex <= phrase.length; charIndex ++) {
            const chars = phrase.substring(0, charIndex);
            dictionary = this.appendEntryToPath(dictionary, chars);
  
            if(dictionary[chars].values) {
                if(dictionary[chars].values.indexOf(value) === -1) {
                    dictionary[chars].values.push(value);
                }
            } else {
                dictionary[chars].values = [value];
            } 
        }

        return dictionary;
    }

    createDictItem(value, ...terms) {
        terms.forEach((term) => {
            this.dict = this.appendToDict(this.dict, term, value);
        });
    }
}

const catalogSearcher = new SearchDictionary(postCatalogue);
module.exports = {
    catalogSearcher,
    SearchPosts,
    SearchDictionary,
    checkForSubstring,
    removeSubstring,
    cleanSearchTerm,
}
