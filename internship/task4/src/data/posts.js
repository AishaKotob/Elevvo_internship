// src/data/posts.js
export const categories = ["All", "Tech", "Travel", "Food", "Drinks"];

export const posts = [
  // --- TECH (logos stay the same) ---
  {
    id: 1,
    title: "Intro to Python",
    category: "Tech",
    date: "2025-06-01",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    excerpt: "Why Python is great for automation, data, and fast prototyping.",
  },
  {
    id: 2,
    title: "Java Essentials",
    category: "Tech",
    date: "2025-05-20",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    excerpt: "Classes, objects, and strong typing for reliable code.",
  },
  {
    id: 3,
    title: "React Components & Hooks",
    category: "Tech",
    date: "2025-05-15",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    excerpt: "Build interactive UIs with components and hooks.",
  },
  {
    id: 4,
    title: "PHP for the Web",
    category: "Tech",
    date: "2025-05-05",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    excerpt: "From simple forms to lightweight REST APIs.",
  },

  // Extra tech
  {
    id: 17,
    title: "JavaScript",
    category: "Tech",
    date: "2025-06-05",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    excerpt: "The language of the web.",
  },
  {
    id: 18,
    title: "TypeScript",
    category: "Tech",
    date: "2025-06-03",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    excerpt: "Safer JavaScript with types.",
  },
  {
    id: 19,
    title: "C++",
    category: "Tech",
    date: "2025-05-29",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    excerpt: "Performance and control with RAII.",
  },
  {
    id: 20,
    title: "C#",
    category: "Tech",
    date: "2025-05-27",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    excerpt: ".NET for desktop, web, and games.",
  },
  {
    id: 21,
    title: "Go",
    category: "Tech",
    date: "2025-05-25",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    excerpt: "Fast builds and concurrency with goroutines.",
  },
  {
    id: 22,
    title: "Ruby",
    category: "Tech",
    date: "2025-05-18",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    excerpt: "Expressive language; Rails highlights.",
  },
  {
    id: 23,
    title: "Kotlin",
    category: "Tech",
    date: "2025-05-12",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    excerpt: "Modern JVM language with null-safety.",
  },
  {
    id: 24,
    title: "Swift",
    category: "Tech",
    date: "2025-05-09",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    excerpt: "iOS development with SwiftUI.",
  },

  // --- TRAVEL (country-related photos) ---
  {
    id: 5,
    title: "Syria",
    category: "Travel",
    date: "2025-04-28",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Syria%20landscape.jpg?width=1280",
    excerpt: "From coast to desert; note: this is my home country.",
  },
  {
    id: 6,
    title: "Turkey",
    category: "Travel",
    date: "2025-04-20",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cappadoccia_Balloon_01.JPG?width=1280",
    excerpt: "Hot-air balloons over Cappadocia and vibrant bazaars.",
  },
  {
    id: 7,
    title: "Saudi Arabia",
    category: "Travel",
    date: "2025-04-12",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Elephant%20Rock%202020.jpg?width=1280",
    excerpt: "Elephant Rock at Al-‘Ula and endless dunes.",
  },
  {
    id: 8,
    title: "Lebanon",
    category: "Travel",
    date: "2025-04-05",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Forest%20of%20The%20cedars%20of%20God.jpg?width=1280",
    excerpt: "Cedar forests and a Mediterranean coast.",
  },
  {
    id: 25,
    title: "Egypt",
    category: "Travel",
    date: "2025-04-30",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/All%20Gizah%20Pyramids.jpg?width=1280",
    excerpt: "Giza Pyramids along the Nile.",
  },
  {
    id: 26,
    title: "Morocco",
    category: "Travel",
    date: "2025-04-26",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Town%20Chefchaouen.jpg?width=1280",
    excerpt: "Chefchaouen’s blue alleys in the Rif Mountains.",
  },
  {
    id: 27,
    title: "United Arab Emirates",
    category: "Travel",
    date: "2025-04-22",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Liwa%20Desert%20Dune.jpg?width=1280",
    excerpt: "Sweeping dunes in Liwa, Abu Dhabi.",
  },
  {
    id: 28,
    title: "Jordan",
    category: "Travel",
    date: "2025-04-18",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Wadi%20Rum%20Desert%2C%20Jordan%20%2853247572120%29.jpg?width=1280",
    excerpt: "Other-worldly sandstone valleys of Wadi Rum.",
  },
  {
    id: 29,
    title: "Qatar",
    category: "Travel",
    date: "2025-04-14",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/InlandSeaQatar.jpg?width=1280",
    excerpt: "Khor Al Udaid — the Inland Sea.",
  },
  {
    id: 30,
    title: "Oman",
    category: "Travel",
    date: "2025-04-10",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Wadi_Shab.jpg?width=1280",
    excerpt: "Emerald pools and canyon hikes at Wadi Shab.",
  },

  // --- FOOD (dish-related photos) ---
  {
    id: 9,
    title: "Shawarma",
    category: "Food",
    date: "2025-03-30",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Shawarma.jpg?width=1280",
    excerpt: "Marinated meat, garlic sauce, and pickles.",
  },
  {
    id: 10,
    title: "Tabbouleh",
    category: "Food",
    date: "2025-03-25",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tabbouleh.jpg?width=1280",
    excerpt: "Parsley, bulgur, tomato, lemon — fresh and bright.",
  },
  {
    id: 11,
    title: "Grilled Meat (Shish Kebab)",
    category: "Food",
    date: "2025-03-18",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Shish-kebab-MCB.jpg?width=1280",
    excerpt: "Light spices and slow grilling for tenderness.",
  },
  {
    id: 12,
    title: "Crispy Fries",
    category: "Food",
    date: "2025-03-10",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/French_fries_20180827.jpg?width=1280",
    excerpt: "Thin cut, golden, and crunchy.",
  },
  {
    id: 31,
    title: "Falafel",
    category: "Food",
    date: "2025-03-28",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Falafel.JPG?width=1280",
    excerpt: "Crispy chickpea patties with herbs.",
  },
  {
    id: 32,
    title: "Hummus",
    category: "Food",
    date: "2025-03-26",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hummus.jpg?width=1280",
    excerpt: "Silky dip with tahini and lemon.",
  },
  {
    id: 33,
    title: "Fattoush",
    category: "Food",
    date: "2025-03-22",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fattoush_1.JPG?width=1280",
    excerpt: "Fresh salad with toasted pita and sumac.",
  },
  {
    id: 34,
    title: "Manakish Zaatar",
    category: "Food",
    date: "2025-03-16",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Manakish%20Za%27atar.jpg?width=1280",
    excerpt: "Flatbread topped with zaatar and olive oil.",
  },
  {
    id: 35,
    title: "Kunafa",
    category: "Food",
    date: "2025-03-12",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kunafa-Kanafeh.jpg?width=1280",
    excerpt: "Crispy pastry with sweet cheese syrup.",
  },

  // --- DRINKS (juice-related photos, non-alcoholic) ---
  {
    id: 13,
    title: "Fresh Orange Juice",
    category: "Drinks",
    date: "2025-02-28",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Orange_juice_1_edit1.jpg?width=1280",
    excerpt: "Bright, zesty, vitamin-C rich.",
  },
  {
    id: 14,
    title: "Fruit Smoothie",
    category: "Drinks",
    date: "2025-02-20",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Smoothie.jpg?width=1280",
    excerpt: "Mixed fruits blended smooth.",
  },
  {
    id: 15,
    title: "Mint Lemonade",
    category: "Drinks",
    date: "2025-02-12",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mint_lemonade.jpg?width=1280",
    excerpt: "Fresh lemon with mint — Middle-Eastern classic.",
  },
  {
    id: 16,
    title: "Mango Juice",
    category: "Drinks",
    date: "2025-02-05",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Glasses_of_Mango_juice.jpg?width=1280",
    excerpt: "Tropical and rich.",
  },
  {
    id: 36,
    title: "Strawberry Juice",
    category: "Drinks",
    date: "2025-02-26",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Glass_of_strawberry_juice_20180815.jpg?width=1280",
    excerpt: "Sweet and bright.",
  },
  {
    id: 37,
    title: "Watermelon Juice",
    category: "Drinks",
    date: "2025-02-24",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Watermelon_juice_in_glass.jpg?width=1280",
    excerpt: "Light, refreshing, and hydrating.",
  },
  {
    id: 38,
    title: "Pomegranate Juice",
    category: "Drinks",
    date: "2025-02-22",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pomegranate_juice_in_glass_with_ice_cubes_-kolkata.jpg?width=1280",
    excerpt: "Naturally tangy and antioxidant-rich.",
  },
  {
    id: 39,
    title: "Carrot–Orange Juice",
    category: "Drinks",
    date: "2025-02-18",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Juice_af_guler%C3%B8dder_og_appelsiner_%285335856419%29.jpg?width=1280",
    excerpt: "Bright citrus with mellow carrot sweetness.",
  },
];
