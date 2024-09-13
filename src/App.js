import React, { useState } from 'react';
import himage from "../src/assets/pics/ak.jpg";
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Data from './components/Data';
import Benefits from './components/Benefits';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  Content,
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem
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
      <Header aria-label="Carbon UI Shell">
        <HeaderName href="#" prefix="EA">
          <img 
            src={himage} 
            alt="himage" 
            width={40} 
            height={40} 
            style={{ borderRadius: '50%', margin: "20px" }} 
          />
          Eamon Dreads Saloon
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="App Switcher" onClick={handleSideBar} tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      
      {/* Side Navigation */}
      {side && (
        <SideNav aria-label="Side navigation" isRail  style={{backgroundColor:"#100766", position:"absolute"}} >
          <SideNavItems>
            <SideNavMenu title="ACKNOWLEDGEMENT">
              <SideNavMenuItem onClick={handleFaqs}>FAQS</SideNavMenuItem>
              <SideNavMenuItem onClick={handleTeam}>ABOUT</SideNavMenuItem>
            </SideNavMenu>
          <div className='side' >
          {faqs && <Faqs />}
          {team && <About />}
          </div>
            
          </SideNavItems>
        </SideNav>
      )}

      <Content>
        <HeroSection />
        <Services />
        <Benefits />
        <Contact />
        <Blog />
        <Data />
      </Content>
      <Footer />
    </>
  );
}

export default App;
