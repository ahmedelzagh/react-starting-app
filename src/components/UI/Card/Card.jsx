import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.variant ? classes[props.variant] : ""}`} {...props}>
      {props.children}
    </div>
  );
};

export default Card;
