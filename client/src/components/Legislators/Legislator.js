import React from "react";
import "./Legislator.css";

export const Legislator = props => (
  <li className="list-group-item list-group-item-action">
      <h4>{props.title}</h4>
      <p><b>First Name: </b>{props.first_name}</p>
      <p><b>Last Name: </b>{props.last_name}</p>
      <p className={props.date_of_birth ? "ShowInfoYes" : "showInfoNo"}><b>Date of Birth: </b>{props.date_of_birth}</p>
      <p><b>Political Party: </b>{props.party}</p>
      <p><b>State: </b>{props.state}</p>
      <p className={props.phone ? "ShowInfoYes" : "showInfoNo"}><b>Phone Number: </b>{props.phone}</p>
      <p className={props.end_date ? "ShowInfoYes" : "showInfoNo"}><b>End of Term: </b>{props.end_date}</p>
      <p className={props.status ? "ShowInfoYes" : "showInfoNo"}><b>Status: </b>{props.status}</p>
  </li>
);
