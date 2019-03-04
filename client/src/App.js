import React, { Component } from 'react';
import Nav from "./components/Nav/Nav";
import axios from "axios";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Button from "./components/Button/Button";
import { LegislatorsList, Legislator } from "./components/Legislators";
import './App.css';
// const axios = require("axios");

// function getLegislators() {
//   console.log("test");
//   axios.get("https://api.propublica.org/congress/v1/115/senate/members.json", {headers: {'X-API-KEY': 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi'}
//   })
//   .then(function({data: {results:members}}){
//       console.log(JSON.stringify(members));
//       return (JSON.stringify(members));
//     }).catch(function(error){
//       console.log(error);
//     })
// }

class App extends Component {
  state = {
    legislators: []
  };
    
  onclick = () => {
    return axios.get("https://api.propublica.org/congress/v1/115/senate/members.json", {headers: {'X-API-KEY': 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi'}
  })
  .then(response => {
    console.log( response.data.results[0].members);
    this.setState({
      legislators: response.data.results[0].members
    });
    console.log(this.state.legislators);
  })
 .catch(error=>{
    console.log(error);
 });
}

  render() {
    return (
      <div>
        <Nav/>
        <Jumbotron/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Button
               onClick={this.onclick}
               type="primary"
               className="searchAll">Search</Button>
            </div>
          </div>
        </div>
        <div className="row" id="legislatorsContainer">
          <div className="col-sm-12">
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
                    url={legislator.url}
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

// function getLegislators() {
//   console.log("test");
//   return axios.get("https://api.propublica.org/congress/v1/115/senate/members.json", {headers: {'X-API-KEY': 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi'}
//   })
//   .then(function({data: {results:members}}){
//       console.log(JSON.stringify(members));
//       return (JSON.stringify(members));
//     }).catch(function(error){
//       console.log(error);
//     })
// }

// class App extends Component {

 

//   handleFormSubmit = event => {
//     event.preventDefault();
//     getLegislators()
//     .then(members => (legislators.push({results:members})))
//   };

//   render() {
//     return (
//       <div>
//         <Nav/>
//         <Jumbotron/>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//                     <Button
//                       onClick={this.handleFormSubmit}
//                       type="primary"
//                       className="searchAll"
//                     >
//                       Search
//                       </Button>
//             </div>
//           </div>
//         </div>
//         <div className="row" id="legislatorsContainer">
//           <div className="col-sm-12">
//             <LegislatorsList>
//                {legislators.map(legislator => { 
//                  return ( 
//                   <Legislator
//                     key={legislator.phone}
//                     title={legislator.title}
//                     first_name={legislator.first_name}
//                     last_name={legislator.last_name}
//                     date_of_birth={legislator.date_of_birth}
//                     party={legislator.party}
//                     state={legislator.state}
//                     phone={legislator.phone}
//                     url={legislator.url}
//                   />
//                  );
//               })} 
//             </LegislatorsList>
//           </div>
//         </div>

//       </div>
//     );
//   }
// }

export default App;
