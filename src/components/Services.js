import { useEffect } from 'react';
import one from '../assets/pics/a.jpg';
import two from '../assets/pics/b.jpg';
import three from '../assets/pics/c.jpg';
import four from '../assets/pics/d.jpg';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { Education, ServiceDesk } from '@carbon/icons-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Faqs from './Faqs';

// Hoisted out of the component so it isn't rebuilt on every render
const DREADLOCK_SKILLS = [
  { id: 1,  name: 'Sectioning Techniques',       description: 'Creating neat and even parts to start dreadlocks.' },
  { id: 2,  name: 'Backcombing and Twisting',    description: 'Using combs or twisting to form the base of each dread.' },
  { id: 3,  name: 'Palm Rolling',                description: 'Rolling dreads between the palms to help shape and tighten them.' },
  { id: 4,  name: 'Crocheting',                  description: 'Using a crochet hook to tighten and refine dreadlocks.' },
  { id: 5,  name: 'Interlocking',                description: 'Tightening dread roots by pulling them through themselves with a tool.' },
  { id: 6,  name: 'Lock Starting Methods',       description: 'Learning various ways to start dreadlocks: comb coils, two-strand twists, and freeform.' },
  { id: 7,  name: 'Dreadlock Repair',            description: 'Fixing broken or thinning dreadlocks to maintain their health and appearance.' },
  { id: 8,  name: 'Retwisting and Maintenance',  description: 'Regular upkeep to keep dreadlocks tidy, especially at the roots.' },
  { id: 9,  name: 'Dreadlock Removal',           description: 'Safely undoing dreadlocks with minimal hair loss or damage.' },
  { id: 10, name: 'Scalp Care and Hygiene',      description: 'Maintaining a clean, healthy scalp to support healthy dreadlocks.' },
  { id: 11, name: 'Dreadlock Styling',           description: 'Creating stylish dreadlock looks like buns, braids, and mohawks.' },
  { id: 12, name: 'Accessory Application',       description: 'Adding beads, wraps, and other decorations to dreadlocks.' },
  { id: 13, name: 'Coloring and Dyeing Locs',    description: 'Safely applying and maintaining color in dreadlocks.' },
  { id: 14, name: 'Loc Extensions',              description: 'Adding synthetic or human hair to create longer or instant dreads.' },
  { id: 15, name: 'Client Consultation',         description: 'Understanding clients’ hair types and dreadlock goals.' },
  { id: 16, name: 'Hair Texture Knowledge',      description: 'Knowing how different hair textures affect dreadlock formation.' },
  { id: 17, name: 'Time Management',             description: 'Managing time effectively for dreadlock installation and services.' },
  { id: 18, name: 'Sanitation & Tool Hygiene',   description: 'Keeping tools and workspace clean and safe for clients.' },
  { id: 19, name: 'Product Knowledge',           description: 'Choosing appropriate products like shampoos and gels for dreadlocks.' },
  { id: 20, name: 'Business Skills',             description: 'Managing appointments, pricing, marketing, and client service.' },
];

const SERVICES = [
  { id: 1, name: 'Dreadlocks installation', photo: one },
  { id: 2, name: 'Maintenance and repair',  photo: two },
  { id: 3, name: 'Loc extensions',          photo: three },
  { id: 4, name: 'Styling and design',      photo: four },
];

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <>
      <Box id="services" sx={{ p: { xs: 2, md: 5 }, mt: 5 }}>
        {/* ---------------- Customer services ---------------- */}
        <Stack  id="description"  direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
          
          <Typography variant="h2">Customer Services</Typography>
        </Stack>

        <Grid container spacing={3}>
          {SERVICES.map((service) => (
            <Grid
              key={service.id}
              size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
              data-aos="fade-up"
            >
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                }}
              >
                <Typography fontWeight="500" sx={{ mb: 1 }}>
                  {service.name}
                </Typography>
                <Box
                  component="img"
                  src={service.photo}
                  alt={service.name}
                  loading="lazy"
                                      sx={{
                      cursor: "pointer",
                      overflow: "hidden",
                      borderRadius: 3,
                      height: { xs: 200, sm: 300, md: 400 },
                      "& img": { transition: "transform .35s" },
                      "&:hover img": { transform: "scale(1.06)" },
                    }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* ---------------- Student services ---------------- */}
        <Stack  id="description"  direction="row" spacing={1} alignItems="center" sx={{ mt: 8, mb: 3 }}>

          <Typography variant="h3">Student Services</Typography>
        </Stack>

        <Grid container spacing={2}>
          {DREADLOCK_SKILLS.map((skill, index) => (
            <Grid
              key={skill.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              data-aos="flip-right"
              data-aos-delay={(index % 4) * 100}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  height: '100%',
                  borderRadius: 3,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: 4 },
                }}
              >
                <Typography fontWeight="500" sx={{ mb: 0.5 }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Faqs />
    </>
  );
}