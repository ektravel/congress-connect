import React, { Component } from 'react';
import Nav from "./components/Nav/Nav";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { LegislatorsList, Legislator } from "./components/Legislators";
import './App.css';
const axios = require("axios");

function getLegislators() {
  console.log("test");
    axios.get("https://api.propublica.org/congress/v1/115/senate/members.json", {headers: {'X-API-KEY': 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi'}
    }).then(function({data: {results}}){
      console.log(JSON.stringify(results));
    }).catch(function(error){
      console.log(error);
    })
}

class App extends Component {
  state = {
    legislators: [],
    legislatorSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    getLegislators();
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="row">
                  <div className="col-sm-10">
                    <Input
                      name="legislatorSearch"
                      value={this.state.legislatorSearch}
                      onChange={this.handleInputChange}
                      placeholder="Search For a Legislator"
                    />
                  </div>
                  <div className="col-sm-10">
                    <Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                      Search
                      </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <LegislatorsList>
              {this.state.legislators.map(legislator => {
                return (
                  <Legislator
                    // key={recipe.title}
                    // title={recipe.title}
                    // href={recipe.href}
                    // ingredients={recipe.ingredients}
                    // thumbnail={recipe.thumbnail}
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
