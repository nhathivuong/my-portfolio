import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="font-mont m-2 sm:text-white sm:drop-shadow-[1px_1px_1px_black] text-right justify-end p-2 font-bold">
            <NavLink className="p-2 rounded-sm hover:bg-cobalt" to="/">Home</NavLink>
            <NavLink className="p-2 rounded-sm hover:bg-cobalt" to="/about">About Me</NavLink>
            <NavLink className="p-2 rounded-sm hover:bg-cobalt" to="/portfolio">Portfolio</NavLink>
        </div>
    )
}
export default NavBar