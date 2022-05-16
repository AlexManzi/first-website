import React from "react";

function Home({alex}) {

  let alexName = (alex ? alex.name : "")
  let alexCity = (alex ? alex.city : "")
  return (
    <div id="home">
      <h1 >
        {alexName} is a Web Developer from {alexCity}
      </h1>
    </div>
  );
}

export default Home;
