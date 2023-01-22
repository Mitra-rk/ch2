import "./App.css";
import React, { useState } from "react";
import Current from "./Current";

export default function App() {
  let [city, setCity] = useState("");
  
  
  function findCity(event) {
    event.preventDefault();
   
     setCity(event.target.id);
   
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
    
  }
  
  return (
    <div className="App">
      <div class="wrapper">
        <div class="container1">
          <div class="links">
            <a href="#" id="paris" onClick={findCity}>
              Paris
            </a>
            <a href="#" id="Lisbon" onClick={findCity}>
              Lisbon
            </a>
            <a href="#" id="Sydney" onClick={findCity}>
              Sydney
            </a>
            <a href="#" id="San Fransico" onClick={findCity}>
              San Fransico
            </a>
          </div>

          <div class="searchEngin">
            <form onSubmit={handleSubmit} type="submit">
              <div class="row">
                <div class="col-6">
                  <input
                    id="citySearch"
                    type="text"
                    class="form-control"
                    placeholder="Type a city..."
                    onChange={updateCity}
                  />
                </div>
                <div class="col-3">
                  <button id="search" class="btn btn-primary w-100">
                    Search
                  </button>
                </div>
                <div class="col-3">
                  <button id="search" class="btn btn-primary w-100">
                    Current
                  </button>
                </div>
              </div>
            </form>
          </div>
          <Current city1={city} />
        </div>
      </div>
    </div>
  );
}
