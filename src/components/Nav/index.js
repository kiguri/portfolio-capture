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
            <NavH1><NavLink to='/'>Capture</NavLink></NavH1>
            <NavUl>
                <NavLi>
                    <NavLink to='/'>1. About Us</NavLink>
                </NavLi>

                <NavLi>
                    <NavLink to='/work'>2. Our work</NavLink>
                </NavLi>

                <NavLi>
                    <NavLink to='/contact'>3. Contact Us</NavLink>
                </NavLi>
            </NavUl>
        </Navbar>
     );
}
 
export default Nav;