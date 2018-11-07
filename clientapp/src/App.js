import React, { Component } from "react";
import "./App.css";
import Hummingbird from "./Hummingbird";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hummingbird />
        {/* <header className="App-header">
          <h1>Trinidad and Tobago Hummingbird Classifier v0.01.2</h1>
          <p>
            {" "}
            This can distinguish among the following species
            <ul>
              <li>Ruby Topaz (Female)</li>
              <li>Ruby Topaz (Male)</li>
              <li>Black Throated Mango (Female)</li>
              <li>Black Throated Mango (Male)</li>
              <li>Blue Chinned Sapphire (Female)</li>
              <li>Blue Chinned Sapphire (Male)</li>
              <li>Blue Tailed Emerald (Female)</li>
              <li>Blue Tailed Emerald (Male)</li>
              <li>Brown Violetear</li>
              <li>Copper Rumped</li>
              <li>Green Throated Mango</li>
              <li>Long Billed Starthroat</li>
              <li>Tufted Coquette (Female)</li>
              <li>Tufted Coquette (Male)</li>
              <li>Green Hermit (Female)</li>
              <li>Green Hermit (Male)</li>
              <li>Little Hermit</li>
              <li>Rufous Breasted Hermit</li>
              <li>White Chested Emerald</li>
              <li>White Necked Jacobin (Female)</li>
              <li>White Necked Jacobin (Male) </li>
              <li>White Tailed Goldenthroat</li>
              <li>White Tailed Sabrewing</li>
            </ul>
          </p>
          <form action="/upload" method="post" enctype="multipart/form-data">
            Select image to upload:
            <input type="file" name="file" />
            <input type="submit" value="Upload Image" />
          </form>
          Or submit a URL:
          <form action="/classify-url" method="get">
            <input type="url" name="url" />
            <input type="submit" value="Fetch and analyze image" />
          </form>
        </header>*/}
      </div>
    );
  }
}

export default App;
