import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { CgDarkMode } from "react-icons/cg";
// import { FaUniversalAccess } from "react-icons/fa6";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)
    // const isMobileDisplay = window.innerWidth < 640
    const [hamburgerDisplay, setHamburgerDisplay] = useState(window.innerWidth < 640)

    useEffect(()=>{
        const checkDisplaySize = () => {
            setHamburgerDisplay(window.innerWidth < 640);
        }
        window.addEventListener("resize", checkDisplaySize);
        return () => window.removeEventListener("resize", checkDisplaySize);
    },[])
    
    const handleNav = () => {
        if (window.innerWidth > 640){
            return
        }
        setNavOpen(!navOpen)
    }
    return(
        <nav>
            <div className={`${hamburgerDisplay? "w-svw flex justify-end items-center" : "hidden"}`}>
                {/* <button className="text-cobalt text-2xl size-fit p-2 m-2 hover:text-white hover:bg-cobalt">
                    <FaUniversalAccess/>
                </button> */}
                <button className="text-cobalt text-3xl size-fit p-2 m-2 hover:text-white hover:bg-cobalt">
                    <CgDarkMode/>
                </button>
                <button onClick={handleNav} className="active:text-white active:bg-cobalt hover:text-white hover:bg-cobalt text-cobalt text-4xl p-2">
                    <RxHamburgerMenu/>
                </button>
            </div>
            <div className={`${navOpen? "text-white bg-cobalt flex flex-col relative gap-2 decoration-solid": "hidden sm:flex flex-row"}  font-mont sm:m-2 sm:text-black xl:text-white xl:drop-shadow-[1px_1px_1px_black] sm:text-right sm:justify-end p-2 font-bold`}>
                <NavLink className="p-2 sm:rounded-sm xl:hover:bg-cobalt" to="/" onClick={handleNav}>Home</NavLink>
                <NavLink className="p-2 sm:rounded-sm xl:hover:bg-cobalt" to="/about" onClick={handleNav}>About Me</NavLink>
                <NavLink className="p-2 sm:rounded-sm xl:hover:bg-cobalt" to="/portfolio" onClick={handleNav}>Portfolio</NavLink>
            </div>
        </nav>
    )
}
export default NavBar