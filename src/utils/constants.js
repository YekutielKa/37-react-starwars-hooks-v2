import friend1 from "../images/friend1.jpg";
import friend2 from "../images/friend2.jpg";
import friend3 from "../images/friend3.jpg";
import friend4 from "../images/friend4.jpg";
import friend5 from "../images/friend5.jpg";
import friend6 from "../images/friend6.jpg";
import friend7 from "../images/friend7.jpg";
import friend8 from "../images/friend8.jpg";
import friend9 from "../images/friend9.jpg";
import friend0 from "../images/main.jpg";

export const base_url = "https://sw-info-api.herokuapp.com";

export const period_month = 1000 * 60 * 60 * 24 * 30;

export const friends = [
    friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9
];

export const version = '/v1'
export const characters = {
    luke: {
        name: "Luke Skywalker",
        img: friend0,
        url: `${base_url + version}/peoples/1`
    },
    c3po: {
        name: "C-3PO",
        img: friend2,
        url: `${base_url + version}/peoples/2`
    },
    r2d2: {
        name: "R2-D2",
        img: friend1,
        url: `${base_url + version}/peoples/3`
    },
    leia: {
        name: "Leia Organa",
        img: friend6,
        url: `${base_url + version}/peoples/5`
    },
    obi_wan: {
        name: "Obi-Wan Kenobi",
        img: friend8,
        url: `${base_url + version}/peoples/10`
    },
    chewbacca: {
        name: "Chewbacca",
        img: friend4,
        url: `${base_url + version}/peoples/13`
    },
    han_solo: {
        name: "Han Solo",
        img: friend5,
        url: `${base_url + version}/peoples/14`
    },
    yoda: {
        name: "Yoda",
        img: friend9,
        url: `${base_url + version}/peoples/0`
    },
    ewok: {
        name: "Wicket Systri Warrick",
        img: friend3,
        url: `${base_url + version}/peoples/30`
    },
    falcon: {
        name: "Millennium Falcon",
        img: friend7,
        url: `${base_url + version}/transports/10`
    }
};
export const navNames = [
    {title: 'Home', route: 'home'},
    {title: 'About Me', route: 'about_me'},
    {title: 'Star Wars', route: 'star_wars'},
    {title: 'Contact', route: 'contact'}];

export const starWarsFarGalaxyInfo = `It is a period of civil war.
            Rebel spaceships, striking
            from a hidden base, have won
            their first victory against
            the evil Galactic Empire.

            During the battle, Rebel
            spies managed to steal secret
            plans to the Empire's
            ultimate weapon, the DEATH
            STAR, an armored space
            station with enough power
            to destroy an entire planet.

            Pursued by the Empire's
            sinister agents, Princess
            Leia races home aboard her
            starship, custodian of the
            stolen plans that can save her
            people and restore
            freedom to the galaxy....`
export const starWarsInfo = `Luke Skywalker has returned to
his home planet of Tatooine in
an attempt to rescue his
friend Han Solo from the
clutches of the vile gangster
Jabba the Hutt.

Little does Luke know that the
GALACTIC EMPIRE has secretly
begun construction on a new
armored space station even
more powerful than the first
dreaded Death Star.

When completed, this ultimate
weapon will spell certain doom
for the small band of rebels
struggling to restore freedom
to the galaxy...`;