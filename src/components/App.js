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

const App = () => {
    return (
        <Router>
            <h1 className="text-5xl cobalt ">dot web</h1>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}

export default App