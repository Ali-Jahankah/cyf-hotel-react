import React from "react";
import SearchBtn from "./SearchBtn";
import "../../styles/search.css";
const Search = ({ search, searchInput, setSearchInput }) => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={e => {
              e.preventDefault();
              search(searchInput);
            }}
          >
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />

              <SearchBtn />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
