export default {
    id: "movingBackToANewPlace",
    tags: [
     "alaska",
     "home"
    ],
    title: "Moving Back to a New Place",
    datePublished: "18 February, 2022",
    tagLine: "Alaska",
    component: async ()=> { const content = await import("./Content.jsx"); return content.default },
  };
  