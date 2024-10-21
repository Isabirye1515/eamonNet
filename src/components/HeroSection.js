import React from 'react';
import heroIm from '../assets/pics/ay.webp';
import { Column, Grid } from '@carbon/react';

export default function HeroSection() {
  
  return (
    <div className='head' >
    <Grid className='hero'> {/* Use container-fluid for full-width container */}
            <Column  lg={8} sm={2}  md={4}  className='add-image' >
              <img src={heroIm} className="hero-image" width="100%" height={500}  alt="Dreadlocks services" />
            </Column>
             </Grid>
             </div>
  );
}
