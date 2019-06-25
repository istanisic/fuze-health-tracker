import React from "react";
import "./Record.css";
import 'font-awesome/css/font-awesome.min.css';

export function Record({ type, desc, date }) {

  const convertToDate = ms => {
    const date = new Date(ms);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('en-US');

    return `${month} ${day}, ${year} at ${time}`;
  }

  const convertToPounds = weight => {
    return ( weight * 2.20462 ).toFixed(2);
  }

  const meal = <li className='meal'><i className="fa fa-cutlery" aria-hidden="true"></i> {desc} on <strong>{convertToDate(date)}</strong></li>;

  const weight = <li className='weight'><i className="fa fa-balance-scale" aria-hidden="true"></i> {desc} kg / {convertToPounds(desc)} lb on <strong>{convertToDate(date)}</strong></li>;

  return (
          (type === 'meal') ? meal : weight
  );
}
