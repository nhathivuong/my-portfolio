//dependencies 
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    } from "react-router-dom";

//Routes
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
// Component
import NavBar from "./NavBar";

const App = () => {
    return (
        <Router>
            <NavBar/>
            <h1 className="text-5xl font-underline font-bold text-white uppercase bg-cobalt absolute top-0 left-0 p-4 inline rounded-br-md">dot web</h1>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}

export default App