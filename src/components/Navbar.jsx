
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <NavLink to="/"> 
            <img src="/src/assets/home-icon.png" alt="" className="navbar"/>
            </NavLink>
        </nav>
    )
}

export default Navbar;
