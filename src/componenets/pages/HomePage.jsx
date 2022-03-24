import React from "react";
import Bookings from "../general/Bookings";

import Heading from "../general/Heading";
import TouristInfoCards from "../general/TouristInfoCards";

const Homepage = () => {
  return (
    <>
      <Heading />
      <TouristInfoCards />
      <Bookings />
    </>
  );
};

export default Homepage;
