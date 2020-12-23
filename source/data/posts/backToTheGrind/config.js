export default {
  id: "backToTheGrind",
  tags: ["backpacking", "real life", "travel thoughts", "why", "atlanta"],
  title: "Back To The Grind",
  tagLine: "Readjusting to Normal Life",
  datePublished: "27 February, 2019",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
