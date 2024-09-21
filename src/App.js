import React, { useState } from 'react';
import himage from "../src/assets/pics/ak.jpg";
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Data from './components/Data';
import Benefits from './components/Benefits';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css";


import {
  Content,
  Header,
  HeaderName,
  Button
} from '@carbon/react';
import { Switcher } from '@carbon/icons-react';
import Faqs from './components/Faqs';
import About from './components/About';

function App() {
  const [side, setSide] = useState(false);
  const [team, setTeam] = useState(false);
  const [faqs, setFaqs] = useState(false);

  const handleFaqs = () => {
    setFaqs(!faqs);
    if (team) {
      setTeam(false); // Close the team section if FAQ is opened
    }
  };

  const handleTeam = () => {
    setTeam(!team);
    if (faqs) {
      setFaqs(false); // Close the FAQ section if About is opened
    }
  };

  const handleSideBar = () => {
    setSide(!side);
  };

  return (
    <>
      {/* UI Shell Header */}
      <Header aria-label="Carbon UI Shell" style={{backgroundColor:"blue"}}> 
        <HeaderName  prefix='' >
          <img 
            src={himage} 
            alt="himage" 
            width={40} 
            height={40} 
            style={{ borderRadius: '50%', margin: "20px" ,objectFit:"cover"}} 
          />
          Eamon Dreads Salon
        </HeaderName>
       
      </Header>

      <Content>
        <HeroSection /> 
        <Services />
        <Benefits />
        <Contact />
        <Blog />
        <Data />
        <div className='side' >
        <div className='button-group' >
          <Button  style={{marginRight:"20%"}} onClick={handleFaqs}>FAQS </Button>
          <Button  onClick={handleTeam}>ABOUT US </Button>
        </div>
       
          {faqs && <Faqs />}
          {team && <About />}
          </div>
      </Content>
      <Footer />
    </>
  );
}

export default App;
