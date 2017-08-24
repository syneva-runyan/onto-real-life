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
        this.entries = [];
        // posts.forEach(postEntry => {
        //     postEntry.title
        //     textEntry.toLowerCase();
        //     textEntry.split(" ").filter(word => {
        //         return dictFilterList.indexOf(word) !==-1;
        //     });
        // });
    }
}

const dictionaryContent = new SearchDictionary(postCatalogue);
module.exports = {
    searcher: new SearchPosts(dictionaryContent),
    SearchPosts,
    SearchDictionary,
    checkForSubstring,
    removeSubstring,
    cleanSearchTerm,
}
