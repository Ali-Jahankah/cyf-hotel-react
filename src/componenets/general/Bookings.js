import React, { useState } from "react";
import Search from "./Search.js";
import "../../styles/booking.css";
import SearchResults from "./SearchResults";
import fakeBookings from "../../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <>
      <div className="App-content">
        <div className="container">
          <Search search={search} />
        </div>
      </div>
      <SearchResults result={bookings} />
    </>
  );
};

export default Bookings;
