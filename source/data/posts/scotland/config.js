export default {
  id: "scotland",
  tags: [
    "orkney islands",
    "scotland",
    "destination wedding",
    "scotch",
    "whiskey",
    "highlands",
    "alba",
    "kilts",
    "vikings",
    "hiking"
  ],
  title: "Scotland",
  datePublished: "15 July, 2019",
  tagLine: "Living up to the Romanticism",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
