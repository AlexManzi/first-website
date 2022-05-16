import React from "react";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectList from "./pages/ProjectList";

function App() {

  const alex = {
    name: "Alex",
    city: "New York",
    bio: "",
    color: "firebrick",
    links: {
      github: "https://github.com/AlexManzi",
      linkedin: "https://www.linkedin.com/in/alex-manzi-51804023b/",
    },
    projects: [
      {
        id: 1,
        name: "ad:Aquila",
        about: "An advertisement campaign management platform that allows companies to view, create, and update ad campaigns across radio, TV, and the Internet.",
        technologies: ["React", "Ruby on Rails", "JavaScript", "CSS"],
      },
      {
        id: 2,
        name: "Blockaline",
        about: "A job board for positions within the cryptocurrency and blockchain space. Users can signup and login to the website to create job postings, save job postings to a favorites folder",
        technologies: ["React", "Ruby on Rails", "JavaScript", "CSS"],
      },
      {
        id: 3,
        name: "Shopify 2.0",
        about: "An ecommerce web application where users can purchase various items. Users can sign up for the service and aftering logging in save items to their cart, purchase items with a credit card, and leave reviews for items.",
        technologies: ["React", "Ruby", "JavaScript", "CSS"],
      },
      {
        id: 4,
        name: "Sus Row Records",
        about: "Sus Row is an up and coming record label based in New York, this website allows users to find out more about the brand, listen to music, watch music videos, and purchase beats & merch.",
        technologies: ["React", "Ruby on Rails", "JavaScript", "CSS"],
      },
      {
        id: 5,
        name: "Cryptonaire",
        about: "A cryptocurrency organization and financial planning platform. This application allows users to input data on current cryptocurrency asset holdings, save those inputs in a virtual “crypto-wallet”, and perform trade calculations using realtime values of various cryptocurrencies pulled from an API.",
        technologies: ["React", "JavaScript", "CSS"],
      }
    ],
  };
  return (
    <div>
      <NavBar />
      <Home alex={alex} />
      <About alex={alex} />
      <ProjectList alex={alex} />
    </div>
  );
}

export default App;
