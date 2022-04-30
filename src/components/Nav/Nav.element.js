import styled from "styled-components";

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
    background-image: url("./bookmark.png");
    list-style: none;
    text-transform: uppercase;
`
export const NewsCarousel = styled.div`
    flex-grow: 5;
    border: 1px yellow solid;
    height: 100%;
`