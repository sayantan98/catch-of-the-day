import React from "react";

// Components are of two types :-
// 1. Functional Components :-
// Functional Component is written in arrow function and props are passed as arguments
const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span> {/* This is the callback of props */}
    </h3>
  </header>
);

// 2. Class Components :-

/* class Header extends React.Component {
  render() {
    return (
      <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
    )
  }
} */

export default Header;
