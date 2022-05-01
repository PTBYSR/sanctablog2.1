import styled from "styled-components";
import Bookmark from './bookmark.png'

export const NavSection = styled.nav`
    border: 1px pink solid;
    gap: 0rem;
`
export const NavItems = styled.ul`
    border: 1px green solid;
    width: 300px;
    flex-grow: 1;
    flex-direction: column;

`
export const NavItem = styled.li`
    background-image: url(${Bookmark});
    background-repeat: no-repeat;
    list-style: none;
    text-transform: uppercase;
`
