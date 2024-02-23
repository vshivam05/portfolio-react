import C from "../Assets/C.png";
import bootstrap from "../Assets/bootstrap.png";
import css from "../Assets/css.png";
import express from "../Assets/express.png";
import github from "../Assets/github.png";
import html from "../Assets/html.png";
import js from "../Assets/js.png";
import mongodb from "../Assets/mongodb.png";
import node from "../Assets/node.png";
import react from "../Assets/react.png";
import web from "../Assets/web.png";
import weather from "../Assets/weather.png";
import amazon from "../Assets/amazon.png";
import imdb from "../Assets/imdb.png";

const services = [
  {
    title: "web developer",
    icon: web,
  },
  {
    title: "react developer",
    icon: react,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node Js",
    icon: node,
  },
  {
    name: "React Js",
    icon: react,
  },
];

const projects = [
  {
    name: "Weather Application",
    description:
      "The ReactJS Weather Application delivers real-time weather updates, seamlessly integrating with APIs to present easily accessible and informative weather data for users. ",
    image: weather,
    source_code_link: `https://github.com/striver2001/weather-reactjs`,
    source_deploy_link: `https://reliable-lebkuchen-aee1d4.netlify.app/`,
  },

  {
    name: "Movie review App ",
    description: "The IMDb Clone built with ReactJS faithfully replicates the functionality and design of the original IMDb platform, offering users a seamless experience for browsing and discovering movies, TV shows, and more.",
    image: imdb,
    source_code_link: `https://github.com/striver2001/weather-reactjs`,
    source_deploy_link: `https://striver2001.github.io/`,
  },
  {
    name: "Amazon UI Clone ",
    description: "The Amazon UI clone created with HTML and CSS accurately mirrors the look and feel of the original Amazon website, offering a visually appealing and responsive user interface for browsing products and making purchases.",
    image: amazon,
    source_code_link: `https://github.com/striver2001/weather-reactjs`,
    source_deploy_link: `https://striver2001.github.io/AmazonClone/`,
  },
];

export { services, technologies, projects };
