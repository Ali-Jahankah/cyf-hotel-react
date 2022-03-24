import React from "react";
import moment from "moment";
import "../../styles/searchResults.css";
const SearchResults = ({ result }) => {
  return (
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
          </tr>
        </thead>
        <tbody>
          {result.map((obj, index) => {
            let staying = moment(obj.checkOutDate).diff(
              moment(obj.checkInDate),
              "days"
            );
            return (
              <tr key={index}>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.firstName}</td>
                <td>{obj.surname}</td>
                <td>{obj.email}</td>
                <td>{obj.roomId}</td>
                <td>{obj.checkInDate}</td>
                <td>{obj.checkOutDate}</td>
                <td>{staying}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

export default SearchResults;
