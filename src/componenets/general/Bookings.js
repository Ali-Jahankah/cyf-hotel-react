import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import "../../styles/booking.css";
import SearchResults from "./SearchResults";
// import fakeBookings from "../../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);
  const search = searchVal => {
    const arr = [...bookings];

    setFilteredBookings(
      arr.filter(
        item =>
          item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  useEffect(() => {
    bookings.length === 0 &&
      fetch("https://cyf-react.glitch.me")
        .then(res => res.json())
        .then(data => {
          setBookings(data);
          setFilteredBookings(data);
        });
  }, [bookings]);

  return (
    <>
      <div className="App-content">
        <div className="container">
          <Search
            searchInput={searchInput}
            bookings={bookings}
            setSearchInput={setSearchInput}
            search={search}
          />
        </div>
      </div>

      <SearchResults filteredBookings={filteredBookings} />
    </>
  );
};

export default Bookings;
