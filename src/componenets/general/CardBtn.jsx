import React from "react";
import "../../styles/card_btn.css";
const CardBtn = ({ link }) => {
  return (
    <a className="card_btn" href={link}>
      More Information!
    </a>
  );
};

export default CardBtn;
