import React from "react";
import { Link } from "react-router-dom";
import { NavSection, NavItems, NavItem, NavHome } from "./Nav.element";
import image from './bookmark.png'
import { ReactComponent as BookMark } from './bookmark1.svg'

function Nav() {
  return (
    <NavSection className="flex">
      <NavItems className="flex">
        <Link to="/">
          <NavItem>
            <BookMark  />
            {/* <img src={image} alt="bookmark" /> */}
            <NavHome>Home</NavHome>  
          </NavItem>
        </Link>
        <Link to="/about">
          <NavItem>
            <BookMark  />
            {/* <img src={image} alt="bookmark" /> */}
            <NavHome>About</NavHome>  
          </NavItem>
        </Link>
        <Link to="/allnews">
          <NavItem>
            <BookMark  />
            {/* <img src={image} alt="bookmark" /> */}
            <NavHome>All News</NavHome>  
          </NavItem>
        </Link>
      </NavItems>
      
    </NavSection>
  );
}

export default Nav;
