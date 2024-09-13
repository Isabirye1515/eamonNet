import React, { useState } from 'react';
import one from '../assets/pics/a.jpg';
import two from '../assets/pics/b.jpg';
import three from '../assets/pics/c.jpg';
import four from '../assets/pics/d.jpg';

export default function Services() {
  const [services] = useState([
    { id: 1, name: "Dreadlocks installation", photo: one },
    { id: 2, name: "Maintenance and repair", photo: two },
    { id: 3, name: "Loc extensions", photo: three },
    { id: 4, name: "Styling and design", photo: four },
   
  ]);

  return (
    <div  className='service'>
      <h2 style={{color:"#ddd ",marginLeft:"3%"}} > Dreadlocks Services</h2>
      <h1>From installation to maintenance, we've got you covered.</h1>
      <h1><b><i>List of services:</i></b></h1>
      <div className="datas" >
      {services.map(service => (
        <div  className="data" key={service.id}>
          <h1>{service.name}</h1>
          <hr />
          <img src={service.photo} height="100%" width="100%" alt={service.name} />
        </div>
      ))}
      </div>
     
    </div>
  );
}
