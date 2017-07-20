import PostHelper from "../../source/js/utils/post-helper.js";

describe("Post Helper", () => {
  it("should have an xmlhttp fn provided and set", () => {
    expect(PostHelper.xmlhttp).toBeTruthy();
  });

  describe("parsePostResponse", () => {
    it("should return a func that can be used to parse provided requestObj success", () => {
      const mockCallback = jest.fn();
      const requestObj = {};

      const parser = PostHelper.parsePostResponse(requestObj, mockCallback);

      parser();
      expect(mockCallback).not.toHaveBeenCalled();

      requestObj.readyState = 4;
      requestObj.status = 200;
      parser();
      expect(mockCallback).toHaveBeenCalled();
    });
  });
  describe("getPost", () => {
    let onChangeSpy = jest.fn();
    let openSpy = jest.fn();
    let sendSpy = jest.fn();

    beforeEach(() => {
      PostHelper.xmlhttp = class xmlhttp {
        constructor() {
          this.onreadystatechange = null;
          this.open = openSpy;
          this.send = sendSpy;
        }
      };
      PostHelper.postAssetBase = "some/asset/path";
      PostHelper.contentFile = "content.html";
    });
    it("should generate an xml request using provided data", () => {
      const callback = jest.fn();
      PostHelper.getPost("postId", callback);

      expect(openSpy).toHaveBeenCalledWith(
        "GET",
        "some/asset/path/postId/content.html",
        true,
      );
      expect(sendSpy).toHaveBeenCalled();
    });
  });
});
