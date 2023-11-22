import React, { Component, useContext, useEffect } from "react";
import {
  characters,
  defaultHero,
  navNames,
  StarWarsContext,
  starWarsInfo,
} from "../utils/constants";
import style from "../css/farGalaxy.module.css";
import { useNavigate, useParams } from "react-router-dom";

const StarWars = () => {
  const { hero: heroId } = useParams();
  const { changeHero } = useContext(StarWarsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!characters[heroId]) {
      navigate(`/${navNames[2].route}/${defaultHero}`);
      return;
    }
    changeHero(heroId);
  }, [heroId]);

  return (
    <div className={style.farGalaxy}>
      <p>{starWarsInfo}</p>
    </div>
  );
};

export default StarWars;
