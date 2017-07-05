// this purpose of this util is to get & save edited versions of blog posts.
const postAssetPath = "/data/posts";
let xmlhttp;

if (window.XMLHttpRequest) {
  xmlhttp = XMLHttpRequest;
} else {
  xmlhttp = ActiveXObject.bind("Microsoft.XMLHTTP");
}

class PostHelper {
  parsePostResponse(requestObj, callback) {
    // TODO handle failures
    return function() {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        callback(requestObj.responseText);
      }
    };
  }
  getPost(postId, callback) {
    const xmlRequest = new xmlhttp();
    xmlRequest.onreadystatechange = this.parsePostResponse(
      xmlRequest,
      callback
    );
    xmlRequest.open("GET", `${postAssetPath}/${postId}/content.html`, true);
    xmlRequest.send();
  }
  /* eslint-disable no-unused-vars */
  savePost(postId, content) {
    const a = document.getElementById("a");
    // const file = new Blob([content], { type: "html" });
    a.href = URL.createObjectURL(`${postAssetPath}/${postId}/content.html`);
    a.download = name;
  }
}

module.exports = new PostHelper();
