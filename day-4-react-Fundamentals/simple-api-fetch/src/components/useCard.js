import React from "react";

function UserCard(props) {

  return (

    <div className="card">

      <h2>{props.name}</h2>

      <p>Role: {props.role}</p>

      <p>Experience: {props.experience}</p>

    </div>

  );
}

export default UserCard;