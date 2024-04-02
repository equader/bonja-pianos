import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import Hero from "./Hero"
import Clients from "./Clients";
import Services from "./Services";
import ContactForm from "./ContactForm";
import FAQPanel from "./FAQPanel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Accreditations from "./Accreditations";
import About from "./About";
import Reviews from "./Reviews";
import ElfsightWidget from "./Elfsightwidget";
import Button from "./Button"




function App() {
  return (
    <div>
    <Nav/>
    <Hero/>
    <About/>
    <Clients/>
    <Services/>
    <ContactForm/>
    <ElfsightWidget/>
    <FAQPanel/>
    <Accreditations/>
    <Footer/>
    </div>

  )
}


export default App;