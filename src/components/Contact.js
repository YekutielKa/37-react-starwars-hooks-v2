import React, { useContext, useEffect, useState } from "react";
import "../css/contact.css";
import {
  base_url,
  characters,
  defaultHero,
  navNames,
  period_month,
  StarWarsContext,
} from "../utils/constants";
import { useNavigate, useParams } from "react-router-dom";

const Contact = () => {
  const [planets, setPlanets] = useState(["wait..."]);

  const { hero: heroId } = useParams();
  const { changeHero } = useContext(StarWarsContext);
  const navigate = useNavigate();

  const fillPlanets = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    const planets = json.map((item) => item.name);
    setPlanets(planets);
    const info = {
      payload: planets,
      time: Date.now(),
    };
    sessionStorage.setItem("planets", JSON.stringify(info));
  };

  useEffect(() => {
    const storedPlanets = JSON.parse(sessionStorage.getItem("planets"));
    if (!characters[heroId]) {
      navigate(`/${navNames[3].route}/${defaultHero}`);
      return;
    }
    if (storedPlanets && Date.now() - storedPlanets.time < period_month) {
      setPlanets(storedPlanets.payload);
    } else {
      fillPlanets(`${base_url}/v1/planets`);
    }
    // return () => {
    //   console.log("Contact unmounted");
    // };
    changeHero(heroId);
  }, [heroId]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          First Name
          <input type="text" name="firstname" placeholder="Your name.." />
        </label>
        <label>
          Planet
          <select name="planet">
            {planets.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Subject
          <textarea name="subject" placeholder="Write something.." />
        </label>
        <input type="submit" value={`Submit to ${characters[heroId].name}`} />
      </form>
    </div>
  );
};

export default Contact