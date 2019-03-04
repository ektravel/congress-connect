import React from "react";

export const Legislator = props => (
  <li className="list-group-item list-group-item-action">
      <h4>{props.title}</h4>
      <p><b>First Name: </b>{props.first_name}</p>
      <p><b>Last Name: </b>{props.last_name}</p>
      <p>Date of Birth: {props.date_of_birth}</p>
      <p><b>Political Party: </b>{props.party}</p>
      <p><b>State: </b>{props.state}</p>
      <p>Phone Number: {props.phone}</p>
      <p>{props.end_date}</p>
      <p>{props.status}</p>
  </li>
);
