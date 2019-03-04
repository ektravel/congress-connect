import React, { Component } from 'react';
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Button from "./components/Button/Button";
import { LegislatorsList, Legislator } from "./components/Legislators";
import './App.css';

class App extends Component {
  state = {
    legislators: []
  };

  showAll = () => {
    return axios.get("https://api.propublica.org/congress/v1/115/senate/members.json", {
      headers: { 'X-API-KEY': 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi' }
    })
      .then(response => {
        this.setState({
          legislators: response.data.results[0].members
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  showNew = () => {
    return axios.get("https://api.propublica.org/congress/v1/members/new.json", {
      headers: { 'X-API-KEY': 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi' }
    })
      .then(response => {
        this.setState({
          legislators: response.data.results[0].members
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  showLeaving = () => {
    return axios.get("https://api.propublica.org/congress/v1/115/senate/members/leaving.json", {
      headers: { 'X-API-KEY': 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi' }
    })
      .then(response => {
        this.setState({
          legislators: response.data.results[0].members
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
            <h3 id="welcomeText">Welcome to Congress Connect. Please choose one of the options below.</h3>
              <Button
                onClick={this.showAll}
                type="primary"
                className="customBtn">All Senators</Button>
                <Button
                onClick={this.showNew}
                type="primary"
                className="customBtn">New Senators</Button>
                <Button
                onClick={this.showLeaving}
                type="primary"
                className="customBtn">Leaving Office</Button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" id="legislatorsContainer">
          <div className="col-sm-5">
            <LegislatorsList>
              {this.state.legislators.map(legislator => {
                return (
                  <Legislator
                    key={legislator.id}
                    title={legislator.title}
                    first_name={legislator.first_name}
                    last_name={legislator.last_name}
                    date_of_birth={legislator.date_of_birth}
                    party={legislator.party}
                    state={legislator.state}
                    phone={legislator.phone}
                    end_date={legislator.end_date}
                    status={legislator.status}
                  />
                );
              })}
            </LegislatorsList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
