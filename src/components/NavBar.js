import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { CgDarkMode } from "react-icons/cg";
// import { FaUniversalAccess } from "react-icons/fa6";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)
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

    const [darkMode, setDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

    useEffect(()=> {
        if(darkMode) {
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }

    },[darkMode])

    const darkModeToggle = () => {
        setDarkMode((dark)=>{
            document.documentElement.classList.toggle("dark")
            return !dark
        })
    }

    return(
        <nav>
            <div className={`${hamburgerDisplay? "w-screen flex justify-end items-center" : "hidden"}`}>
                {/* <button className="text-cobalt text-2xl size-fit p-2 m-2 hover:text-white hover:bg-cobalt">
                    <FaUniversalAccess/>
                </button> */}
                <button onClick={darkModeToggle} className="text-cobalt text-xl active:text-white active:bg-cobalt rounded-sm dark:text-white size-fit p-2 m-2 hover:text-white hover:bg-cobalt">
                    <CgDarkMode/>
                </button>
                <button onClick={handleNav} className="rounded-sm text-xl active:text-white active:bg-cobalt hover:text-white hover:bg-cobalt text-cobalt dark:text-white p-2">
                    <RxHamburgerMenu draggable="false"/>
                </button>
            </div>
            <div className={`${navOpen? "text-white bg-cobalt flex flex-col relative gap-2 decoration-solid": "hidden sm:flex flex-row"} items-center font-mont sm:m-2 text-white sm:text-right sm:justify-end p-2 font-bold`}>
                <button onClick={darkModeToggle} className={`${hamburgerDisplay? "hidden":"text-cobalt text-xl dark:text-white size-fit p-2 hover:text-white hover:bg-cobalt rounded-sm"}`}>
                    <CgDarkMode draggable="false"/>
                </button>
                <NavLink className={`p-2 text-xl sm:rounded-sm ${hamburgerDisplay? "hover:bg-white hover:text-cobalt" : "hover:bg-cobalt"} drop-shadow-[1px_1px_1px_black]`} to="/" onClick={handleNav}>Home</NavLink>
                <NavLink className={`p-2 text-xl sm:rounded-sm ${hamburgerDisplay? "hover:bg-white hover:text-cobalt" : "hover:bg-cobalt"} drop-shadow-[1px_1px_1px_black]`} to="/about" onClick={handleNav}>About Me</NavLink>
                <NavLink className={`p-2 text-xl sm:rounded-sm ${hamburgerDisplay? "hover:bg-white hover:text-cobalt" : "hover:bg-cobalt"} drop-shadow-[1px_1px_1px_black]`} to="/portfolio" onClick={handleNav}>Portfolio</NavLink>
            </div>
        </nav>
    )
}
export default NavBar