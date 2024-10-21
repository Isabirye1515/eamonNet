
import { Column, Grid } from '@carbon/react';
import React, { useState } from 'react';

export default function Benefits() {
  const [benefits] = useState([
    { id: 1, name: "Expertise", value: "Our locticians have extensive experience and training in dreadlocks care and maintenance." },
    { id: 2, name: "Personalized service", value: "We take the time to understand your unique needs and preferences." },
    { id: 3, name: "Quality products", value: "We use only the best products to ensure healthy, thriving dreadlocks." },
    { id: 4, name: "Sanitation and hygiene", value: "Our salon maintains the highest standards of cleanliness and sanitation." },
    { id: 5, name: "Community", value: "Join our community of dreadlocks enthusiasts and connect with like-minded individuals." },
    { id: 6, name: "Customization", value: "We offer customized services to suit your lifestyle, hair type, and personal style." },
    { id: 7, name: "Maintenance and repair", value: "We provide guidance on proper maintenance and repair techniques." },
    { id: 8, name: "Education", value: "Our locticians are happy to share knowledge and tips on dreadlocks care." },
    { id: 9, name: "Relaxing atmosphere", value: "Our salon offers a welcoming, relaxing environment." },
    { id: 10, name: "Satisfaction guarantee", value: "We strive for 100% customer satisfaction." }
  ]);

  return (
    <div class="bg-dark rounded" >
    <h2 class="h-3 p-3 text-white " >You Extremely Benefit, See Our Offers.</h2><br />
    <Grid>
      
      {benefits.map(benefit => (
        
           <Column  lg={3} sm={2}  md={3}  className="data" key={benefit.id}    >
           <b class="bg- p-2 text-primary  rounded" >{benefit.name}</b><br/>
         <strong class="animate-pulse d-flex align-items-start shadow p-5  text-white" >{benefit.value}</strong> 
        </Column>
        
       
      ))}
    </Grid>
    </div>
  );
}
