import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { characters, navNames, StarWarsContext } from "../utils/constants";

const Friend = ({ friend, number }) => {
  const { changeHero } = useContext(StarWarsContext);
  const navigate = useNavigate();
  let friendStyle = "col-4 p-1";

  if (number === 7) {
    friendStyle = "bottom-left col-4 p-1";
  }
  if (number === 9) {
    friendStyle = "bottom-right col-4 p-1";
  }
  return (
    <img
      onClick={() => {
        navigate(`/${navNames[0].route}/${friend}`);
      }}
      className={friendStyle}
      src={characters[friend].img}
      alt="friend"
    />
  );
};

export default Friend;
