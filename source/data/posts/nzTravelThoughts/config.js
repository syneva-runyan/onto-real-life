export default {
  id: "nzTravelThoughts",
  tags: [
    "travel thoughts",
    "new zealand",
    "alone",
    "traveling alone",
    "travel alone",
    "solo traveler",
    "cooking",
  ],
  title: "NZ Travel Thoughts",
  datePublished: "5 July, 2017",
  tagLine: "Q&A",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
