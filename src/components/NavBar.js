import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="font-mont text-black text-right justify-end bg-yellow p-2 font-bold">
            <NavLink className="m-2" to="/">Home</NavLink>
            <NavLink className="m-2" to="/about">About Me</NavLink>
            <NavLink className="m-2" to="/portfolio">Portfolio</NavLink>
            <NavLink className="m-1 p-1 text-cobalt" to="/contact">Contact</NavLink>
        </div>
    )
}
export default NavBar