import React from "react";
import Search from "./Search.js";
import "../../styles/booking.css";
import SearchResults from "./SearchResults";
import FakeBookings from "../../data/fakeBookings.json";

const Bookings = () => {
  const allData = FakeBookings;
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
      <SearchResults result={allData} />
    </>
  );
};

export default Bookings;
