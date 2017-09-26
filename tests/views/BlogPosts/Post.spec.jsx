import React from "react";
import { Post } from "../../../source/js/views/BlogPosts/index.js";
import {
  PostTitle,
  PostContent,
} from "../../../source/js/components/BlogPosts";
import { shallow } from "enzyme";

const mockedPost = {
  "id": "somePost",
  "title": "Post Title",
  "datePublished": "5 July, 2017",
  "tagLine": "tagline",
  "component": function(props) { return (<p>Mocked Component</p>)},
}

const mockedCatalaog = {
  mockedPost
}

describe("Post", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Post />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });

it("should render blog post title and content iff proved correct postId", () => {
    const mockProps = {
      assetBase: "/assets/img/blogs",
      postCatalog: mockedCatalaog,
      match: {
        params: {
            postId: "mockedPost"
        }
      }
    };
    component = shallow(<Post {...mockProps} />);

    const blogPostTitle = component.find(PostTitle);
    const blogPostContent = component.find(PostContent);

    expect(blogPostContent.length).toEqual(1);
    expect(blogPostTitle.length).toEqual(1);
  });

  describe("post context", () => {
    it("should return next and previous posts listed in selected post catalog", () => {
      const collection = {
        one: "one",
        two: "two",
        three: "three",
      };

      const context = component.instance().getPostContext(collection, "two");

      expect(context).toEqual({
        prev: "three",
        next: "one",
      });
    });
    it("should return null when next or previous post is not available", () => {
      const collection = {
        one: "one",
        two: "two",
        three: "three",
      };

      const context = component.instance().getPostContext(collection, "three");

      expect(context).toEqual({
        prev: null,
        next: "two",
      });
    });
  });
});
