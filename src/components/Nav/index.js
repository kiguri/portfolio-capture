import {
    Navbar,
    NavH1,
    NavUl,
    NavLi,
    NavLink
} from './nav.styles'
const Nav = () => {
    return ( 
        <Navbar>
            <NavH1><NavLink id='logo' href='#'>Capture</NavLink></NavH1>
            <NavUl>
                <NavLi>
                    <NavLink href='#'>1. About Us</NavLink>
                </NavLi>

                <NavLi>
                    <NavLink href='#'>2. Our work</NavLink>
                </NavLi>

                <NavLi>
                    <NavLink href='#'>3. Contact Us</NavLink>
                </NavLi>
            </NavUl>
        </Navbar>
     );
}
 
export default Nav;