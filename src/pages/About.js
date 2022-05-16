import React from "react";

function About({ alex }) {

  let alexGit = (alex ? alex.links.github : "")
  let alexIn = (alex ? alex.links.linkedin : "")
  

  return (
    <div id="about">
      <h2>About Me</h2>
      <div id="bio">
        <p>Hi! I’m Alex Manzi, a problem solver and software engineer interested in using the latest technologies to create innovative solutions. As a lifelong problem solver I’m able to look at development from multiple perspectives to create clean and scalable code.</p>
        <p>For the time being I’m mainly versed in JavaScript, React, Ruby, Rails, CSS, and HTML – but as a person who is committed to improvement I’m open and excited to add more languages to my toolbox.</p>
        <p>Take a look at some of my projects below and feel free to reach out to me if you’re interested in connecting.</p>
      </div>
        <h3 id="heretoo">I'm Here Too!</h3>
      <div id="aboutClicks">
        <a className="aboutLinks" href={alexGit}>Github</a>
        <a className="aboutLinks" href={alexIn}>LinkedIn</a>
      </div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
