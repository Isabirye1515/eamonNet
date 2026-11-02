import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Location, PhoneIncoming } from "@carbon/icons-react";

import facebook from "../assets/pics/facebook.svg";
import instagram from "../assets/pics/instagram.svg";
import tiktok from "../assets/pics/tiktok.svg";

const MAP_URL =
  "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/eamon256",
    icon: facebook,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/eamon_dreads_kampala/",
    icon: instagram,
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en",
    icon: tiktok,
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Social media", href: "/blog" },
  { label: "Offers", href: "/offers" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        width: "100%",
        bgcolor: "#080d17",
        color: "rgba(255,255,255,0.78)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              component="h2"
              sx={{
                color: "#fff",
                fontSize: "1.45rem",
                fontWeight: 900,
                letterSpacing: "0.04em",
                mb: 1.5,
              }}
            >
              EAMON <Box component="span" sx={{ color: "#f4bd83" }}>DREADS</Box>
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 340 }}>
              Professional dreadlock styling and hair care in Kampala. Your style,
              your identity.
            </Typography>
          </Grid>

          {/* Quick links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography component="h3" sx={{ color: "#fff", fontWeight: 800, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  color="inherit"
                  sx={{
                    width: "fit-content",
                    fontSize: "0.95rem",
                    transition: "color .2s",
                    "&:hover": { color: "#f4bd83" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact and socials */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography component="h3" sx={{ color: "#fff", fontWeight: 800, mb: 2 }}>
              Connect With Us
            </Typography>
            <Stack spacing={1.5} alignItems="flex-start">
              <Button
                component="a"
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                startIcon={<Location size={20} />}
                sx={{
                  justifyContent: "flex-start",
                  color: "#f4bd83",
                  textTransform: "none",
                  textAlign: "left",
                  px: 0,
                  "&:hover": { bgcolor: "transparent", color: "#fff" },
                }}
              >
                Pack View Shopping Center, Kampala
              </Button>
              <Button
                component="a"
                href="tel:+256703819029"
                startIcon={<PhoneIncoming size={20} />}
                sx={{
                  justifyContent: "flex-start",
                  color: "inherit",
                  textTransform: "none",
                  px: 0,
                  "&:hover": { bgcolor: "transparent", color: "#f4bd83" },
                }}
              >
                +256703819029
              </Button>
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ mt: 2.5 }}>
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Eamon Dreads on ${social.label}`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    bgcolor: "rgba(255,255,255,0.08)",
                    transition: "transform .2s, background .2s",
                    "&:hover": {
                      bgcolor: "rgba(244,189,131,0.18)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={social.icon}
                    alt=""
                    sx={{ width: 25, height: 25, objectFit: "contain" }}
                  />
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            pt: 2.5,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            © {new Date().getFullYear()} Eamon Dreads Kampala. All rights reserved.
          </Typography>
          <Link
            href="#head"
            underline="hover"
            sx={{ color: "#f4bd83", fontSize: "0.9rem" }}
          >
            Back to top ↑
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
