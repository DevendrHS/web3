import React from "react";
import "./App.css";

import UserCard from "./components/UserCard";

function App() {

  return (

    <div className="container">

      <h1>Component Reuse Example</h1>

      <div className="cardContainer">

        <UserCard
          name="Devendra"
          role="Blockchain Developer"
          experience="1 Year"
        />

        <UserCard
          name="Rahul"
          role="Frontend Developer"
          experience="2 Years"
        />

        <UserCard
          name="Ankit"
          role="React Developer"
          experience="Fresher"
        />

      </div>

    </div>

  );
}

export default App;