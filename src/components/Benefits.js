import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import imagea from "../assets/pics/expertize.jpg";
import imageb from "../assets/pics/personel.jpg";
import imagec from "../assets/pics/quality.jpg";
import imaged from "../assets/pics/sanitation.jpg";
import imagee from "../assets/pics/community.jpg";
import imagef from "../assets/pics/customisation.jpg";
import imageg from "../assets/pics/repair.jpg";
import imageh from "../assets/pics/education.jpg";
import imagei from "../assets/pics/relax.jpg";
import imagej from "../assets/pics/satifaction.jpg";

const BENEFITS = [
  {
    id: 1,
    name: "Expertise",
    value:
      "Our locticians have extensive experience and training in dreadlocks care and maintenance.",
    image: imagea,
  },
  {
    id: 2,
    name: "Personalized service",
    value:
      "We take the time to understand your unique needs and preferences.",
    image: imageb,
  },
  {
    id: 3,
    name: "Quality products",
    value:
      "We use only the best products to support healthy, thriving dreadlocks.",
    image: imagec,
  },
  {
    id: 4,
    name: "Sanitation and hygiene",
    value:
      "Our salon maintains high standards of cleanliness and sanitation.",
    image: imaged,
  },
  {
    id: 5,
    name: "Community",
    value:
      "Join our community of dreadlocks enthusiasts and connect with like-minded individuals.",
    image: imagee,
  },
  {
    id: 6,
    name: "Customization",
    value:
      "We offer customized services to suit your lifestyle, hair type, and personal style.",
    image: imagef,
  },
  {
    id: 7,
    name: "Maintenance and repair",
    value:
      "We provide guidance on proper maintenance and repair techniques.",
    image: imageg,
  },
  {
    id: 8,
    name: "Education",
    value:
      "Our locticians are happy to share knowledge and tips on dreadlocks care.",
    image: imageh,
  },
  {
    id: 9,
    name: "Relaxing atmosphere",
    value:
      "Our salon offers a welcoming, relaxing environment.",
    image: imagei,
  },
  {
    id: 10,
    name: "Satisfaction guarantee",
    value:
      "We strive to make every customer experience a satisfying one.",
    image: imagej,
  },
];

const palette = {
  page: "#f7f3ec",
  paper: "#fffdf9",
  ink: "#29251f",
  muted: "#6e655a",
  accent: "#9a704b",
  border: "#e8ded1",
};

export default function Benefits() {
  return (
    <Box
    id="activity"
      component="section"
      sx={{
        backgroundColor: palette.page,
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1.25} alignItems="center">
            <Typography
            id="description"
              variant="overline"
              sx={{
                color: palette.accent,
                letterSpacing: "0.2em",
                fontWeight: 700,
              }}
            >
              Why choose us
            </Typography>
          </Stack>

          <Typography
          id="description"
            component="h2"
            sx={{
              color: palette.ink,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
              lineHeight: 1.15,
              fontWeight: 500,
            }}
          >
            Our Offers
          </Typography>

          <Box
            sx={{
              width: 58,
              height: 2,
              bgcolor: palette.accent,
              mt: 1,
            }}
          />

          <Typography
          id="description"
            sx={{
              
              maxWidth: 650,
              lineHeight: 1.8,
              mt: 1 ,
            }}
          >
            Thoughtful care, skilled hands, and a welcoming space for every
            stage of your dreadlocks journey.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
          {BENEFITS.map((benefit) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={benefit.id}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  border: `1px solid ${palette.border}`,
                  borderRadius: 2,
                  bgcolor: palette.paper,
                  transition: "transform 220ms ease, box-shadow 220ms ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 14px 32px rgba(48, 37, 25, 0.10)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "4 / 4.5",
                    bgcolor: "#e9dfd2",
                  }}
                >
                  <Box
                    component="img"
                    src={benefit.image}
                    alt={benefit.name}
                    loading="lazy"
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 350ms ease",
                      "&:hover": { transform: "scale(1.04)" },
                    }}
                  />
                </Box>

                <Box sx={{ p: { xs: 2.25, md: 2.5 } }}>
                  <Typography
                    component="h3"
                    sx={{
                      color: palette.ink,
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: { xs: "1.2rem", md: "1.3rem" },
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {benefit.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: palette.muted,
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {benefit.value}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
