import React from "react";
import Bookings from "../general/Bookings";
import Restaurant from "../general/Restaurant";
import Heading from "../general/Heading";
import TouristInfoCards from "../general/TouristInfoCards";

const Homepage = () => {
  return (
    <>
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
    </>
  );
};

export default Homepage;
