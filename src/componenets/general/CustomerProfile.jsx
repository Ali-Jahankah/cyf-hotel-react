import React, { useState, useEffect } from "react";
import "../../styles/customerProfile.css";

const CustomerProfile = ({ id, setUserId }) => {
  const [profile, setProfile] = useState("");
  useEffect(() => {
    id &&
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json())
        .then(data => setProfile(data));
  }, [id]);
  return (
    id && (
      <article className="user_profile_article">
        {profile !== "" ? (
          <div className="user_profile_section">
            <h1>Customer Information:</h1>
            <div>
              <button
                className="exit_profile"
                onClick={() => {
                  setProfile("");
                  setUserId("");
                }}
              >
                X
              </button>
              <table>
                <tbody>
                  <tr>
                    <td>Customer ID</td>
                    <td>{profile.id}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{profile.email}</td>
                  </tr>
                  <tr>
                    <td>User type</td>
                    <td>{profile.vip ? "VIP" : "Not VIP"}</td>
                  </tr>
                  <tr>
                    <td>Phone number</td>
                    <td>{profile.phoneNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1>Loading... :)</h1>
        )}
      </article>
    )
  );
};

export default CustomerProfile;
