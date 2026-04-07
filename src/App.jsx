import React from "react";
import './App.css'
import {Header} from "./components/Header/index.jsx";
import { Main } from "./components/Main/index.jsx";
import { Card } from "./components/Card/index.jsx";


function App() {
  return(
      <React.Fragment>
          <Header/>
          <Main/>
          <Card/>
      </React.Fragment>
  )
}
  export default App
