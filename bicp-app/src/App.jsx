import React from "react";
import icon1 from "../src/images/icon1.png";
import icon2 from "../src/images/icon2.png";
import icon3 from "../src/images/icon3.png";
import icon4 from "../src/images/icon4.png";
import ironlogo from "../src/images/ironhack-logo-xs.png";
import ironmenu from "../src/images/menu-top-xs.png";
import "./App.css";
import { FooterItem } from "./FooterItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <img className="iron" src={ironlogo}/>
          <img className="ironmenu" src={ironmenu}/>
        </div>

        <h1>Say hello to React JS</h1>
        <h5>
          You will learn how to use the most popular libary, and become a super
          Ninja developer.
        </h5>
        <button>Awesome!</button>
      </header>

      <footer className="footer">
        <FooterItem title={"Declarative"} subtitle={"React makes it painless to create interactive UI's."} icon={icon1}/>
        <FooterItem title={"Components"} subtitle={"Build encapsulated components that manage their state.."} icon={icon2}/>
        <FooterItem title={"Single-Way"} subtitle={"A set of immutable values are passed to the component's."} icon={icon3}/>
        <FooterItem title={"JSX"} subtitle={"Statically-typed, designed to run on modern browsers."} icon={icon4}/>
        
      </footer>
    </div>
  );
}

export default App;
