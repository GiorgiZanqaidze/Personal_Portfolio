
import { Routes, Route } from "react-router-dom"
import {Home} from "./Home"
import {About} from "./About"
import {MyWork} from "./MyWork"
import {Skills} from "./Skills"
import { Footer } from "./Footer"
import { Contact } from "./Contact"
import { Error } from "./Error"

import { Navbar } from "./Navbar"

import './style/App.css'

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/skills" element={ <Skills/> } />
        <Route path="/myWork" element={ <MyWork/> } />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="*" element={ <Error/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
