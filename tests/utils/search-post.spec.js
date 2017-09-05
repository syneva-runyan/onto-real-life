import {
  cleanSearchTerm,
  searcher,
  SearchPosts,
  SearchDictionary,
  DictionaryItem,
  removeSubstring,
  checkForSubstring,
} from "../../source/js/utils/search-posts.js";

describe("Search Posts", () => {
  describe("checkForSubstring", () => {
    let searchTerm = "a hello world";
    expect(checkForSubstring(searchTerm, "a")).toEqual(0);

    searchTerm = "hello a world";
    expect(checkForSubstring(searchTerm, "a")).toEqual(5);

    searchTerm = "hello world a";
    expect(checkForSubstring(searchTerm, "a")).toEqual(11);
  });
  describe("removeSubstring", () => {
    it("should remove independant word from provided string when given substring pos and length", () => {
      let ogTerm = "hello my world";
      let expected = "hello world";
      let actual = removeSubstring(ogTerm, 5, 3);
      expect(actual).toEqual(expected);

      ogTerm = "hello world a";
      expected = "hello world";
      actual = removeSubstring(ogTerm, 11, 2);
      expect(actual).toEqual(expected);

      ogTerm = "a hello world";
      expected = "hello world";
      actual = removeSubstring(ogTerm, 0, 2);
      expect(actual).toEqual(expected);
    });
  });
  describe("Clean term", () => {
    it("should lowercase provided words", () => {
      expect(cleanSearchTerm("Hello World")).toEqual("hello world");
    });
    it("should remove 'a' 'the' 'and' and 'of' from provided words", () => {
      expect(cleanSearchTerm("the hello a the and of a world a")).toEqual(
        "hello world",
      );
    });
  });
  describe("Search Dictionary", () => {
    it("should throw info if not provided expected postcatalog", () => {
      const expectedInfo =
        "For search to work properly, please provide post catalog object to dictionary searcher";
      const spy = spyOn(console, "info");
      new SearchDictionary("invalidPostCatalog");
      expect(spy).toHaveBeenCalledWith(expectedInfo);
    });
    describe("appendToDic", () => {
      it("should breakdown provided term by char and append to dictionary tree", () => {
        const emptyDict = {};
        const termToAdd = "add t";
        const value = "VALUE";
        const searchEntry = {
          searchSuggestion: value,
          matchedPhrase: termToAdd,
        };

        const emptySearchDict = new SearchDictionary({});
        const actual = emptySearchDict.appendToDict(
          emptyDict,
          termToAdd,
          value,
        );
        const expected = {
          add: {
            values: [searchEntry],
          },
          "add ": {
            values: [searchEntry],
          },
          "add t": {
            values: [searchEntry],
          },
        };
        expect(actual).toEqual(expected);
      });
    });
    it("should be able to find related tags from dictionary", () => {
      const title = "This is an example term";
      const title2 = "Another unrelated title";
      const tags2 = ["unrelated", "tagtwo"];
      const tagLine = "Once in a lifetime journey to Prauge";
      const tags = ["tagone", "tagtwo"];

      const exPost = {
        post1: {
          title,
          tagLine,
          tags,
        },
        post2: {
          title: title2,
          tags: tags2,
        },
      };

      const dictionary = new SearchDictionary(exPost);

      expect(dictionary.find("tagTw")).toEqual([
        {
          ...exPost.post1,
          matchedPhrase: "tagtwo",
        },
        {
          ...exPost.post2,
          matchedPhrase: "tagtwo",
        },
      ]);
      expect(dictionary.find("onc")).toEqual([
        {
          ...exPost.post1,
          matchedPhrase: "once in lifetime journey to prauge",
        },
      ]);
    });
    it("should return an empty array if no predictive results are available", () => {
      const emptyDict = new SearchDictionary({});
      expect(emptyDict.find("something")).toEqual([]);
    });
  });
});
