import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import Hero from "./Hero"
import Clients from "./Clients";
import ReviewPanel from "./ReviewPanel";
import Services from "./Services";

function App() {
  return (
    <div>
      <Nav/>
    <Hero/>
    <Clients/>
    <Services/>
    <ReviewPanel/>
    <Footer/>
    </div>

  )
}


export default App;