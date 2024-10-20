import React, { useState } from 'react';
import one from '../assets/pics/a.jpg';
import two from '../assets/pics/b.jpg';
import three from '../assets/pics/c.jpg';
import four from '../assets/pics/d.jpg';
import { Column, Grid } from '@carbon/react';


export default function Services() {
  // Add 'isLiked' property and 'like' count to each service
  const [services, setServices] = useState([
    { id: 1, name: "Dreadlocks installation", photo: one},
    { id: 2, name: "Maintenance and repair", photo: two },
    { id: 3, name: "Loc extensions", photo: three },
    { id: 4, name: "Styling and design", photo: four},
  ]);

 
  
  return (
    <div  class="p-3 mb-2 bg-primary text-white rounded"  > 
     <center class="bg-success  text-white p-2 rounded " ><h2 class="h-3 p-2 bg-danger rounded" >Dreadlocks Services</h2>
     <p >From installation to maintenance, we've got you covered.</p>
      <b><i>List of services:</i></b>
      </center>
    <Grid>
     
    
      
     
        {services.map((service) => (
          <Column    lg={4} sm={2}  md={4}  key={service.id} className="datas">
              <img src={service.photo}  height="100%" width="100%" alt={service.name}  class="img-fluid"  />
              <div   >
              <p class="bg-success text-white " >{service.name}</p> 
              </div>
                
            </Column>
          
        ))}
      
      </Grid>
      </div>
  );
}
