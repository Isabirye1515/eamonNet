import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { Location, PhoneIncoming } from "@carbon/icons-react";
import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";
import { useNavigate } from "react-router-dom";

const NAV_LINKS_HOME = [
  { label: "Hero Section", target: "#herosection" },
  { label: "Testimonials", target: "#testimonials" },
  { label: "Contact Us", target: "#contact" },
  { label: "Get a Quote", target: "#blog" },
  { label: "Service", target: "#service" },
  { label: "Benefits", target: "#benefits" },
];

const NAV_LINKS_MAIN = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Social Media", to: "/blog" },
  { label: "Gallery", to: "/gallery" },
  { label: "Offers", to: "/benefit" },
];

export default function Footer() {
  const navigate = useNavigate();

  const url =
    "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111";

  const icons = [
    { id: 1, url: "https://www.facebook.com/eamon256", photo: facebook, name: "Find More On Facebook" },
    { id: 2, url: "https://www.instagram.com/eamon_dreads_kampala/", photo: instagram, name: "Find More On Instagram" },
    { id: 3, url: "https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", photo: tiktok, name: "Find More On Tiktok" },
  ];

  return (
    <Box sx={{ width: "100%", p: 3, bgcolor: "grey.900", color: "common.white" }}>
      <Grid container spacing={3} className="text-center">

        {/* ---------- Connect / social ---------- */}
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <Typography fontWeight="bold" gutterBottom>
            Connect With Us
          </Typography>

          <Stack spacing={1} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={<Location size={30} />}
              component="a"
              href={url}
              target="_blank"
              rel="noreferrer"
              sx={{ mt: 2 }}
            >
              Pack View Shopping Center
            </Button>

            <Button
              variant="contained"
              color="warning"
              startIcon={<PhoneIncoming size={30} />}
              component="a"
              href="tel:+256741099245"
              sx={{ color: "common.white" }}
            >
              +256703819029
            </Button>
          </Stack>

          <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
            {icons.map((icon) => (
              <Stack key={icon.id} direction="row" spacing={1} alignItems="center">
                <Link href={icon.url} target="_blank" rel="noreferrer" underline="none">
                  <Box component="img" src={icon.photo} alt={icon.name} sx={{ width: 40, height: 40 }} />
                </Link>
                <Typography variant="body2" fontWeight="light">
                  {icon.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>

      </Grid>
    </Box>
  );
}