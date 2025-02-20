import React, { useState } from "react";
import moment from "moment";
import "../../styles/searchResults.css";
import CustomerProfile from "./CustomerProfile";
const SearchResults = ({ filteredBookings }) => {
  const [chosen, setChosen] = useState({});
  const [userId, setUserId] = useState("");

  const handleClickTr = id => {
    if (chosen[id]) {
      setChosen(prev => ({ ...prev, [id]: false }));
    } else {
      setChosen(prev => ({ ...prev, [id]: true }));
    }
  };

  return filteredBookings.length > 0 ? (
    <article className="result_article">
      <table className="search_table">
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>first name</td>
            <td>surname</td>
            <td>email</td>
            <td>room id</td>
            <td>check in date</td>
            <td>check out date</td>
            <td>Nights</td>
            <td>Profile</td>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((obj, index) => {
            let staying = moment(obj.checkOutDate).diff(
              moment(obj.checkInDate),
              "days"
            );

            return (
              <tr
                key={index}
                onClick={() => handleClickTr(obj.id)}
                className={chosen[obj.id] ? "highlighted" : ""}
              >
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.firstName}</td>
                <td>{obj.surname}</td>
                <td>{obj.email}</td>
                <td>{obj.roomId}</td>
                <td>{obj.checkInDate}</td>
                <td>{obj.checkOutDate}</td>
                <td>{staying}</td>
                <td>
                  <button
                    className="profile_btn"
                    onClick={() => setUserId(obj.id)}
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={userId} setUserId={setUserId} />
    </article>
  ) : (
    <h1 className="noresult">Nothing Found :(</h1>
  );
};

export default SearchResults;
