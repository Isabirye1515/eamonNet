import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";
import InstaEmbed from "./InstaEmbed";
import {bodySx, headingSx, COLORS} from "./utils";

const INSTAGRAM_POSTS = [
  { id: "1", url: "https://www.instagram.com/p/DJT1KFMtRus/" },
  { id: "2", url: "https://www.instagram.com/p/DA8J0XLIZFA/" },
  { id: "3", url: "https://www.instagram.com/reel/DJT1KFMtRus/?utm_source=ig_embed&ig_rid=3fb7c40b-1c54-4541-b5d8-ea4bf1ca79b0" },
  { id: "4", url: "https://www.instagram.com/p/C8JY6iooPaI/" },
  { id: "5", url: "https://www.instagram.com/p/C8bRe2PIV7i/" },
  { id: "6", url: "https://www.instagram.com/p/C9g6RiRooQe/" },
  { id: "7", url: "https://www.instagram.com/p/C9tsl58IsJl/" },
  { id: "8", url: "https://www.instagram.com/p/C9yrzLiIBU5/" },
  { id: "9", url: "https://www.instagram.com/p/C91ppP9o51U/" },
  { id: "10", url: "https://www.instagram.com/p/C_52Ck9oL5Y/" },
  { id: "11", url: "https://www.instagram.com/p/DA0DNiiI-vu/" },
  { id: "12", url: "https://www.instagram.com/p/DA0DaMKIgvB/" },
];

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/eamon256",
    user: "EAMON Dreadlock Solutions Uganda | Kampala",
    photo: facebook,
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/eamon_dreads_kampala/",
    user: "eamon (@eamon_dreads_kampala)",
    photo: instagram,
  },
  {
    id: 3,
    name: "TikTok",
    url: "https://www.tiktok.com/discover/eamon-dreadlock-solution?lang=en",
    user: "Eamon Dreadlocks Solution",
    photo: tiktok,
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/eamon_dreads_kampala/p/C6cnlBqowg3/?locale=es_US",
    user: "Unlock your beauty of dreadlocks",
    photo: instagram,
  },
  {
    id: 5,
    name: "TikTok",
    url: "https://www.tiktok.com/@eamondreadssalon/video/7262751627570908421",
    user: "Eamon Dreads Salon Kampala",
    photo: tiktok,
  },
];



export default function Blog() {
  return (
    <Box
      component="main"
      id="blog"
      sx={{
        minHeight: "100vh",
        bgcolor: COLORS.page,
        color: COLORS.ink,
        py: { xs: 5, md: 9 },
        mt: 5
      }}
    >
      <Container  maxWidth="xl">
        {/* Page introduction */}
        <Box  sx={{ maxWidth: 760, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
        
          <Typography
          id="description"
            component="h1"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.4rem", md: "4rem" },
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
            }}
          >
            Stories, styles & inspiration
          </Typography>
          <Typography sx={{...bodySx, color: COLORS.muted, mt: 2, lineHeight: 1.8 }}>
            Explore dreadlock styles created by Eamon Dreads in Kampala, along
            with updates and inspiration from our salon. These posts offer a
            look at our work and the many ways to wear and care for locs.
          </Typography>
        </Box>

        

        {/* Instagram gallery */}
        <Box component="section" aria-labelledby="instagram-gallery-heading">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mb: 3,
              alignItems: { xs: "flex-start", sm: "flex-end" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                component="h2"
                id="instagram-gallery-heading"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.35rem" },
                  color:"#f9f4f0",
                }}
              >
                From our Instagram
              </Typography>
              <Typography sx={{ ...bodySx, color: COLORS.paper, mt: 0.75, lineHeight: 1.7 }}>
                A closer look at our work and recent posts.
              </Typography>
            </Box>
            <Button
              component="a"
              href="https://www.instagram.com/eamon_dreads_kampala/"
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              sx={{
                borderColor: COLORS.brown,
                color: COLORS.paper,
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 1.5,
                px: 2.5,
                py: 1,
                "&:hover": {
                  borderColor: COLORS.brown,
                  bgcolor: "rgba(118,86,59,0.07)",
                }
              }}
            >
              Follow on Instagram ↗
            </Button>
          </Stack>

          <Grid container spacing={2.5} sx={{ alignItems: "stretch" }}>
            {INSTAGRAM_POSTS.map((post) => (
              <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 1,
                    overflow: "hidden",
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 2,
                    bgcolor: COLORS.paper,
                    transition: "transform .2s ease, box-shadow .2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 28px rgba(65,46,28,.09)",
                    },
                  }}
                >
                  <Box sx={{ width: "100%", minWidth: 0, "& iframe": { maxWidth: "100%" } }}>
                    <InstaEmbed url={post.url} />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Social platforms */}
        <Box component="section" aria-labelledby="social-links-heading" sx={{ mt: { xs: 7, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
          
              component="h2"
              id="social-links-heading"
              sx={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.7rem" },color:"#f9f4f0"
              }}
            >
              Join our community
            </Typography>
            <Typography sx={{ color: COLORS.paper, mt: 1, lineHeight: 1.8 }}>
              Follow us across our social platforms for new styles, inspiration, and salon updates.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {SOCIAL_LINKS.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Eamon Dreads on ${item.name}: ${item.user}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minHeight: 94,
                    height: "100%",
                    p: 2.25,
                    bgcolor: COLORS.paper,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 2,
                    color: COLORS.ink,
                    textDecoration: "none",
                    transition: "transform .2s ease, border-color .2s ease, box-shadow .2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: COLORS.accent,
                      boxShadow: "0 10px 25px rgba(65,46,28,.08)",
                    },
                    "&:focus-visible": {
                      outline: `3px solid ${COLORS.accent}`,
                      outlineOffset: 2,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.photo}
                    alt=""
                    sx={{ width: 38, height: 38, objectFit: "contain", flexShrink: 0 }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 800, color: COLORS.brown, mb: 0.5 }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: COLORS.ink, fontSize: "0.9rem", lineHeight: 1.5, overflowWrap: "anywhere" }}>
                      {item.user}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box                   sx={{
                       mt: { xs: 5, md: 7 },
                      height: "100%",
                      p: { xs: 3, md: 4 },
                      borderRadius: 3,
                      bgcolor:"rgba(255,255,255,.13)" ,
                      border: "1px solid rgba(255,255,255,.13)",
                      transition: "transform .2s, background .2s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        bgcolor: "rgba(255,255,255,.11)",
                      },
                    }}>
          <Typography
            component="h2"
            sx={{
              ...headingSx,
              color: COLORS.paper,
              mb: 1.5,
            }}
          >
            Ideas for healthy, expressive locs
          </Typography>
          <Typography sx={{ ...bodySx, color: COLORS.muted }}>
            Every loc journey is different. When choosing a style, think about
            the length and shape you enjoy, how you usually wear your hair, and
            the level of upkeep that fits your routine. Save examples you like
            and bring them to a consultation so your stylist can discuss the
            details with you.
          </Typography>
          <Typography sx={{ ...bodySx, color: COLORS.muted, lineHeight: 1.8, mt: 2 }}>
            Regular care helps keep locs comfortable and looking their best.
            Follow guidance suited to your hair, and ask a loctician if you
            notice a change that concerns you. Eamon Dreads shares salon work,
            style ideas, and updates from Kampala here and on social media.
            Explore the posts below for inspiration, then contact us to ask
            about installation, styling, maintenance, or repair.
          </Typography>
        </Box>
        </Box>
      </Container>
    </Box>
  );
}
