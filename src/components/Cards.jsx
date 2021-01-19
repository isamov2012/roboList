import React from "react";

function Cards({ robots }) {
  return robots.map((robot) => {
    return (
      <div
        key={robot.id}
        className="tc bg-green grow dib br3 ba ma2 pa3 shadow-5 mw6"
      >
        <h3>{robot.name}</h3>
        <img src={`https://robohash.org/${robot.id}`} alt="Robo pic" />
        <h3> {robot.username}</h3>
        <h4>{robot.email}</h4>
      </div>
    );
  });
}

export default Cards;
