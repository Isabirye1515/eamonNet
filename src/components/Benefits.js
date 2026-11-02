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
    name: "Professional Expertise",
    value:
      "Our experienced locticians combine skill, training, and attention to detail to keep your dreadlocks healthy, neat, and beautiful.",
    image: imagea,
  },
  {
    id: 2,
    name: "Personalized Care",
    value:
      "Every head of hair is unique. We tailor our services to your preferences, hair type, and individual dreadlocks journey.",
    image: imageb,
  },
  {
    id: 3,
    name: "Quality Products",
    value:
      "We carefully select quality products that support healthy hair, well-maintained locs, and lasting results.",
    image: imagec,
  },
  {
    id: 4,
    name: "Cleanliness & Hygiene",
    value:
      "Your comfort and safety matter. We maintain high standards of cleanliness throughout our salon and services.",
    image: imaged,
  },
  {
    id: 5,
    name: "A Welcoming Community",
    value:
      "Be part of a community that celebrates individuality, shares knowledge, and appreciates the beauty of dreadlocks.",
    image: imagee,
  },
  {
    id: 6,
    name: "Styles Made for You",
    value:
      "From everyday looks to distinctive styles, we create dreadlocks services that complement your personality and lifestyle.",
    image: imagef,
  },
  {
    id: 7,
    name: "Maintenance & Repair",
    value:
      "Keep your locs looking their best with retwisting, repairs, maintenance advice, and practical care guidance.",
    image: imageg,
  },
  {
    id: 8,
    name: "Knowledge & Education",
    value:
      "Learn how to care for your dreadlocks between visits with helpful advice and techniques from our experienced team.",
    image: imageh,
  },
  {
    id: 9,
    name: "A Relaxing Experience",
    value:
      "Take a break from your busy day in a warm, welcoming environment designed to make every visit enjoyable.",
    image: imagei,
  },
  {
    id: 10,
    name: "Your Satisfaction Matters",
    value:
      "We listen to your needs, value your feedback, and work hard to ensure you leave feeling confident and satisfied.",
    image: imagej,
  },
];

const palette = {
  page: "#f8f5f0",
  paper: "#fffefa",
  ink: "#30271f",
  muted: "#71675d",
  accent: "#98704d",
  border: "#e9dfd3",
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
      <Container maxWidth="lg">
        {/* Section heading */}
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Typography
            variant="overline"
            sx={{
              color: palette.accent,
              fontWeight: 700,
              letterSpacing: "0.22em",
              fontSize: "0.75rem",
            }}
          >
            THE DIFFERENCE IS IN THE CARE
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: palette.ink,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: {
                xs: "2.1rem",
                sm: "2.7rem",
                md: "3.2rem",
              },
              fontWeight: 500,
              lineHeight: 1.15,
              maxWidth: 700,
            }}
          >
            More Than Just Dreadlocks
          </Typography>

          <Box
            sx={{
              width: 52,
              height: 3,
              borderRadius: 5,
              bgcolor: palette.accent,
            }}
          />

          <Typography
            sx={{
              color: palette.muted,
              maxWidth: 580,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.9,
            }}
          >
            Discover thoughtful care, professional expertise, and a
            welcoming experience designed around you and your dreadlocks.
          </Typography>
        </Stack>

        {/* Benefits grid: two cards per row on desktop */}
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {BENEFITS.map((benefit, index) => (
            <Grid item xs={12} md={6} key={benefit.id}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  height: "100%",
                  minWidth: 0,
                  overflow: "hidden",
                  bgcolor: palette.paper,
                  border: `1px solid ${palette.border}`,
                  borderRadius: 2.5,
                  transition:
                    "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#d5c0aa",
                    boxShadow: "0 12px 30px rgba(48, 37, 25, 0.08)",
                  },
                }}
              >
                {/* Smaller, consistent image */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: 155,
                      md: 145,
                      lg: 180,
                    },
                    minWidth: {
                      xs: "100%",
                      sm: 155,
                      md: 145,
                      lg: 180,
                    },
                    height: {
                      xs: 210,
                      sm: "auto",
                    },
                    minHeight: {
                      sm: 220,
                      md: 240,
                    },
                    overflow: "hidden",
                    bgcolor: "#e9dfd2",
                  }}
                >
                  <Box
                    component="img"
                    src={benefit.image}
                    alt={benefit.name}
                    loading={index < 2 ? "eager" : "lazy"}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      minHeight: {
                        sm: 220,
                        md: 240,
                      },
                      objectFit: "cover",
                      transition: "transform 400ms ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>

                {/* Improved typography and spacing */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1,
                    minWidth: 0,
                    p: { xs: 2.5, sm: 2, md: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      color: palette.accent,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      mb: 1,
                    }}
                  >
                    {String(benefit.id).padStart(2, "0")}
                  </Typography>

                  <Typography
                    component="h3"
                    sx={{
                      color: palette.ink,
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: {
                        xs: "1.35rem",
                        sm: "1.15rem",
                        md: "1.2rem",
                        lg: "1.4rem",
                      },
                      fontWeight: 500,
                      lineHeight: 1.35,
                      mb: 1.25,
                    }}
                  >
                    {benefit.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: palette.muted,
                      fontSize: {
                        xs: "0.93rem",
                        sm: "0.84rem",
                        md: "0.86rem",
                        lg: "0.92rem",
                      },
                      lineHeight: 1.85,
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
