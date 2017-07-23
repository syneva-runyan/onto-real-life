// this purpose of this util is to get & save edited versions of blog posts.
const postAssetPath = "/data/posts";
const contentFileName = "content.html";
let xmlhttpRequest;

if (window.XMLHttpRequest) {
  xmlhttpRequest = window.XMLHttpRequest;
} else {
  xmlhttpRequest = ActiveXObject.bind("Microsoft.XMLHTTP");
}

class PostHelper {
  constructor(xmlhttp, postAssetBase, contentFile) {
    this.xmlhttp = xmlhttp;
    this.postAssetBase = postAssetBase;
    this.contentFile = contentFile;
  }

  parsePostResponse(requestObj, callback) {
    // TODO handle failures
    return function() {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        callback(requestObj.responseText);
      }
    };
  }
  getPost(postId, callback) {
    const xmlRequest = new this.xmlhttp();
    xmlRequest.onreadystatechange = this.parsePostResponse(
      xmlRequest,
      callback,
    );
    xmlRequest.open(
      "GET",
      `${this.postAssetBase}/${postId}/${this.contentFile}`,
      true,
    );
    xmlRequest.send();
  }
  /* eslint-disable no-unused-vars */
  savePost(postId, content) {
    // const a = document.getElementById("a");
    // const file = new Blob([content], { type: "html" });
    // a.href = URL.createObjectURL(`${postAssetBase}/${postId}/${this.contentFile}`);
    // a.download = name;
  }
}

module.exports = new PostHelper(xmlhttpRequest, postAssetPath, contentFileName);
