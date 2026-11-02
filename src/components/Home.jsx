import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  Activity,
  Blog,
  BringForward,
  CallsIncoming,
  DownToBottom,
  Email,
  ImageStoreLocal,
  Location,
  MessageQueue,
  Phone,
  PhoneIncoming,
  SendToBack,
  TouchInteraction,
  UpToTop,
} from "@carbon/icons-react";

import imageA from "../assets/pics/p.jpg";
import imageB from "../assets/pics/ah.jpg";
import imageC from "../assets/pics/ad.jpg";
import imageD from "../assets/pics/ay.jpg";
import facebook from "../assets/pics/facebook.svg";
import instagram from "../assets/pics/instagram.svg";
import tiktok from "../assets/pics/tiktok.svg";
import Section from "./section";

const PHONE = "+256703819029";
const MAP_URL =
  "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111";

const sections = [
  "head",
  "activity",
  "testimonials",
  "services",
  "gallery",
  "blog",
  "contact",
];

const sectionSx = {
  position: "relative",
  scrollMarginTop: "24px",
  py: { xs: 7, md: 10 },
  px: { xs: 2, sm: 3 },
};

const headingSx = {
  color: "common.white",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.1rem" },
  lineHeight: 1.15,
  mb: 3,
};

const bodySx = {
  color: "rgba(255,255,255,0.9)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.8,
};

function SectionNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const index = sections.indexOf(visible.target.id);
          if (index >= 0) setActiveIndex(index);
        }
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    const nextIndex = Math.max(0, Math.min(index, sections.length - 1));
    document.getElementById(sections[nextIndex])?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveIndex(nextIndex);
  };

  const items = [
    { label: "Home", icon: UpToTop, onClick: () => goTo(0) },
    {
      label: "Previous",
      icon: SendToBack,
      onClick: () => goTo(activeIndex - 1),
      disabled: activeIndex === 0,
    },
    {
      label: "Next",
      icon: BringForward,
      onClick: () => goTo(activeIndex + 1),
      disabled: activeIndex === sections.length - 1,
    },
    {
      label: "Footer",
      icon: DownToBottom,
      onClick: () =>
        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <Box
      component="nav"
      aria-label="Page navigation"
      sx={{
        position: "fixed",
        zIndex: 1300,
        right: { xs: 8, sm: 16 },
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 0.75,
        p: 0.75,
        borderRadius: 4,
        bgcolor: "rgba(255,255,255,0.96)",
        border: "1px solid rgba(20,30,50,0.12)",
        boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
        backdropFilter: "blur(12px)",
      }}
    >
      {items.map(({ label, icon: Icon, onClick, disabled }) => (
        <Tooltip key={label} title={label} placement="left">
          <span>
            <Button
              onClick={onClick}
              disabled={disabled}
              aria-label={label}
              variant={label === "Home" ? "contained" : "text"}
              sx={{
                minWidth: { xs: 42, sm: 52 },
                width: { xs: 42, sm: 52 },
                minHeight: { xs: 44, sm: 52 },
                p: 0.5,
                borderRadius: 2.5,
                display: "flex",
                flexDirection: "column",
                gap: 0.35,
                color: label === "Home" ? "common.white" : "text.primary",
              }}
            >
              <Icon size={20} />
              <Typography component="span" sx={{ fontSize: "0.58rem", lineHeight: 1 }}>
                {label}
              </Typography>
            </Button>
          </span>
        </Tooltip>
      ))}
    </Box>
  );
}

function Photo({ src, alt, sx = {}, ...props }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      {...props}
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: 3,
        ...sx,
      }}
    />
  );
}

function SectionTitle({ children, icon: Icon }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 3 }}>
      {Icon && <Icon size={30} color="#ffffff" />}
      <Typography component="h2" sx={{ ...headingSx, mb: 0 }}>
        {children}
      </Typography>
    </Stack>
  );
}

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 70 });
  }, []);

  return (
    <Box
      sx={{
        overflowX: "clip",
        bgcolor: "#111827",
        "& section": { scrollMarginTop: "20px" },
      }}
    >
      <SectionNav />

      {/* Hero */}
      <Section id="head" minHeight="90vh">
        <Box
          sx={{
            ...sectionSx,
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(110deg, rgba(10,18,34,.94), rgba(20,39,68,.72)), url('./assets/svgs/svg-1.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 5, md: 7 }} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  component="p"
                  sx={{
                    color: "#f4bd83",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Your style, your identity
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    color: "white",
                    fontWeight: 900,
                    letterSpacing: "-0.055em",
                    lineHeight: 0.98,
                    fontSize: { xs: "3.25rem", sm: "4.5rem", md: "5.2rem" },
                  }}
                >
                  EAMON
                  <Box component="span" sx={{ display: "block", color: "#f4bd83" }}>
                    DREADS
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      mt: 1.5,
                      fontSize: { xs: "1.2rem", sm: "1.45rem" },
                      letterSpacing: "0.28em",
                    }}
                  >
                    KAMPALA
                  </Box>
                </Typography>
                <Typography sx={{ ...bodySx, maxWidth: 480, mt: 3 }}>
                  Professional dreadlock styling and hair care, with a focus on
                  creativity, confidence, and healthy hair.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 4, maxWidth: { xs: 300, sm: "none" } }}
                >
                  <Button
                    component="a"
                    href={MAP_URL}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    startIcon={<Location size={20} />}
                    sx={{
                      py: 1.4,
                      px: 2.5,
                      bgcolor: "#f4bd83",
                      color: "#182235",
                      fontWeight: 800,
                      "&:hover": { bgcolor: "#e9a968" },
                    }}
                  >
                    Find our location
                  </Button>
                  <Button
                    component="a"
                    href={`tel:${PHONE}`}
                    variant="outlined"
                    startIcon={<PhoneIncoming size={20} />}
                    sx={{
                      py: 1.4,
                      px: 2.5,
                      color: "white",
                      borderColor: "rgba(255,255,255,.65)",
                      "&:hover": { borderColor: "#f4bd83", bgcolor: "rgba(255,255,255,.06)" },
                    }}
                  >
                    Call us
                  </Button>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 560,
                    height: { xs: 350, sm: 440, md: 520 },
                    mx: "auto",
                  }}
                >
                  <Photo
                    src={imageB}
                    alt="Dreadlock hairstyle"
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: "17%",
                      width: "43%",
                      height: "66%",
                      boxShadow: "0 18px 45px rgba(0,0,0,.35)",
                    }}
                  />
                  <Photo
                    src={imageC}
                    alt="Dreadlock styling"
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "17%",
                      width: "43%",
                      height: "66%",
                      boxShadow: "0 18px 45px rgba(0,0,0,.35)",
                    }}
                  />
                  <Photo
                    src={imageA}
                    alt="Featured Eamon Dreads hairstyle"
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: "4%",
                      transform: "translateX(-50%)",
                      width: "52%",
                      height: "88%",
                      border: "5px solid #f8fafc",
                      boxShadow: "0 22px 55px rgba(0,0,0,.42)",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Section>

      {/* About / activity */}
      <Section id="activity" minHeight="auto">
        <Box sx={{ ...sectionSx, bgcolor: "#182235" }}>
          <Container maxWidth="lg">
            <Grid container spacing={5} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <Photo
                  src={imageB}
                  alt="Eamon Dreads hair care"
                  sx={{ height: { xs: 320, md: 490 }, boxShadow: 5 }}
                  data-aos="fade-right"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
                <SectionTitle icon={Activity}>About Eamon Dreads</SectionTitle>
                <Typography sx={bodySx}>
                  With over 10 years of service, Eamon Dreads Solutions is
                  committed to providing quality hair care and dreadlock styling
                  in Kampala.
                </Typography>
                <Typography sx={{ ...bodySx, mt: 2 }}>
                  Our team puts care, creativity, and attention to detail into
                  every style so you can feel confident in your look.
                </Typography>
                <Button
                  component="a"
                  href={`tel:${PHONE}`}
                  variant="contained"
                  sx={{ mt: 3, bgcolor: "#f4bd83", color: "#182235", fontWeight: 800 }}
                >
                  Contact us today
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" minHeight="auto">
        <Box
          sx={{
            ...sectionSx,
            backgroundImage:
              "linear-gradient(120deg, rgba(23,34,53,.96), rgba(30,53,82,.92)), url('./assets/svgs/svg-3.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <SectionTitle>Care that puts you first</SectionTitle>
                <Typography sx={bodySx}>
                  We want every client to feel comfortable, listened to, and
                  proud of their hairstyle. From your first visit to ongoing
                  maintenance, we work with you to find a look that fits your
                  personality and lifestyle.
                </Typography>
                <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,.2)" }} />
                <Typography sx={{ ...bodySx, fontStyle: "italic" }}>
                  “Your hair is part of your story. Let us help you express it.”
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Photo
                  src={imageC}
                  alt="Dreadlock style created by Eamon Dreads"
                  sx={{ height: { xs: 320, md: 460 }, boxShadow: 5 }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Section>

      {/* Services */}
      <Section id="services" minHeight="auto">
        <Box
          sx={{
            ...sectionSx,
            backgroundImage:
              "linear-gradient(120deg, rgba(13,24,42,.95), rgba(20,49,72,.88)), url('./assets/svgs/svg-4.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="lg">
            <SectionTitle>Our Services</SectionTitle>
            <Typography sx={{ ...bodySx, maxWidth: 720, mb: 4 }}>
              Dreadlock care for different styles, stages, and budgets. Get in
              touch to discuss the service that best suits your hair.
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  title: "Dreadlock styling and maintenance",
                  description:
                    "Support for your dreadlock journey, from styling to routine upkeep and repair.",
                },
                {
                  title: "Personalised hair care",
                  description:
                    "A considered approach to your hair, with care and styling suited to your needs.",
                },
                {
                  title: "Student-friendly options",
                  description:
                    "Ask us about student packages and affordable service options.",
                },
              ].map((service) => (
                <Grid key={service.title} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 3, md: 4 },
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,.07)",
                      border: "1px solid rgba(255,255,255,.13)",
                      transition: "transform .2s, background .2s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        bgcolor: "rgba(255,255,255,.11)",
                      },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{ color: "#f4bd83", fontSize: "1.3rem", fontWeight: 800, mb: 1.5 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography sx={bodySx}>{service.description}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Section>

      {/* Gallery */}
      <Section id="gallery" minHeight="auto">
        <Box sx={{ ...sectionSx, bgcolor: "#182235" }}>
          <Container maxWidth="lg">
            <SectionTitle icon={ImageStoreLocal}>Our Gallery</SectionTitle>
            <Typography sx={{ ...bodySx, maxWidth: 720, mb: 4 }}>
              Explore a selection of our work and discover styles that inspire
              your next look.
            </Typography>
            <Grid container spacing={2}>
              {[imageA, imageC, imageD, imageB].map((src, index) => (
                <Grid key={src} size={{ xs: 6, md: 3 }}>
                  <Box
                    onClick={() => navigate("/gallery")}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") navigate("/gallery");
                    }}
                    sx={{
                      cursor: "pointer",
                      overflow: "hidden",
                      borderRadius: 3,
                      height: { xs: 190, sm: 260, md: 310 },
                      "& img": { transition: "transform .35s" },
                      "&:hover img": { transform: "scale(1.06)" },
                    }}
                  >
                    <Photo src={src} alt={`Eamon Dreads gallery image ${index + 1}`} sx={{ borderRadius: 0 }} />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() => navigate("/gallery")}
              variant="contained"
              endIcon={<TouchInteraction size={20} />}
              sx={{ mt: 3, bgcolor: "#f4bd83", color: "#182235", fontWeight: 800 }}
            >
              View full gallery
            </Button>
          </Container>
        </Box>
      </Section>

      {/* Blog and social media */}
      <Section id="blog" minHeight="auto">
        <Box
          sx={{
            ...sectionSx,
            backgroundImage:
              "linear-gradient(120deg, rgba(34,3,101,.92), rgba(22,20,57,.96)), url('./assets/svgs/svg-6.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <SectionTitle icon={Blog}>Follow our work</SectionTitle>
                <Typography sx={bodySx}>
                  Follow our social pages for hairstyle inspiration, recent
                  work, photos, reels, and updates from Eamon Dreads.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  {[
                    { src: facebook, alt: "Facebook" },
                    { src: instagram, alt: "Instagram" },
                    { src: tiktok, alt: "TikTok" },
                  ].map((social) => (
                    <Box
                      key={social.alt}
                      component="img"
                      src={social.src}
                      alt={social.alt}
                      sx={{ width: 42, height: 42, objectFit: "contain" }}
                    />
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Photo
                  src={imageD}
                  alt="Eamon Dreads hairstyle"
                  sx={{ height: { xs: 260, md: 360 }, boxShadow: 5 }}
                />
              </Grid>
            </Grid>
            <Button onClick={() => navigate("/blog")} variant="outlined" sx={{ mt: 3, color: "white", borderColor: "rgba(255,255,255,.6)" }}>
              Explore blog
            </Button>
          </Container>
        </Box>
      </Section>

      {/* Contact */}
      <Section id="contact" minHeight="auto">
        <Box sx={{ ...sectionSx, bgcolor: "#111827" }}>
          <Container maxWidth="lg">
            <SectionTitle>Get in touch</SectionTitle>
            <Typography sx={{ ...bodySx, maxWidth: 720, mb: 4 }}>
              Ready for a new style or need help maintaining your dreadlocks?
              Contact us or visit us at Pack View Shopping Center.
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ p: 3, height: "100%", borderRadius: 3, bgcolor: "#1d293b" }}>
                  <Phone size={28} color="#f4bd83" />
                  <Typography component="h3" sx={{ color: "white", fontWeight: 800, mt: 2, mb: 1 }}>
                    Call us
                  </Typography>
                  <Typography sx={bodySx}>{PHONE}</Typography>
                  <Button component="a" href={`tel:${PHONE}`} sx={{ mt: 1, color: "#f4bd83" }}>
                    Call now
                  </Button>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ p: 3, height: "100%", borderRadius: 3, bgcolor: "#1d293b" }}>
                  <Location size={28} color="#f4bd83" />
                  <Typography component="h3" sx={{ color: "white", fontWeight: 800, mt: 2, mb: 1 }}>
                    Visit us
                  </Typography>
                  <Typography sx={bodySx}>Pack View Shopping Center, Kampala</Typography>
                  <Button component="a" href={MAP_URL} target="_blank" rel="noreferrer" sx={{ mt: 1, color: "#f4bd83" }}>
                    Open map
                  </Button>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ p: 3, height: "100%", borderRadius: 3, bgcolor: "#1d293b" }}>
                  <MessageQueue size={28} color="#f4bd83" />
                  <Typography component="h3" sx={{ color: "white", fontWeight: 800, mt: 2, mb: 1 }}>
                    Message us
                  </Typography>
                  <Typography sx={bodySx}>
                    Contact us by phone to discuss appointments and services.
                  </Typography>
                  <Button component="a" href={`https://wa.me/${PHONE.replace("+", "")}`} target="_blank" rel="noreferrer" sx={{ mt: 1, color: "#f4bd83" }}>
                    WhatsApp
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Section>


    </Box>
  );
};

export default Home;
