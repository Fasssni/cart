import React from "react"
import {Routes, Route, Navigate} from "react-router-dom" 
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About" 

import "./main.css"
import { ModalCart } from "./components/ModalCart/ModalCart"

function App() {
    
 
  return <div className="app__main"> 
              <ModalCart/>
              <Navbar/> 
              <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/store" element={<Store/>} />
                 <Route path="/about" element={<About/>}  />
              </Routes>
         </div>
  
}

export default App
