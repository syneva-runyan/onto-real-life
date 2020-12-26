export default {
  id: "ifYouDontLeaveHere",
  tags: [
    "remote",
    "technology",
    "travel thoughts",
    "post",
    "If You Don't Leave Here"
  ],
  title: "If You Don't Leave Here",
  tagLine: "Thoughts on Remote Technology",
  datePublished: "23 December, 2020",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
