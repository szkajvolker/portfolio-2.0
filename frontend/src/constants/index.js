import {
  discordBlack,
  html,
  css,
  expressDark,
  expressLight,
  git,
  gitHubDark,
  gitHubLight,
  js,
  mongodb,
  netlify,
  nodejs,
  postman,
  reactDark,
  reactLight,
  tw,
  ts,
} from "../assets";

export const navLists = [
  { id: "0", title: "Home", url: "#home" },
  { id: "1", title: "About", url: "#about" },
  { id: "2", title: "Skills", url: "#skills" },
  { id: "3", title: "Projects", url: "#projects" },
  { id: "4", title: "Contact", url: "#contact" },
];

export const aboutMe =
  "My name is Istvan Szabo I am a frontend developer. A bit about me: after highscool I explored different carrer paths in various jobs. In 2019, I moved to Northern Ireland to work. After spending several years in factories, I decided to pursue something I truly enjoy - frontend development. I enrolled in the Codecool bootcamp, where I gained a solid foundation in Javascript,CSS and HTML.I really enjoy programming and constantly challenging myself to grow. In my freetime I like playing videogames, watching TV series and as a hobby, I am also passionate about game development.I am currently following a course in Unreal Engine 5, hoping that one day I can create my own indie game (or at least build one for myself)";

export const icons = {
  html,
  css,
  js,
  tw,
  ts,
  reactLight,
  reactDark,
  expressLight,
  expressDark,
  nodejs,
  mongodb,
  git,
  gitHubLight,
  gitHubDark,
  netlify,
  postman,
  teamwork: "group",
  cleanCode: "auto_fix_high",
  problemSolving: "psychology",
  selfLearning: "school",
  responsive: "devices",
};

export const hardSkills = [
  { id: "js", name: "JavaScript", percentage: 90 },
  { id: "html", name: "HTML", percentage: 85 },
  { id: "css", name: "CSS", percentage: 75 },
  { id: "mongodb", name: "Mongodb", percentage: 35 },
  { id: "expressDark", name: "Express.js", percentage: 40 },
  { id: "reactDark", name: "React", percentage: 80 },
  { id: "nodejs", name: "Node.js", percentage: 85 },
  { id: "git", name: "Git", percentage: 75 },
  { id: "gitHubDark", name: "GitHub", percentage: 85 },
  { id: "postman", name: "Postman", percentage: 65 },
  { id: "tw", name: "Tailwind", percentage: 65 },
  { id: "ts", name: "Typescript", percentage: 20 },
  { id: "netlify", name: "Netlify", percentage: 35 },
];

export const softSkills = [
  { id: "teamwork", name: "Teamwork", percentage: 90 },
  { id: "cleanCode", name: "Clean Code", percentage: 87 },
  { id: "problemSolving", name: "Problem Solving", percentage: 85 },
  { id: "selfLearning", name: "Self-Learning", percentage: 95 },
  { id: "responsive", name: "Responsive Design", percentage: 88 },
];

export const projects = [
  {
    id: 1,
    title: "Brainwave",
    description: "React practicing,learning new skills,different solutions",
    repo: "https://szkajvolker.github.io/Brainwave/",
    status: true,
  },
  {
    id: 2,
    title: "Apple website",
    description: "Apple inspired webpage using react + gsap and three.js",
    repo: "https://demo-site-istvan-001.netlify.app/",
    status: true,
  },
  {
    id: 3,
    title: "UI halftime exam",
    description: "Basic Feedback Form, this was my half time exam UI task",
    repo: "https://szkajvolker.github.io/halftime-exam-uibuild/",
    status: true,
  },
  {
    id: 4,
    title: "Cocktail website",
    description: "A cocktail site using react as framework, practicing gsap",
    repo: "https://szkajvolker.github.io/gsap_cocktails/",
    status: true,
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "A Movie App using TMDB as background database, features:searchBar,modal,trending movies based on search,using Appwrite as database",
    repo: "https://moviesdatabase-app.netlify.app/",
    status: true,
  },
  {
    id: 6,
    title: "Games App",
    description:
      "A Games App using RAWG as background database, features:searchBar,modal,gamecards with their details",
    repo: "work in progress",
    status: false,
  },
];

export const navIcons = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
];

export const contactIcons = [
  {
    id: 1,
    title: "LinkedIn",
    url: "https://linkedin.com/in/istv%C3%A1n-szab%C3%B3-93985a374/",
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com/szkajvolker",
  },
  {
    id: 3,
    title: "Email",
    url: "mailto:ist9595@windowslive.com",
  },
];
