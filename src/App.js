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
  Button,
  Grid,
  Column
} from '@carbon/react';
import { Switcher } from '@carbon/icons-react';
import Faqs from './components/Faqs';
import About from './components/About';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  const [side, setSide] = useState(false);
  const [team, setTeam] = useState(false);
  const [faqs, setFaqs] = useState(false);

  const pages = [
    { id: 1, name: "Home", to: "/" },
    { id: 1, name: "Talk", to: "/contact" },
    { id: 3, name: "Us On Media", to: "/blog" },
    { id: 4, name: "Our Offers", to: "/benefits" },
    { id: 5, name: "Gallery", to: "/pics" }
  ];

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
    <div class="bg-black bg-gradient" >
      <Grid>
        <Column  lg={4} sm={4} md={3}  className="head" >
        <center>
          <Column className="container">
            <img 
              src={himage} 
              alt="himage" 
              width={200} 
              height={200} 
              style={{ borderRadius: '50%', margin: "20px", objectFit: "cover" }} 
              class="img-fluid"
            />
            <h1 className="text-secondary">Eamon Dreads Salon</h1>
          </Column>
          
          <Column className='text-primary'>
            <Link class="btn btn-secondary" to="/faqs" role="button">FAQs</Link><br/><br/>
            <Link class="btn btn-secondary" to="/about" role="button">About Us</Link>
          </Column>
          </center>
        </Column>

        <Column lg={12} sm={4} md={5}>
          <div>
            <HeroSection />
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Services />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pics" element={<Data />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Column>

        {/* Dynamically Render Navigation Links */}
        {pages.map((page) => (
          <Column lg={3} md={2} sm={1} key={page.id}  className='navigate' >
            <Link className="btn btn-primary" to={page.to} role="button">
              {page.name}
            </Link>
          </Column>
        ))}

        <Column lg={16} md={8} sm={4}>
          <Footer />
        </Column>
      </Grid>
    </div>
  );
}

export default App;
