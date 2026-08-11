import profileImage from "../assets/profile.jpg";
import resumePdf from "../assets/Ali Emam Rabbi Resume.pdf";

// Single source of truth for portfolio content.
export const profile = {
  name: "Ali Emam Rabbi",
  greeting: "Hello, I'm",
  title: "Developer / Designer / Creator",
  heroWords: ["Developer", "Creator", "Designer"],
  bio: "A passionate CSE student exploring web development and building real-world projects with modern technologies.",
  email: "rabbiboy226@gmail.com",
  location: "Jhenaidah, Bangladesh",
  imageSrc: profileImage,
  resumeHref: resumePdf,
};

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Ali-Emam-Rabbi",
    icon: "fa-brands fa-github",
    handle: "Ali-Emam-Rabbi",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aliemamrabbi",
    icon: "fa-brands fa-linkedin-in",
    handle: "aliemamrabbi",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/aliemam.rabby",
    icon: "fa-brands fa-facebook-f",
    handle: "aliemam.rabby",
  },
];

export const featured = {
  title: "Latest Website Project",
  pill: "Featured",
  description:
    "Built a modern e-commerce platform featuring dynamic product filtering, cart functionality, and responsive UI design using HTML, CSS, JavaScript, React, Firebase Backend and AI-assisted development workflows.",
  codeHref: "https://github.com/Ali-Emam-Rabbi",
};

export const projects = [
  {
    name: "Ali Emam Store – E-Commerce",
    href: "https://aliemamstore.netlify.app/",
    tag: "Full Stack",
    stack: ["Frontend", "Firebase Backend", "Authentication"],
  },
  {
    name: "Personal Portfolio",
    href: "https://aliemamportfolio.netlify.app/",
    tag: "Portfolio",
    stack: ["React", "Vite", "CSS3", "Animations"],
    isPortfolio: true,
  },
  {
    name: "Ali Emam Store (WordPress)",
    href: "https://aliemamstore.infinityfree.me/",
    tag: "E-Commerce",
    stack: ["WordPress", "PHP"],
  },
  {
    name: "Sotez Pharmacy",
    href: "https://sotezpharmacy.netlify.app/",
    tag: "Healthcare",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "Meharab E-Commerce",
    href: "https://meharabhossen.netlify.app/",
    tag: "E-Commerce",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "BookHub",
    href: "https://shihabbookhub.netlify.app/",
    tag: "Library",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "ZR Pharmacy",
    href: "https://rahatzrpharmacy.netlify.app/",
    tag: "Healthcare",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "Meem Store",
    href: "https://meemstore.infinityfree.me/",
    tag: "E-Commerce",
    stack: ["WordPress", "PHP"],
  },
];

export const navLinks = [
  { label: "Home", href: "#top", id: "top" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Tools", href: "#tools", id: "tools" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const tools = [
  { name: "C", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Java", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML5", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },


];
