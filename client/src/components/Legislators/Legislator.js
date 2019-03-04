import React from "react";

export const Legislator = props => (
  <li className="list-group-item">
      <h3>{props.title}</h3>
      <p>{props.first_name}</p>
      <p>{props.last_name}</p>
      <p>{props.date_of_birth}</p>
      <p>{props.party}</p>
      <p>{props.state}</p>
      <p>{props.phone}</p>
      <a rel="noreferrer noopener" target="_blank" href={props.url}>Website
      </a>
  </li>
);
