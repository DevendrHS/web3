import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())

      .then((data) => {

        setUsers(data);

        setLoading(false);

      });

  }, []);

  return (

    <div className="container">

      <h1>Simple API Fetch Example</h1>

      {

        loading ? (

          <p className="loading">
            Loading Data...
          </p>

        ) : (

          <div className="cardContainer">

            {

              users.map((user) => (

                <div className="card" key={user.id}>

                  <h2>{user.name}</h2>

                  <p>Email: {user.email}</p>

                  <p>Website: {user.website}</p>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );
}

export default App;