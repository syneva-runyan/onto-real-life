export default {
  id: "newZealandNorthHiking",
  tags: [
    "new zealand",
    "hiking",
    "coromandel",
    "auckland",
    "wellington",
    "tongarrio crossing",
    "tongarrio",
    "taupo",
    "whangarei",
    "waiheke",
  ],
  title: "NZ North Island Hiking",
  datePublished: "9 June, 2017",
  tagLine: "Hiking Catalogue",
  component: async ()=> { const content = await import("./Content.jsx"); return content.default },
};
