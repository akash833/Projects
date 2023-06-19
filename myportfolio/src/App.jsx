import Home from './components/home/Home.jsx';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import Navigation from './components/navbar/Navbar';
import Toggle from './components/toggle/Toggle';
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;



    return (
            <>
            <Navigation />
            <Toggle />
            <div
                style={{
                    backgroundColor: darkMode ? "#222" : "white",
                    color: darkMode && "white"
                }}>
                <Home/>
                <About/>
                <Skills/>
                <ProjectList/>
                <Contact/>
            </div>
    </>

    )
}

export default App;
