import styled from 'styled-components'

export const Navbar = styled.nav`
    min-height: 10vh;
    background: #282828;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
`

export const NavH1 = styled.h1`
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
`

export const NavUl = styled.ul`
    display: flex;
    list-style: none;
`
export const NavLi = styled.li`
    padding-left:  10rem;
    position: relative;
`

export const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
`