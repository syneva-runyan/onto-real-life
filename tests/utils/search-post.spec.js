import { searcher, SearchPosts, SearchDictionary, DictionaryItem } from "../../source/js/utils/search-posts.js";

describe("Search Posts", () => {
    describe("Search Dictionary", () => {
        it("should split provided text terms and add them as entries to dictionary", () => {
            const exTermsOne = "This is an example term";
            const exTermsTwo = "Once in a lifetime journey to Prauge";

            const dictionary = new SearchDictionary(exTermsOne, exTermsTwo);

            expect(dictionary.entries).toEqual(12);
        })
    })
});
