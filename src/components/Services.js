import React, { useState } from 'react';
import one from '../assets/pics/a.jpg';
import two from '../assets/pics/b.jpg';
import three from '../assets/pics/c.jpg';
import four from '../assets/pics/d.jpg';
import { Column, Grid } from '@carbon/react';
import Faqs from './Faqs';

export default function Services() {
  // Add 'isLiked' property and 'like' count to each service
  const [services] = useState([
    { id: 1, name: "Dreadlocks installation", photo: one },
    { id: 2, name: "Maintenance and repair", photo: two },
    { id: 3, name: "Loc extensions", photo: three },
    { id: 4, name: "Styling and design", photo: four },
  ]);

  return (
    <>
    <Grid   >
           {services.map((service)=>(
              <Column lg={5} sm={4} md={4} key={service.id} className='m-2 mt-5 shadow rounded  text-center' >
                <img src={service.photo} alt={service.name} width={260} height={350} style={{objectFit:"cover"}} />
                <div className='m-2 text-center' >
                  <h3>{service.name}</h3>
                  
                </div>
      
              </Column>
            ))}

    </Grid>
    
    <Faqs />
  </>
  );
}
