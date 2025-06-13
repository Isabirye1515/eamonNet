import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Blog from "./components/Blog";

const App =()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </>

  )
}
export default App;