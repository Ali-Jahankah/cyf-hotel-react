import React from "react";
import "../../styles/footer.css";
const Footer = () => {
  const arr = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer className="footer">
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h6>Made by Ali Jahankah</h6>
    </footer>
  );
};

export default Footer;
