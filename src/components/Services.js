import React, { useEffect, useState } from 'react';
import one from '../assets/pics/a.jpg';
import two from '../assets/pics/b.jpg';
import three from '../assets/pics/c.jpg';
import four from '../assets/pics/d.jpg';
import { Column, Grid } from '@carbon/react';
import Faqs from './Faqs';
import { Education, ServiceDesk } from '@carbon/icons-react';
import Aos from "aos"
import "aos/dist/aos.css"

export default function Services() {
  // Add 'isLiked' property and 'like' count to each service
  const dreadlockSkills = [
  {
    id: 1,
    name: "Sectioning Techniques",
    description: "Creating neat and even parts to start dreadlocks."
  },
  {
    id: 2,
    name: "Backcombing and Twisting",
    description: "Using combs or twisting to form the base of each dread."
  },
  {
    id: 3,
    name: "Palm Rolling",
    description: "Rolling dreads between the palms to help shape and tighten them."
  },
  {
    id: 4,
    name: "Crocheting",
    description: "Using a crochet hook to tighten and refine dreadlocks."
  },
  {
    id: 5,
    name: "Interlocking",
    description: "Tightening dread roots by pulling them through themselves with a tool."
  },
  {
    id: 6,
    name: "Lock Starting Methods",
    description: "Learning various ways to start dreadlocks: comb coils, two-strand twists, and freeform."
  },
  {
    id: 7,
    name: "Dreadlock Repair",
    description: "Fixing broken or thinning dreadlocks to maintain their health and appearance."
  },
  {
    id: 8,
    name: "Retwisting and Maintenance",
    description: "Regular upkeep to keep dreadlocks tidy, especially at the roots."
  },
  {
    id: 9,
    name: "Dreadlock Removal",
    description: "Safely undoing dreadlocks with minimal hair loss or damage."
  },
  {
    id: 10,
    name: "Scalp Care and Hygiene",
    description: "Maintaining a clean, healthy scalp to support healthy dreadlocks."
  },
  {
    id: 11,
    name: "Dreadlock Styling",
    description: "Creating stylish dreadlock looks like buns, braids, and mohawks."
  },
  {
    id: 12,
    name: "Accessory Application",
    description: "Adding beads, wraps, and other decorations to dreadlocks."
  },
  {
    id: 13,
    name: "Coloring and Dyeing Locs",
    description: "Safely applying and maintaining color in dreadlocks."
  },
  {
    id: 14,
    name: "Loc Extensions",
    description: "Adding synthetic or human hair to create longer or instant dreads."
  },
  {
    id: 15,
    name: "Client Consultation",
    description: "Understanding clients’ hair types and dreadlock goals."
  },
  {
    id: 16,
    name: "Hair Texture Knowledge",
    description: "Knowing how different hair textures affect dreadlock formation."
  },
  {
    id: 17,
    name: "Time Management",
    description: "Managing time effectively for dreadlock installation and services."
  },
  {
    id: 18,
    name: "Sanitation & Tool Hygiene",
    description: "Keeping tools and workspace clean and safe for clients."
  },
  {
    id: 19,
    name: "Product Knowledge",
    description: "Choosing appropriate products like shampoos and gels for dreadlocks."
  },
  {
    id: 20,
    name: "Business Skills",
    description: "Managing appointments, pricing, marketing, and client service."
  }
];

  const [services] = useState([
    { id: 1, name: "Dreadlocks installation", photo: one },
    { id: 2, name: "Maintenance and repair", photo: two },
    { id: 3, name: "Loc extensions", photo: three },
    { id: 4, name: "Styling and design", photo: four },
  ]);
        useEffect(() => {
            Aos.init({
                duration: 1000, // Animation duration in milliseconds
                once: false, // Whether animation should happen only once
                mirror: true, // Whether elements should animate out while scrolling past them
            });
        }, []);

  return (
    <>
    <Grid className='p-5'  >
                                                          <Column lg={16} md={8} sm={4}  className="d-flex m-4 " >
                                  <ServiceDesk size={30} /> <h5  >Customer Services</h5>
                                  </Column> 
           {services.map((service)=>(

              <Column lg={5} sm={4} md={4} key={service.id} className='m-0 mt-5 p-1  rounded  text-center' data-aos="fade-up" >
                                <div className='m-2 text-center' >
                  <p className='fw-light' >{service.name}</p>
                  
                </div>
                <img src={service.photo} alt={service.name} className="shadow"  width="90%" height="90%" style={{objectFit:"cover",borderRadius:"10px"}} />

      
              </Column>
            ))}
                                                          <Column lg={16} md={8} sm={4}  className="d-flex m-4 " >
                                  <Education size={30} /> <h5  >Student Services</h5>
                                  </Column> 
                                  {dreadlockSkills.map((skill)=>(
                                    <Column lg={4} md={4} sm={4}  className='m-2' data-aos="flip-right"
                                     style={{
                  maxWidth: "100%",
                  padding: "10px 15px",
                  backgroundColor: "#ffffff",
                  borderRadius: "15px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
                                     key={skill.id}>
                                      <p className='fw-light ' >{skill.name}</p>
                                       <p className='fw-lighter' >{skill.description}</p>
                                    </Column>
                                  ))}


    </Grid>
    
    <Faqs />
  </>
  );
}
