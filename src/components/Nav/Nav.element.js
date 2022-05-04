import styled from "styled-components";
import Bookmark from "./bookmark.png";

export const NavSection = styled.nav`
  border: 1px pink solid;
  gap: 0rem;
  position: absolute;
  right: 0;
  transform: rotate(-70deg);
`;
export const NavItems = styled.ul`
  border: 1px green solid;
  width: 300px;
  flex-grow: 1;
  flex-direction: column;
`;
export const NavItem = styled.li`
  /* background-image: url(${Bookmark}); */
  background-repeat: no-repeat;
  list-style: none;
  border: 1px dashed black;
  position: relative;
`;

export const NavHome = styled.p`
  text-transform: uppercase;
  position: absolute;
  top: 13px;
  left: 25px;
  font-family: var(--ff-cabazon);
  color: var(--fc-nav);
  letter-spacing: 0.2rem;
`;
