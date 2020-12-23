export default {
  id: "seeTheWorld",
  tags: ["travel thoughts", "why"],
  title: "Goal: See the World",
  datePublished: "5 March, 2017",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
