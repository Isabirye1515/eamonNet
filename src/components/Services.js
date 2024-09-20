import React, { useState } from 'react';
import one from '../assets/pics/a.jpg';
import two from '../assets/pics/b.jpg';
import three from '../assets/pics/c.jpg';
import four from '../assets/pics/d.jpg';


export default function Services() {
  // Add 'isLiked' property and 'like' count to each service
  const [services, setServices] = useState([
    { id: 1, name: "Dreadlocks installation", photo: one, like: 0, isLiked: false },
    { id: 2, name: "Maintenance and repair", photo: two, like: 0, isLiked: false },
    { id: 3, name: "Loc extensions", photo: three, like: 0, isLiked: false },
    { id: 4, name: "Styling and design", photo: four, like: 0, isLiked: false },
  ]);

 
  
  return (
    <div className='service'>
      <center><h1>Dreadlocks Services</h1></center>
    
      <p>From installation to maintenance, we've got you covered.</p>
      <b><i>List of services:</i></b>
      <div className="datas">
        {services.map((service) => (
          <div  key={service.id}>
            <div className="image-container">
              <img src={service.photo}  height="100%" width="100%" alt={service.name} className="simg" />
              <div className="overlay">
                <p>{service.name}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
