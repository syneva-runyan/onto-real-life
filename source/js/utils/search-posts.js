/* eslint no-console: 0 */
import * as postCatalogue from "../../data/posts";

const dictFilterList = ["a", "the", "an", "of", "and"];

// Given a string and pos & length of independant word
// surrounding by white spaces in that string,
// return original string with indepedant word removed.
const removeSubstring = function(
  ogString,
  subStringStartIndex,
  subStringLength,
) {
  const firstPart = ogString.substring(0, subStringStartIndex);
  const secondPart = ogString.substring(
    subStringStartIndex + subStringLength,
    ogString.length,
  );
  return firstPart + secondPart;
};

// check for searchTerm inside a given string
// and return start index of term (including preceding white space) || -1 if term
// is not present.
const checkForSubstring = function(stringToCheck, subString) {
  let startIndex = stringToCheck.indexOf(` ${subString} `);

  if (startIndex !== -1) {
    return startIndex;
  }

  // check to see if subString is last word in stringToCheck.
  const endingSubStringStart = stringToCheck.length - (subString.length + 1);
  const endCheck = stringToCheck.indexOf(` ${subString}`, endingSubStringStart);
  startIndex = endCheck !== -1 ? endCheck : -1;

  if (startIndex !== -1) {
    return startIndex;
  }

  // check to see if subString is first word in stringToCheck.
  const startCheck = stringToCheck.indexOf(`${subString} `);
  return startCheck === 0 ? startCheck : -1;
};

// lowercase search terms
// and remove unhelpful words
const cleanSearchTerm = function(searchTerm = "") {
  let cleanedSearchTerm = searchTerm.toLowerCase();
  // eslint-disable-next-line no-restricted-syntax
  for (const wordToRemove of dictFilterList) {
    let startIndex = checkForSubstring(cleanedSearchTerm, wordToRemove);

    while (startIndex !== -1) {
      // making sure to include preceding white space for removal
      // from substring
      cleanedSearchTerm = removeSubstring(
        cleanedSearchTerm,
        startIndex,
        wordToRemove.length + 1,
      );
      startIndex = checkForSubstring(cleanedSearchTerm, wordToRemove);
    }
  }

  return cleanedSearchTerm;
};

// push tagged terms, post titles, and post taglines
// for each post
// to a search dictionary
class SearchDictionary {
  constructor(posts) {
    this.dict = {};
    // start predictive search after 3 char are provided
    this.predictiveSearchStartIndex = 3;
    this.posts = posts;

    if (posts && typeof posts === "object") {
      Object.keys(posts).forEach(postEntry => {
        const postInfo = posts[postEntry];
        const title = cleanSearchTerm(postInfo.title);
        const tagLine = postInfo.tagLine
          ? cleanSearchTerm(postInfo.tagLine)
          : "";
        const tags = postInfo.tags ? postInfo.tags : [];
        this.createDictItem(postEntry, title, tagLine, ...tags);
      });
    } else {
      console.info(
        "For search to work properly, please provide post catalog object to dictionary searcher",
      );
    }

    return this;
  }

  find(searchTerm) {
    const cleanedSearchTerm = cleanSearchTerm(searchTerm);
    const termMatches = this.dict[cleanedSearchTerm]
      ? this.dict[cleanedSearchTerm].values
      : [];
    return termMatches.map(suggestedMatch => {
      const postKey = suggestedMatch.searchSuggestion;
      return {
        matchedPhrases: suggestedMatch.matchedPhrases,
        ...this.posts[postKey],
      };
    });
  }

  appendEntryToPath(currObj, charToAppend) {
    // check to see if char path already exists
    if (currObj[charToAppend]) {
      return currObj;
    }
    const newEntry = {};
    newEntry[charToAppend] = {};
    return Object.assign(currObj, newEntry);
  }

  // add provided value
  // to appropriate dictionary locations.
  appendToDict(dictionary, phrase, value) {
    let updatedDictionary = dictionary;
    for (
      let charIndex = this.predictiveSearchStartIndex;
      charIndex <= phrase.length;
      charIndex++
    ) {
      const chars = phrase.substring(0, charIndex);
      updatedDictionary = this.appendEntryToPath(updatedDictionary, chars);

      // make sure entry contains matched value and search phrase
      const searchEntry = {
        searchSuggestion: value,
        matchedPhrases: [phrase],
      };

      if (updatedDictionary[chars].values) {
        // check to make sure search entry does not already exist.
        const searchSuggestions = this.addSearchSuggestion(
          updatedDictionary[chars].values,
          searchEntry,
        );
        updatedDictionary[chars].values = searchSuggestions;
      } else {
        updatedDictionary[chars].values = [searchEntry];
      }
    }

    return updatedDictionary;
  }

  // add new search suggestion to list of existing search suggestions.
  // if new search suggestion's post already exists in provided list of suggestions,
  // add new search suggestion's matchedPhrase to the matching suggestion's
  // matchedPhrase array.
  addSearchSuggestion(existingEntries, newEntry) {
    let suggestionExists = false;
    const searchSuggestions = existingEntries.map(entry => {
      if (entry.searchSuggestion === newEntry.searchSuggestion) {
        suggestionExists = true;
        // eslint-disable-next-line no-param-reassign
        entry.matchedPhrases = entry.matchedPhrases.concat(
          newEntry.matchedPhrases,
        );
      }

      return entry;
    });

    !suggestionExists && searchSuggestions.push(newEntry); // eslint-disable-line no-unused-expressions
    return searchSuggestions;
  }

  createDictItem(value, ...terms) {
    terms.forEach(term => {
      this.dict = this.appendToDict(this.dict, term, value);
    });
  }
}

const catalogSearcher = new SearchDictionary(postCatalogue);

export {
  catalogSearcher,
  SearchDictionary,
  checkForSubstring,
  removeSubstring,
  cleanSearchTerm,
};
