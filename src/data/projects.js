

const projects = [
  {
    id: "tradex",
    title: "TradeX",
    category: "Full Stack · Trading Platform",

    description:
      "A full-stack trading platform inspired by modern brokerage applications, built with a real-time market simulation and a modular backend architecture.",

    featured: true,

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Socket.IO",
      "JWT",
      "Zod",
      "Docker",
    ],

    highlights: [
      "Real-time market simulation",
      "Live price updates with Socket.IO",
      "Watchlist management",
      "Order management",
      "Portfolio tracking",
      "JWT authentication",
      "Redis caching",
      "MongoDB persistence",
      "Request validation with Zod",
      "Dockerized development environment",
    ],

    github: "",
    live: "",
  },

  {
    id: "shoppy",
    title: "Shoppy",
    category: "Backend · E-Commerce",

    description:
      "A backend-focused e-commerce application implementing authentication, product management, vendor management, order processing, and REST APIs.",

    featured: true,

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],

    highlights: [
      "User authentication",
      "Product management",
      "Vendor management",
      "Order processing",
      "RESTful API architecture",
    ],

    github:
      "https://github.com/karthhikyadav/Backend_NodeJs_Shoppy",

    live: "",
  },

  {
    id: "tiffin-shop",
    title: "Tiffin Shop",
    category: "Frontend · Food Ordering",

    image: "/tiffens-shopp.png",

    description:
      "A responsive food ordering platform built for a local tiffin business with menu browsing, cart functionality, checkout flow, and WhatsApp ordering.",

    featured: true,

    technologies: [
      "React",
      "Tailwind CSS",
      "Context API",
    ],

    highlights: [
      "Responsive interface",
      "Menu browsing",
      "Shopping cart",
      "Checkout flow",
      "WhatsApp ordering",
    ],

    github:
      "https://github.com/karthhikyadav/tiffensshop-website",

    live: "https://tiffensshop-website.vercel.app/",
  },

  {
    id: "finance-tracker",
    title: "Finance Tracker",
    category: "Full Stack · Finance",

    description:
      "A full-stack application designed to track and manage personal financial activity.",

    featured: true,

    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    highlights: [
      "Expense tracking",
      "Financial management",
      "Backend API",
      "Persistent data storage",
    ],

    github:
      "https://github.com/karthhikyadav/Finance-tracker",

    live: "",
  },
];

export default projects;