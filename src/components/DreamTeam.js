import React, { Component, useContext } from "react";
import { characters, friends, StarWarsContext } from "../utils/constants";
import Friend from "./Friend";
import friend from "./Friend";

const DreamTeam = () => {
  const { hero } = useContext(StarWarsContext);
  return (
    <section className="float-end w-50 row border mx-1 mt-1">
      <h2 className="col-12 text-center">Dream Team</h2>
      {friends
        .filter((friend) => friend !== hero)
        .map((friend, index) => (
          <Friend
            key={index}
            friend={friend}
            number={index + 1}
          />
        ))}
    </section>
  );
};

export default DreamTeam;
