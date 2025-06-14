
import { Column, Grid } from '@carbon/react';
import React, { useState } from 'react';
import imagea from "../assets/pics/expertize.jpg"
import imageb from "../assets/pics/personel.jpg"
import imagec from "../assets/pics/quality.jpg"
import imaged from "../assets/pics/sanitation.jpg"
import imagee from "../assets/pics/community.jpg"
import imagef from "../assets/pics/customisation.jpg"
import imageg from "../assets/pics/repair.jpg"
import imageh from "../assets/pics/education.jpg"
import imagei from "../assets/pics/relax.jpg"
import imagej from "../assets/pics/satifaction.jpg"

export default function Benefits() {
  const [benefits] = useState([
    { id: 1, name: "Expertise", value: "Our locticians have extensive experience and training in dreadlocks care and maintenance.",image:imagea },
    { id: 2, name: "Personalized service", value: "We take the time to understand your unique needs and preferences.", image:imageb },
    { id: 3, name: "Quality products", value: "We use only the best products to ensure healthy, thriving dreadlocks.", image:imagec },
    { id: 4, name: "Sanitation and hygiene", value: "Our salon maintains the highest standards of cleanliness and sanitation.", image:imaged },
    { id: 5, name: "Community", value: "Join our community of dreadlocks enthusiasts and connect with like-minded individuals.", image:imagee },
    { id: 6, name: "Customization", value: "We offer customized services to suit your lifestyle, hair type, and personal style." , image:imagef},
    { id: 7, name: "Maintenance and repair", value: "We provide guidance on proper maintenance and repair techniques.", image:imageg },
    { id: 8, name: "Education", value: "Our locticians are happy to share knowledge and tips on dreadlocks care.", image:imageh },
    { id: 9, name: "Relaxing atmosphere", value: "Our salon offers a welcoming, relaxing environment.", image:imagei },
    { id: 10, name: "Satisfaction guarantee", value: "We strive for 100% customer satisfaction.", image:imagej }
  ]);

  return (
   
    <>
    <Grid className="p-5" >
      {benefits.map((benefit)=>(
        <Column lg={5} sm={4} md={4} key={benefit.id} className='m-2 mt-5 shadow rounded  text-center' >
          <img src={benefit.image} alt={benefit.name} width={260} height={350} style={{objectFit:"cover"}} />
          <div className='m-2 text-center' >
            <h3>{benefit.name}</h3>
            <p>{benefit.value}</p>
          </div>

        </Column>
      ))}

    </Grid>
    </>
  );
}
