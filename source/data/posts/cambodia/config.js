export default {
  id: "cambodia",
  tags: ["asia", "south east asia", "temples", "siem reap", "phnom pehn"],
  title: "Cambodia",
  tagLine: "Can I be Lara Croft?",
  datePublished: "30 September 2017",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
