import { Grid, Column, Link } from '@carbon/react';
import {  Location, PhoneIncoming } from '@carbon/icons-react'; // Import location and phone icons
import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";
import { useNavigate } from 'react-router-dom';
export default function Footer() {
  const navigate = useNavigate()

  const url = "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111"
  const icons = [
    {id:1,url:"https://www.facebook.com/eamon256", photo:facebook,name:"Find More On Facebook"},
    {id:2,url:"https://www.instagram.com/eamon_dreads_kampala/", photo:instagram, name:"Find More On Instagram"},
    {id:3,url:"https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", photo:tiktok, name:"Find More On Tiktok"}
  ]
 

  return (
    <Grid className='text-center  m-4 p-4 bg-dark mt-5 text-light'  style={{margin:"0px",width:"100%", padding:"20px"}} >

                          <Column lg={4} md={2} sm={4} className="m-2" >
                          <p className='fw-bold'>Home Pages</p>
                               <div className="w-100 p-2"  ><button  onClick={() => window.location.href='#herosection'} className="btn btn-light  w-50 m-2">Hero Section</button>
                      <button  onClick={() => window.location.href='#testimonials'} className="btn btn-light w-50 m-2">Testimonials</button></div>
                      <div className="w-100 p-2" ><button onClick={() => window.location.href='#contact'} className="btn btn-light  w-50 m-2">Contact Us</button>
                  <button onClick={() => window.location.href='#blog'} className="btn btn-light w-50   m-2">Get a Quote</button></div>
                      <div className="w-100 p-2" ><button onClick={() => window.location.href='#service'} className="btn btn-light w-50 m-2">Service</button>
                      <button onClick={() => window.location.href='#benefits'} className="btn btn-light w-50 m-2">Benefits</button></div>
      
                      
                          </Column>
                     
      <Column lg={5} sm={4} md={2}  className='m-2' >
      <p className='fw-bold'>Connect With Us</p>

        <div>
<a   href={url} target="_blank" rel="noreferrer" ><button className="btn btn-primary   mt-4"><Location  size={30} />Pack View Shopping Center</button></a>
        
     <a  className="btn btn-warning mt-4" href="tel:+256741099245"><PhoneIncoming size={30}  className="text-white" />+256703819029</a>
     </div>
       {icons.map((icon)=>
    <p className='icon  m-2 p-2 d-flex ' key={icon.id} >
      <Link href={icon.url}  ><img src={icon.photo}  height={40} width={40} alt="icon" /></Link><p className="fw-light" >{icon.name}</p>
    </p>
    )}
    </Column>

    <Column lg={7} md={4} sm={4} className="m-2" >
                          <p className='fw-bold'>Main Pages</p>
                               <div className="w-100 p-2"  ><button  onClick={() => navigate("/")} className="btn btn-light  w-50 m-2">Home</button>
                      <button  onClick={() => navigate("/services")} className="btn btn-light w-50 m-2">Services</button></div>
                      <div className="w-100 p-2" ><button onClick={() => navigate("/contact")} className="btn btn-light  w-50 m-2">Contact</button>
                  <button onClick={() => navigate("/blog")} className="btn btn-light w-50   m-2">Social Media</button></div>
                      <div className="w-100 p-2" ><button onClick={() => navigate("/gallery")} className="btn btn-light w-50 m-2">Gallery</button>
                      <button onClick={() => navigate("/benefit")} className="btn btn-light w-50 m-2">Offers</button></div>
      
                      
                          </Column>
    
    </Grid>
  );
}
