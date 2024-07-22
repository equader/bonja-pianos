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
import ElfsightWidget from "./Elfsightwidget";
import Button from "./Button"
import Blogs from "./Blogs";
import Alert from "./Alert";
import { Analytics } from "@vercel/analytics/react"




function App() {
  return (
    <div>
    <Analytics />
    <Nav/>
    <Hero/>
    <About/>
    <Clients/>
    <Services/>
    <ContactForm/>
    <ElfsightWidget/>
    <FAQPanel/>
    <Blogs/>
    <Accreditations/>
    <Footer/>
    </div>

  )
}


export default App;