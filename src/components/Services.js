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
    <Grid className='p-5'  >
           {services.map((service)=>(

              <Column lg={8} sm={4} md={4} key={service.id} className='m-0 mt-5 p-2 shadow rounded  text-center' >
                                <div className='m-2 text-center' >
                  <h5>{service.name}</h5>
                  
                </div>
                <img src={service.photo} alt={service.name} width="90%" height="90%" style={{objectFit:"cover",borderRadius:"100%"}} />

      
              </Column>
            ))}

    </Grid>
    
    <Faqs />
  </>
  );
}
