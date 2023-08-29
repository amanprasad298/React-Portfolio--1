import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/services/Services';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services /> 
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  )
}

export default App