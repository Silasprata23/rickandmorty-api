import React from "react";
import './App.css'
import {Header} from "./components/Header/index.jsx";
import { Main } from "./components/Main/index.jsx";
import { SectionCharacters } from "./components/SectionCharacters/index.jsx";
import {Footer} from "./components/Footer/index.jsx";


function App() {
  return(
      <React.Fragment>
          <Header/>
          <Main/>
          <SectionCharacters/>
          <Footer/>
      </React.Fragment>
  )
}
  export default App
