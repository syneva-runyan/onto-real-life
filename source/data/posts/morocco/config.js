export default {
  id: "morocco",
  tags: [
    "morocco",
    "africa",
    "camels",
    "monkies",
    "animals",
    "culture",
    "fez",
    "muslim",
    "chefchaouen",
    "haggle",
    "marrakesh",
    "ifran",
  ],
  title: "Morocco",
  datePublished: "13 May, 2017",
  tagLine: "Culture Shock",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
