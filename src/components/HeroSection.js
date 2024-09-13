import { Tile } from '@carbon/react';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="container-fluid mt-4"> {/* Use container-fluid for full-width container */}
      <div className="row">
        <div className="col-12"> {/* Use col-12 to span full width */}
          <Tile className="custom-tile">
            <h2>Expert Dreadlocks Services, Professional Dreadlocks Salon, Your Premier DreadLocks Destination</h2>
            <h1>Experience the Art of Dreadlocks with Our Skilled Locticians</h1>
            <b>Transform Your Hair</b> <b>Transform Your Life </b> <b>Where Every Lock Tells a Story</b> 
            <h1>Book Your Appointment Now, Get Consultation, Learn More About Our Services</h1>
          </Tile>
        </div>
      </div>
    </div>
  );
}
