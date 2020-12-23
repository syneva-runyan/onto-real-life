export default {
  id: "eatingAlone",
  tags: [
    "food",
    "travel",
    "travel thoughts",
    "alone",
    "eating",
    "toronto",
    "canada",
  ],
  title: "Eating Alone",
  datePublished: "5 August, 2015",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
