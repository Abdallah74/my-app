import { Fragment, useState } from "react";
import styles from "./Card.module.css";

const Card = ({ namesList }) => {
  const cards = namesList.map(
    ({ firstName, lastName, age, address, phone, gender }, idx, array) => (
      <div className={styles.card} key={`person${idx}`}>
        <span className={styles.deleteBtn}>X</span>
        <div className={styles.headTxt}>
          <h2>
            {gender === "male" ? `${gender} ${++idx}` : `${gender} ${++idx}`}
          </h2>
        </div>
        <div className={styles.data}>
          <p>First Name: {firstName} </p>
          <p>Last Name: {lastName} </p>
          <p>Age: {age} </p>
          <p>Address: {address} </p>
          <p>Phone Number: {phone} </p>
        </div>
      </div>
    )
  );

  return <Fragment>{cards}</Fragment>;
};

export default Card;
