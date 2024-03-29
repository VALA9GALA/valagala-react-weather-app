import React from "react";

export default function FomattedDate(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {((hours + 11) % 12) + 1}:{minutes}
      {hours >= 12 ? "PM" : "AM"}
    </div>
  );
}
