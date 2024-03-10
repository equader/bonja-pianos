import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import Hero from "./Hero"
import Clients from "./Clients";
import ReviewPanel from "./ReviewPanel";
import Services from "./Services";
import ContactForm from "./ContactForm";
import FAQPanel from "./FAQPanel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Accreditations from "./Accreditations";


function App() {
  return (
    <div>
      <Nav/>
    <Hero/>
    <Clients/>
    <Services/>
{/*     <ReviewPanel/> */}
    <ContactForm/>
    <FAQPanel/>
    <Accreditations/>
    <Footer/>
    </div>

  )
}


export default App;