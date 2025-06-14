import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Heading from "./components/heading";
import Data from "./components/Data";
import Benefits from "./components/Benefits";

const App =()=>{
  return(
  <div className="App" >
    <Heading />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/gallery" element={<Data />} />
       <Route path="/benefit" element={<Benefits />} />
      
    </Routes>
     <Footer />
   </div> 
   

  )
}
export default App;