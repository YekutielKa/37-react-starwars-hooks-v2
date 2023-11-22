import React, { Component, useContext, useEffect } from "react";
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import { useNavigate, useParams } from "react-router-dom";
import {
  characters,
  defaultHero,
  navNames,
  StarWarsContext,
} from "../utils/constants";

const Home = () => {
  const { hero: heroId } = useParams();
  const { changeHero } = useContext(StarWarsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!characters[heroId]) {
      navigate(`/${navNames[0].route}/${defaultHero}`);
      return;
    }
    changeHero(heroId);
  }, [heroId]);
  return (
    <main className="clearfix">
      <Hero />
      <DreamTeam />
      <FarGalaxy />
    </main>
  );
};

export default Home;
