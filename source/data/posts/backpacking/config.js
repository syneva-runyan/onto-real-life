export default {
  id: "backpacking",
  tags: ["backpacking", "arizonia", "usa", "southwest", "hike", "hiking"],
  title: "Long Distance Backpacking",
  tagLine: "Category 2 Fun",
  datePublished: "29 January, 2018",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
