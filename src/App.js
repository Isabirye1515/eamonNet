import React from 'react';
import himage from "../src/assets/pics/ak.jpg";
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Data from './components/Data';
import Benefits from './components/Benefits';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css";

import { Grid, Column } from '@carbon/react';
import Faqs from './components/Faqs';
import About from './components/About';
import { Link, Route, Routes } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';  // Import Bootstrap Button and ButtonGroup

function App() {
  const pages = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Talk", to: "/contact" },
    { id: 3, name: "Us On Media", to: "/blog" },
    { id: 4, name: "Our Offers", to: "/benefits" },
    { id: 5, name: "Gallery", to: "/pics" },
    { id: 6, name: "FAQs", to: "/faqs" },
    { id: 7, name: "About Us", to: "/about" },
  ];

  return (
    <div className="bg-black bg-gradient">
      <Grid>
        <Column lg={4} sm={4} md={3} className="head">
          <center>
            <Column className="container">
              <img
                src={himage}
                alt="himage"
                width={250}
                height={100}
                style={{ borderRadius: '100%', margin: "20px", objectFit: "cover" }}
                className="img-fluid"
              />
              <h1 className="text-secondary">Eamon Dreads Salon</h1>
              <p className="text-white">Experience the Art of Dreadlocks with Our Skilled Locticians</p>
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

        {/* Bootstrap ButtonGroup Navigation */}
        <center>
          <ButtonGroup aria-label="Navigation" className="my-4 p-3">
            {pages.map((page) => (
              <Button key={page.id} variant="outline-light">
                <Link  style={{fontSize:"10px"}} to={page.to} className="text-primary text-decoration-none">
                 <b>{page.name}</b> 
                </Link>
              </Button>
            ))}
          </ButtonGroup>
        </center>

        <Column lg={16} md={8} sm={4}>
          <Footer />
        </Column>
      </Grid>
    </div>
  );
}

export default App;
