import React from 'react';
import heroIm from '../assets/pics/c.jpg';




export default function HeroSection() {
  
  return (
    <div className='hero'> {/* Use container-fluid for full-width container */}
    <div>
    <h1  >Eamon Dreadlocks Solutions
               </h1>
            <p  >Experience the Art of Dreadlocks with Our Skilled Locticians</p>
            
    </div>
            <div  className='add-image' >
              <img src={heroIm} className="hero-image" width="100%" height={300}  alt="Dreadlocks services" />
            </div>
          </div>
        
  );
}
