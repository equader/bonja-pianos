import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import Hero from "./Hero"
import Clients from "./Clients";
import ReviewPanel from "./ReviewPanel";
import Services from "./Services";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div>
      <Nav/>
    <Hero/>
    <Clients/>
    <Services/>
{/*     <ReviewPanel/> */}
    <ContactForm/>
    <Footer/>
    </div>

  )
}


export default App;