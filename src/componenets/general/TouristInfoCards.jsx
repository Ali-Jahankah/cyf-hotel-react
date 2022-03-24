import React from "react";
import TouristCard from "./TouristCard";
import "../../styles/touristInfoCards.css";
const TouristInfoCards = () => {
  const cities = [
    {
      city: "Persepolis",
      src:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ca/57/2a/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
      text:
        "As here was a holy site and on the caravan road, the Great Cyrus chose this place for establishing Takht-e Jamshid. When the fame of the grand palaces reached Greece, they called the new city Persepolis which means the city of Parse.",
      link: "https://peoplemakeglasgow.com"
    },
    {
      city: "London",
      src:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",
      text:
        "Visit London, enjoy the city’s fantastic sights and events, and make the most of the fabulous host of things to do in London. Whether you are a first-time visitor to the capital or a Londoner born and bred, you’ll discover plenty of things to see in London, from iconic London tourist attractions to unusual ideas for your days out in London.",
      link: "https://visitmanchester.com"
    },
    {
      city: "Bangkok",
      src:
        "https://cdn.getyourguide.com/img/location/5ad4fc7b6e848.jpeg/88.jpg",
      text:
        "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple.",
      link: "https://visitlondon.com"
    }
  ];
  return (
    <>
      <h1 className="tourist_title">Cities to visit</h1>
      <article className="tourist_cards">
        {cities.map((item, index) => {
          return (
            <TouristCard
              key={index}
              city={item.city}
              text={item.text}
              image={item.src}
              link={item.link}
            />
          );
        })}
      </article>
    </>
  );
};

export default TouristInfoCards;
