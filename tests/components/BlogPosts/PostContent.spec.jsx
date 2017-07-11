import React from "react";
import PostContent from "../../../source/js/components/BlogPosts/PostContent";
import PostHelper from "../../../source/js/utils/post-helper";
import { shallow } from "enzyme";

jest.mock("../../../source/js/utils/post-helper");

describe("Post Content", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PostContent postId="postId" />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });

  it("should call Post Helper's getPost on componentDidMount", () => {
    component.instance().componentDidMount();
    expect(PostHelper.getPost).toHaveBeenCalledWith(
      "postId",
      component.instance().boundSetPostContent
    );
  });

  describe("setPostContent", () => {
    it("should set provided value as state's content value", () => {
      const content = "some post content";
      component.instance().setPostContent(content);
      expect(component.instance().state.content).toEqual(content);
    });
  });

  describe("savePost", () => {
    it("should call Post Helper's save post func with state's content value", () => {
      const content = "post content";
      component.instance().setState({
        content: content
      });

      component.instance().savePost();

      expect(PostHelper.savePost).toHaveBeenCalledWith("postId", content);
    });
  });
});
