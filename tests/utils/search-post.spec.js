import { cleanSearchTerm, searcher, SearchPosts, SearchDictionary, DictionaryItem, removeSubstring, checkForSubstring } from "../../source/js/utils/search-posts.js";

describe("Search Posts", () => {
    describe("checkForSubstring", () => {
        let searchTerm = "a hello world";
        expect(checkForSubstring(searchTerm, "a")).toEqual(0);

        searchTerm = "hello a world";
        expect(checkForSubstring(searchTerm, "a")).toEqual(5);

        searchTerm = "hello world a";
        expect(checkForSubstring(searchTerm, "a")).toEqual(11);
    })
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
        it("should lowercase provided words", ()=> {
            expect(cleanSearchTerm("Hello World")).toEqual("hello world");
        });
        it("should remove 'a' 'the' 'and' and 'of' from provided words", () => {
           expect(cleanSearchTerm("the hello a the and of a world a")).toEqual("hello world"); 
        });
    });
    describe("Search Dictionary", () => {
        it("should split provided text terms and add them as entries to dictionary", () => {
            // const exTermsOne = "This is an example term";
            // const exTermsTwo = "Once in a lifetime journey to Prauge";

            // const dictionary = new SearchDictionary(exTermsOne, exTermsTwo);

            // expect(dictionary.entries).toEqual(12);
        })
    })
});
