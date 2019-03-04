import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Congress Connect</h1>
            <p className="lead"> Powered by 
                <a target="_blank" rel="noopener noreferrer" href="https://projects.propublica.org/api-docs/congress-api/"> ProPublica API</a>
            </p>
        </div>
    </div>
);

export default Jumbotron;

