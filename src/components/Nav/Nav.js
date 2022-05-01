import React from "react";
import { Link } from "react-router-dom";
import { NavSection, NavItems, NavItem, } from "./Nav.element";
import image from './bookmark.png'

function Nav() {
  return (
    <NavSection className="flex">
      <NavItems className="flex">
        <NavItem>
          {/* <img src={image} alt="bookmark" /> */}
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/allnews/list">All News</Link>
        </NavItem>
      </NavItems>
      
    </NavSection>
  );
}

export default Nav;
