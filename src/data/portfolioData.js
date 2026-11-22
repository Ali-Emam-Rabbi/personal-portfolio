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
  title: "OurDrop – PC to Phone File Transfer",
  pill: "Featured",
  description:
    "Built OurDrop, a free and open-source app that moves files of any type and size between a Windows PC and an Android phone over Wi-Fi or a phone hotspot, with no internet, no login, no cables and no cloud. It offers QR-code connect, chunked transfers with pause and resume verified by SHA-256, background receiving on the phone, sharing from any app, and updates from inside the app. Built with React, TypeScript, a Node.js server, Electron and native Android (Java), together with Sadhin Khan.",
  codeHref: "https://github.com/Ali-Emam-Rabbi/OurDrop-Software-Project",
};

export const projects = [
  {
    name: "OurDrop – PC to Phone File Transfer",
    href: "https://github.com/Ali-Emam-Rabbi/OurDrop-Software-Project",
    tag: "Open Source",
    stack: ["React", "TypeScript", "Node.js", "Electron", "Android"],
  },
  {
    name: "Zynox Download Manager",
    href: "https://github.com/Sadhin404/Projects/tree/main/Zynox%20Download%20Manager",
    tag: "Downloader",
    stack: ["yt-dlp", "Android", "Windows", "8K + MP3"],
  },
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
  { name: "TypeScript", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Electron", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" },


];
