import AOS from "aos";
import "aos/dist/aos.css";
import imagee from "../assets/pics/ak.jpg";
import imageA from "../assets/pics/p.jpg";
import imaged from "../assets/pics/ay.jpg";
import imageC from "../assets/pics/ad.jpg";
import imageb from "../assets/pics/ah.jpg";
import { Box, Button, Grid, Stack, Typography, Divider, Link, Tooltip } from "@mui/material";
import {
  Activity, Blog, BringForward, CallsIncoming, ConnectionSend,
  DownToBottom, DropPhoto, Email, ImageStoreLocal, Location,
  MessageQueue, Phone, PhoneIncoming, SendToBack, ServiceDesk,
  TouchInteraction, UpToTop, UserFeedback,
} from "@carbon/icons-react";
import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "./section";

// One fixed vertical navigation for the entire page.
const sectionIds = [
  "head",
  "activity",
  "testimonials",
  "blog",
  "contact",
  "services",
  "gallery",
];

const SectionNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          const index = sectionIds.indexOf(visible[0].target.id);
          if (index !== -1) setActiveIndex(index);
        }
      },
      {
        rootMargin: "-15% 0px -15% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    const boundedIndex = Math.max(0, Math.min(index, sectionIds.length - 1));
    document.getElementById(sectionIds[boundedIndex])?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveIndex(boundedIndex);
  };

  const navigation = [
    { label: "Home", icon: UpToTop, action: () => goTo(0) },
    {
      label: "Previous",
      icon: SendToBack,
      action: () => goTo(activeIndex - 1),
      disabled: activeIndex === 0,
    },
    {
      label: "Next",
      icon: BringForward,
      action: () => goTo(activeIndex + 1),
      disabled: activeIndex === sectionIds.length - 1,
    },
    {
      label: "Footer",
      icon: DownToBottom,
      action: () =>
        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <Box
      component="nav"
      aria-label="Page navigation"
      sx={{
        position: "fixed",
        right: { xs: 6, sm: 16 },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.75,
        p: 0.75,
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {navigation.map(({ label, icon: Icon, action, disabled }) => (
        <Tooltip key={label} title={label} placement="left">
          <span>
            <Button
              onClick={action}
              disabled={disabled}
              aria-label={label}
              variant={label === "Home" ? "contained" : "text"}
              sx={{
                minWidth: { xs: 40, sm: 52 },
                width: { xs: 40, sm: 52 },
                height: { xs: 44, sm: 54 },
                p: 0,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                gap: 0.35,
              }}
            >
              <Icon size={21} />
              <Typography component="span" sx={{ fontSize: { xs: "0.5rem", sm: "0.62rem" }, lineHeight: 1 }}>
                {label}
              </Typography>
            </Button>
          </span>
        </Tooltip>
      ))}
    </Box>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const url =
    "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111";

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <>
      {/* ---------------- Header ---------------- */}
      <Section id="head" minHeight="90vh" data-aos="fade-up">
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography variant="h1" color="white" sx={{ p: 1,color:"white", fontWeight: 800, fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.3rem" }, lineHeight: 1.1, overflowWrap: "break-word" }}> 
              EAMON
            </Typography>
            <Typography variant="h1" color="white" sx={{ p: 1,color:"white", fontWeight: 800, fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.3rem" }, lineHeight: 1.1, overflowWrap: "break-word" }}> 
              DREADS
            </Typography>
            <Typography variant="h1"  sx={{ p: 1,color:"white", fontWeight: 800, fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.3rem" }, lineHeight: 1.1, overflowWrap: "break-word" }}> 
              KAMPALA
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              sx={{ mt: 2, alignItems: { xs: "stretch", sm: "flex-start" } }}
            >
            <Button
              component="a"
              href={url}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              startIcon={<Location size={24} />}
              sx={{ m: 1 }}
            >
              PackView
            </Button>
            <Button
              component="a"
              href="tel:+256703819029"
              variant="contained"
              color="warning"
              startIcon={<PhoneIncoming size={24} />}
              sx={{ m: 1, color: "white" }}
            >
              +256703819029
            </Button>
            </Stack>
          </Grid>

<Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 520,
                height: { xs: 300, sm: 390, md: 470 },
                mx: "auto",
                my: { xs: 2, md: 0 },
                overflow: "hidden",
                borderRadius: 3,
              }}
            >
              <Box
                component="img"
                src={imageb}
                alt="Eamon Dreads hairstyle"
                sx={{
                  position: "absolute",
                  left: "2%",
                  top: "18%",
                  width: "42%",
                  height: "65%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              />
              <Box
                component="img"
                src={imageC}
                alt="Eamon Dreads styling"
                sx={{
                  position: "absolute",
                  right: "2%",
                  top: "18%",
                  width: "42%",
                  height: "65%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              />
              <Box
                component="img"
                src={imageA}
                alt="Eamon Dreads featured hairstyle"
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "5%",
                  transform: "translateX(-50%)",
                  width: "52%",
                  height: "85%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: 3,
                  boxShadow: 6,
                  border: "4px solid",
                  borderColor: "background.paper",
                  zIndex: 2,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- Activity ---------------- */}
      <Section id="activity" minHeight="100vh" data-aos="fade-up">
        <Grid container spacing={3} alignItems="center">
          <Grid size={12}>
            <Stack direction="row" spacing={1} alignItems="center">

              <Typography id="description" variant="h2" sx={{color:"white",fontFamily:"sans-serif",}}>Activity</Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5, lg: 5 }}>
            <Box
              component="img"
              src={imageb}
              alt="Eamon Dreads"
              data-aos="fade-right"
              sx={{
                width: "100%",
                maxWidth: 420,
                height: { xs: 320, md: 480, lg: 560 },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid  id="description" size={{ xs: 12, md: 7, lg: 7 }} data-aos="fade-left">
            <Typography variant="h3" fontWeight="bold" sx={{color:"white"}}>We have been in service for over 10 years</Typography>
            <Typography variant="h3" fontWeight="bold" sx={{color:"white"}} >Eamon Dreads Solutions continues to serve you</Typography>
            <Typography variant="h3" sx={{color:"white"}}>We are committed to providing the best hair care services in Kampala</Typography>
            <Typography variant="h3" sx={{color:"white"}}>Our team of experts is dedicated to ensuring your satisfaction</Typography>
            <Button variant="contained" href="#head" sx={{ mt: 2 }}>
              Contact us now
            </Button>
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- Testimonials ---------------- */}
      <Section id="testimonials" minHeight="100vh" data-aos="fade-up">
        <Grid container spacing={3} alignItems="center">
          <Grid size={12}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography id="description" variant="h2">Testimonials</Typography>
            </Stack>
          </Grid>
          <Grid id="description"size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography  variant="h3" fontWeight="bold">We are a team of talented lockticians</Typography>
            <Typography  variant="h3">Our customers rest in comfort while we take care of their hair</Typography>
            <Typography  variant="h3">We pilot the plane that lands in the beauty world and prestige</Typography>
            <Typography  variant="h3">We are the best in Kampala, and we are here to serve you</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={imageC}
              alt="Eamon Dreads"
              sx={{
                width: "100%",
                maxWidth: 400,
                height: { xs: 320, md: 420, lg: 480 },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- Blog ---------------- */}
      <Section id="blog" minHeight="100vh" data-aos="fade-up">
        <Grid container spacing={3} alignItems="center">
          <Grid size={12}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography id="description" variant="h2">Blogs</Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Box
              onClick={() => navigate("/blog")}
              sx={{
                p: 4,
                boxShadow: 2,
                borderRadius: 2,
                cursor: "pointer",
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={facebook} alt="Facebook" sx={{ width: 50, height: 50 }} />
              <Box component="img" src={instagram} alt="Instagram" sx={{ width: 50, height: 50 }} />
              <Box component="img" src={tiktok} alt="TikTok" sx={{ width: 50, height: 50 }} />
            </Box>
          </Grid>
          <Grid  id="description"size={{ xs: 12, md: 8, lg: 8 }}>
            <Typography  variant="h3" fontWeight="bold">EAMON Dreads has been in service for quite some time.</Typography>
            <Typography  variant="h3">We have a collection of infinite images, reels, and videos showcasing our work.</Typography>
            <Typography  variant="h3">View at a glance — plenty of service we can offer you.</Typography>
            <Typography  variant="h3">We have stocked our collection on Facebook, Instagram, and TikTok.</Typography>
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- Contact ---------------- */}
      <Section  id="contact" minHeight="100vh" data-aos="fade-up">
        <Grid container spacing={3} alignItems="center">
          <Grid  id="description" size={12}>
            <Stack direction="row" spacing={1} alignItems="center">
              
              <Typography  variant="h2">Contact</Typography>
            </Stack>
          </Grid>

          <Grid id="description" size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography variant="h3" fontWeight="bold">Contact Us Online</Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Button variant="contained" href="#blog" sx={{ minWidth: 0 }}><Blog size={25} /></Button>
              <Typography variant="h3">We are available on all social media platforms</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Button variant="contained" href="#head" sx={{ minWidth: 0 }}><Phone size={25} /></Button>
              <Typography variant="h3">We are available via WhatsApp</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Button variant="contained" href="#head" sx={{ minWidth: 0 }}><Email size={25} /></Button>
              <Typography variant="h3">We are available via Email</Typography>
            </Stack>
          </Grid>

          <Grid id="description" size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography variant="h3" fontWeight="bold">Contact Us Via Phone</Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Button variant="contained" href="#head" sx={{ minWidth: 0 }}><CallsIncoming size={25} /></Button>
              <Typography variant="h3">We are available via Phone</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Button variant="contained" href="#head" sx={{ minWidth: 0 }}><MessageQueue size={25} /></Button>
              <Typography variant="h3">We are available via SMS</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Button variant="contained" href="#head" sx={{ minWidth: 0 }}><Location size={25} /></Button>
              <Typography variant="h3">Find us at Pack View Shopping Center</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- Services ---------------- */}
      <Section id="services" minHeight="100vh" data-aos="fade-up">
        <Grid container spacing={3} alignItems="center">
          <Grid size={12}>
            <Stack direction="row" spacing={1} alignItems="center">

              <Typography id="description" variant="h2">Services</Typography>
            </Stack>
          </Grid>
          <Grid id="description" size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography variant="h3" fontWeight="bold">Customer Services</Typography>
            <Typography variant="h3">We offer a wide range of services to meet your needs</Typography>
            <Typography variant="h3">From dreadlock installation to maintenance and repair</Typography>
            <Typography variant="h3">We are here to provide you with the best service possible</Typography>
            <Typography variant="h3">We are committed to ensuring your satisfaction</Typography>
          </Grid>
          <Grid id="description" size={{ xs: 12, md: 5, lg: 5 }}>
            <Typography variant="h3" fontWeight="bold">Students Services</Typography>
            <Typography variant="h3">We offer special services for students</Typography>
            <Typography variant="h3">From discounts to special packages</Typography>
            <Typography variant="h3">We are here to make your experience more affordable</Typography>
            <Typography variant="h3">We welcome all students of all levels</Typography>
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- Gallery ---------------- */}
      <Section id="gallery" minHeight="100vh" data-aos="fade-up">
        <Grid container spacing={3} alignItems="center">
          <Grid size={12}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ImageStoreLocal size={30} />
              <Typography id="description" variant="h2">Gallery</Typography>
            </Stack>
          </Grid>

          <Grid id="description" size={{ xs: 12, md: 5, lg: 5 }}>
            <Box
              component="img"
              src={imageA}
              alt="Eamon Dreads"
              sx={{
                width: "100%",
                maxWidth: 400,
                height: { xs: 320, md: 420, lg: 480 },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>

          <Grid id="description" size={{ xs: 12, md: 7, lg: 7 }}>
            <Typography variant="h3" fontWeight="bold">Our Gallery</Typography>
            <Typography variant="h3" >Explore our collection of stunning images showcasing our work.</Typography>

            <Box
              component="img"
              src={imaged}
              alt="Eamon Dreads"
              data-aos="flip-right"
              sx={{ mt: 2, width: 200, height: 200, objectFit: "cover", borderRadius: "50%" }}
            />
            <Box sx={{ mt: 2 }}>
  
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                <Box
                  component="button"
                  onClick={() => navigate("/gallery")}
                  data-aos="flip-right"
                  sx={{ border: 0, background: "transparent", cursor: "pointer", p: 0 }}
                >
                  <TouchInteraction size={50} />
                </Box>
                <Link component="button" onClick={() => navigate("/gallery")} underline="always">
                  Gallery
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <SectionNav />
    </>
  );
};

export default Home;