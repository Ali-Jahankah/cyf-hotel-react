import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import "../../styles/booking.css";
import SearchResults from "./SearchResults";
// import fakeBookings from "../../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const search = searchVal => {
    if (searchVal && searchVal.length > 0) {
      const arr = bookings.filter(
        item =>
          item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredBookings(arr);
    }
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setFilteredBookings(data);
      });
  }, []);

  return (
    <>
      <div className="App-content">
        <div className="container">
          <Search
            search={search}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
      </div>
      <SearchResults result={filteredBookings} />
    </>
  );
};

export default Bookings;
