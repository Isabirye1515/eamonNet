
import AOS from "aos";
import "aos/dist/aos.css";
import imagee from "../assets/pics/ak.jpg"; 
import imageA from "../assets/pics/p.jpg"; 
import imaged from "../assets/pics/ay.jpg"; 
import imageC from "../assets/pics/ad.jpg";
import imageb from "../assets/pics/ah.jpg"; // Uncomment if you want to use a different image
import { Column, Grid } from "@carbon/react";
import {  Activity, Blog, BringForward, CallsIncoming, Camera, ConnectionSend, DownToBottom, DropPhoto, Email, ImageStoreLocal, Location, MessageQueue, Phone, PhoneIncoming, SendToBack, ServiceDesk, TouchInteraction, UpToTop, UserFeedback } from "@carbon/icons-react";
import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const url = "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111";
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Whether animation should happen only once
            mirror: true, // Whether elements should animate out while scrolling past them
        });
    }, []);
    return (
        <>
        {/* home */}
            
            <Grid id="head" className="mt-5 p-5 " data-aos="fade-up" >
                                    <Column lg={16} md={8} sm={4} className=" d-flex" >
                         <button  onClick={() => window.location.href='#herosection'} className="btn  ">Activity</button>
                <button  onClick={() => window.location.href='#testimonials'} className="btn">Testified</button>
                <button onClick={() => window.location.href='#contact'} className="btn">Contact</button>
            <button onClick={() => window.location.href='#blog'} className="btn ">Blogs</button>
        <button onClick={() => window.location.href='#service'} className="btn">Services</button>
                    </Column>
                
                <Column lg={8} md={4} sm={4} className="m-2" >
                
                    <h2 className="text-primary p-2">EAMON</h2>
                    <h2 className="text-secondary p-2 ">DREADS</h2>
                    <h2 className="text-danger p-2 ">KAMPALA</h2>
                         
                          <a   href={url} target="_blank" rel="noreferrer" ><button className="btn btn-primary  m-2 "><Location  size={30} />Pack View Shopping Center</button></a>
                
                    </Column>
                     <Column lg={8} md={4} sm={4} >
                    
                        <img src={imagee} alt="Eamon Dreads" className="mt-4"  style={{ width: "350px", height: "350px", objectFit:"cover", borderRadius:"5px"}} />
                    </Column>

               
                
            </Grid>
       <hr/>     {/* herosection */}
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="herosection">
              <p className=" p-3 w-50 d-flex"  >
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#head'}>Home<UpToTop size={20} /> </p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#gallery'} >Footer<DownToBottom size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#head'} >Previous<SendToBack size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#testimonials'} > Next<BringForward size={20} /></p>

                </p>
               </div>

                        <Grid   className="mt-5  p-5" data-aos="fade-up" >
                                                        <Column lg={16} md={8} sm={4}  className="d-flex" >
                            <Activity size={30} /> <h2  >Activity</h2>
                            </Column> 
                             <Column lg={6} md={4} sm={4} >
               
                    
                        <img src={imageb} alt="Eamon Dreads" className="mt-5"  style={{ width: "380px", height: "550px", objectFit:"cover", borderRadius:"10px" }} data-aos="fade-right" />
                    </Column>
                <Column lg={10} md={4} sm={4} className="m-2  mt-10" data-aos="fade-left" >

                <h2> We have been in service for over 10 years</h2>
                <p>Eamon Dreads Solutions Continues to serve you</p>
                <p>We are committed to providing the best hair care services in Kampala</p>
                <p>Our team of experts is dedicated to ensuring your satisfaction</p>



<a href="#head" className="btn btn-primary m-2">Contact us now</a>

                    </Column> 
                
            </Grid>
            {/* about */}
            <hr/>

<div id="testimonials"  style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <p className=" p-3 w-50 d-flex"  >
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#head'}>Home<UpToTop size={20} /> </p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#gallery'} >Footer<DownToBottom size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#herosection'} >Previous<SendToBack size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#blog'} > Next<BringForward size={20} /></p>

                </p>
               </div>
                        <Grid className="mt-5 m-4 p-5"  data-aos="fade-up" >
                                                        <Column lg={16} md={8} sm={4}  className="d-flex" >
                            <UserFeedback size={30} /> <h2  >Testimonials</h2>
                            </Column> 
                
                <Column lg={10} md={4} sm={4}  className="  mt-10" >
        <h2>We are a team of talented lockticians</h2>
        <p>Our Customer just Rest in the Confort while we take care of their hair</p>
        <p>We pilot the plane, that lands in the beauty world, and Presitige</p>
                    <p>We are the best in Kampala, and we are here to serve you</p>
                    </Column>
                <Column lg={6} md={4} sm={4}  className=" mt-10" >
        
<img src={imageC} alt="Eamon Dreads" className="mt-5"  style={{ width: "350px", height: "350px", objectFit:"cover", borderRadius:"5px" }} />
                    </Column>
                
            </Grid>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="blog">
              <p className=" p-3 w-50 d-flex"  >
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#head'}>Home<UpToTop size={20} /> </p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#gallery'} >Footer<DownToBottom size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#testimonials'} >Previous<SendToBack size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#contact'} > Next<BringForward size={20} /></p>

                </p>
               </div>

            {/* blog */}
                        <Grid className="mt-5 m-4 p-5"  data-aos="fade-up" >

                                                        <Column lg={16} md={8} sm={4}  className="d-flex" >
                            <Blog size={30} /> <h2  >Blogs</h2>
                            </Column> 
                                            <Column lg={5} md={4} sm={4} className="p-4  shadow"  onClick={()=>navigate("/blog")}  >
                    
                        
                                                <img src={facebook} alt="Eamon Dreads" className="mt-5"  style={{ width: "50px", height: "50px", objectFit:"cover" }} />
                          <img src={instagram} alt="Eamon Dreads" className="mt-5"  style={{ width: "50px", height: "50px", objectFit:"cover" }} />
                            <img src={tiktok} alt="Eamon Dreads" className="mt-5"  style={{ width: "50px", height: "50px", objectFit:"cover" }} />
                    </Column>

                <Column lg={11} md={4} sm={4}  className="  mt-10" >
                    <h2>EAMON dreads Has bean in service for quit some time.</h2>
                    <p>We have a collection of infinity images, reals, and videos showcasing our work.</p>
                    <p>View a glance , can give a plenty of service, we can offer you</p>
                    <p>We have stocked our collection on facebook, instagram, tiktok</p>
                    </Column>

            </Grid>
            <hr/>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="contact" >
              <p className=" p-3 w-50 d-flex"  >
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#head'}>Home<UpToTop size={20} /> </p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#gallery'} >Footer<DownToBottom size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#blog'} >Previous<SendToBack size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#services'} > Next<BringForward size={20} /></p>

                </p>
               </div>
            {/* contactus */}
            <Grid className="mt-5 m-4 p-5 "  data-aos="fade-up" >
                            <Column lg={16} md={8} sm={4}  className="d-flex" >
                            <ConnectionSend size={30} /> <h2  >Contact</h2>
                            </Column> 
                <Column lg={8} md={4} sm={4} className=" mt-10"  >
                <h2>Contact Us On Line</h2>
                    <p><a className="btn btn-primary" href="#blog"><Blog size={25} /></a>We are available on all social media platforms</p>
                    <p><a className="btn btn-primary" href="#head"><Phone size={25} /></a>We are available Via  WhatsApp</p>
                    <p><a className="btn btn-primary" href="#head"><Email size={25} /></a>We are available Via Email</p>

                    </Column>


                <Column lg={8} md={4} sm={4} className=" mt-10">
                    <h2>Contact Us Via Phone</h2>
                    <p><a className="btn btn-primary"  href="#head"><CallsIncoming size={25} /></a>We are available Via Phone</p>
                    <p><a  className="btn btn-primary" href="#head"><MessageQueue size={25}  /></a>We are available Via SMS</p>
                    <p><a className="btn btn-primary"  href="#head"><Location size={25} /></a>Find Us At Pack View Shopping Center</p>

                    </Column>


                
            </Grid>
            {/* <service */}
            <hr/>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="services">
              <p className=" p-3 w-50 d-flex"  >
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#head'}>Home<UpToTop size={20} /> </p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#gallery'} >Footer<DownToBottom size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#contact'} >Previous<SendToBack size={20} /></p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#gallery'} > Next<BringForward size={20} /></p>

                </p>
               </div>
                        <Grid className="mt-5 m-4 p-5"   data-aos="fade-up" >
                                                        <Column lg={16} md={8} sm={4}  className="d-flex" >
                            <ServiceDesk size={30} /> <h2  >Services</h2>
                            </Column> 
                
                <Column lg={8} md={4} sm={4}  className=" mt-10" >
                <h2>Customer Services</h2>
                    <p>We offer a wide range of services to meet your needs</p>
                    <p>From dreadlocks installation to maintenance and repair</p>
                    <p>We are here to provide you with the best service possible</p>  
                    <p>We are committed to ensuring your satisfaction</p>

                    </Column>
                <Column lg={5} md={4} sm={4} className=" mt-10" >
                <h2>Students Services</h2>
                    <p>We offer special services for students</p>
                    <p>From discounts to special packages</p>
                    <p>We are here to make your experience more affordable</p>
                    <p>We welcome All students of all levels</p>
                    

                    </Column>
                
            </Grid>

            {/* gallery */}
            <hr/>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="gallery">
              <p className=" p-3 w-50 d-flex"  >
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#head'}>Home<UpToTop size={20} /> </p>
<p className="m-1 btn btn-light "  onClick={()=>window.location.href='#contact'} >Previous<SendToBack size={20} /></p>


                </p>
               </div>
                        <Grid className="mt-5 m-4 p-5" data-aos="fade-up" >
                            <Column lg={16} md={8} sm={4}  className="d-flex" >
                            <ImageStoreLocal size={30} /> <h2  >Gallery</h2>
                            </Column> 
                            
                <Column lg={10} md={4} sm={4} >
                <h4>Our Gallery</h4>
                <p>Explore our collection of stunning images showcasing our work.</p>
                
                <img src={imaged} alt="Eamon Dreads" className="mt-0"  style={{ width: "200px", height: "200px", objectFit:"cover", borderRadius:"50%" }} data-aos="flip-right" />
                <DropPhoto className="mt-5" size={170} />
                <div>
                <TouchInteraction size={50} className="btn btn-danger" onClick={()=>navigate("/gallery")} data-aos="flip-right"  />
                    <u>Gallery</u>
                </div>
                    </Column>
                <Column lg={5} md={4} sm={4} >

                        <img src={imageA} alt="Eamon Dreads" className="mt-5"  style={{ width: "350px", height: "350px", objectFit:"cover", borderRadius:"10px" }} />
                    </Column>

            </Grid>
            {/* footer */}

             
        </>
    );
}
export default Home;