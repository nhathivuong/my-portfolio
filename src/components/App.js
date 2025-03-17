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

// Component
import NavBar from "./NavBar";

const App = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}

export default App