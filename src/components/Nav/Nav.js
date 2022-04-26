import React from "react";
import { Link } from "react-router-dom";
import { NavSection, NavItems, NavItem, NewsCarousel } from "./Nav.element";

function Nav() {
  return (
    <NavSection className="flex">
      <NavItems className="flex">
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/allNews">All News</Link>
        </NavItem>
      </NavItems>
      <NewsCarousel>
        <p>all my friends are dead, push me to the end</p>
      </NewsCarousel>
    </NavSection>
  );
}

export default Nav;
