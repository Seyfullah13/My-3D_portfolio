const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
 
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];



const logoIconsList = [
  {
    imgPath: "/images/logos/Innovqube.jpg",
  },
  {
    imgPath: "/images/logos/niwee-productions.png",
  },
 
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Symfony Developer",
    imgPath: "/images/logos/Symfony.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/Php.svg",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Symfony Developer",
    modelPath: "/models/symfony-white.glb",
    // increased scale slightly so it’s same visual weight as React
    scale: 0.06,
    rotation: [1, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/Php.glb",
    // reduced from 5 → 1 so it’s not gigantic
    scale: 0.06,
    rotation: [1, 0 , 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
   
    logoPath: "/images/Innovqube.png",
    title: "Web Developer Internship",
    date: "August 2024 - October 2024",
    responsibilities: [
      "Implemented price insertion into FullCalendar with a configurable minimum stay duration.",

"Developed user settings interfaces according to client mockups and specifications"
    ],
  },
  {
    
    logoPath: "/images/Niwee.png",
    title: "Professional Web Developer Immersion Experience",
    date: "November 2022 ",
    responsibilities: [
     " Over one week, I explored daily web development tasks—including planning, coding, code reviews, and deployment—and learned HTML markup with CSS to build responsive layouts.",

      "I also applied Bootstrap components to create mobile-first interfaces."
    ],
  },
 
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logos/Innovqube.jpg",
  },
  {
    name: "logo2",
    imgPath: "/images/logos/niwee-productions.png",
  },
  
];



const socialImgs = [
  

  {
    name: "Github",
    url: "https://github.com/Seyfullah13",
    imgPath: "/images/Github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/seyfullah-o-8310aa18a/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
