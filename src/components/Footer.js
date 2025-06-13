import { Grid, Column, Link } from '@carbon/react';
import React from 'react';
import {  Location, Phone } from '@carbon/icons-react'; // Import location and phone icons
import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";
export default function Footer() {

  const url = "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111"
  const tel = "tel:0703819029";
  const icons = [
    {id:1,url:"https://www.facebook.com/eamon256", photo:facebook},
    {id:2,url:"https://www.instagram.com/eamon_dreads_kampala/", photo:instagram},
    {id:3,url:"https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", photo:tiktok}
  ]
 

  return (
    <Grid>

                          <Column lg={5} md={3} sm={4} className="m-2" >
                               <div className="w-100 p-2"  ><button  onClick={() => window.location.href='#herosection'} className="btn btn-light  w-50 m-2">Hero Section</button>
                      <button  onClick={() => window.location.href='#testimonials'} className="btn btn-light w-50 m-2">Testimonials</button></div>
                      <div className="w-100 p-2" ><button onClick={() => window.location.href='#contact'} className="btn btn-light  w-50 m-2">Contact Us</button>
                  <button onClick={() => window.location.href='#blog'} className="btn btn-light w-50   m-2">Get a Quote</button></div>
                      <div className="w-100 p-2" ><button onClick={() => window.location.href='#service'} className="btn btn-light w-50 m-2">Service</button>
                      <button onClick={() => window.location.href='#benefits'} className="btn btn-light w-50 m-2">Benefits</button></div>
      
                      <a   href={url} target="_blank" rel="noreferrer" ><button className="btn btn-primary  m-2 mt-5"><Location  size={30} />Pack View Shopping Center</button></a>
                          </Column>
                     
      <Column lg={5} sm={4} md={4}  className='footer' >
        <h1 style={{ fontSize: "20px" }}>We are Located at the Park View Shopping Center</h1>
        
        {/* Link to Google Maps with Location Icon */}
        <Link href={url} target="_blank" external style={{ display: 'flex', alignItems: 'center' }}>
          <Location size={20} style={{ marginRight: '5px' }} />
          Directions
        </Link>
        
        {/* Link to phone number with Phone Icon */}
        <Link href={tel} external style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Phone size={20} style={{ marginRight: '5px' }} />
          Call
        </Link>
       {icons.map((icon,index)=>
    <p className='icon' key={icon.id} >
      <Link href={icon.url}  ><img src={icon.photo}  height={20} width={20} alt="icon" /></Link>
    </p>
    )}
    </Column>
    
    </Grid>
  );
}
