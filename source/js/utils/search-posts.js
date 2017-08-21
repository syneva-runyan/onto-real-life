import postCatalogue from "../../data/posts";

const dictFilterList = ["a", "the", "an", "of"];

class SearchPosts {
    constructor(props) {
    }
}

class SearchDictionary {
    constructor(...props) {
        this.entries = [];
        props.forEach(textEntry => {
            textEntry.toLowerCase();
            textEntry.split(" ").filter(word => {
                return dictFilterList.indexOf(world) !==-1;
            });
        });
    }
}

class DictionaryItem {

}

const dictionaryContent = new SearchDictionary(postCatalogue);
module.exports = {
    searcher: new SearchPosts(dictionaryContent),
    SearchPosts,
    SearchDictionary,
    DictionaryItem
}
