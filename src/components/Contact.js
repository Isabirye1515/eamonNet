import { useState } from "react";
import {
  Alert, Box, Button, Container, Grid, Paper, Stack, TextField, Typography,
} from "@mui/material";
import { Information } from "@carbon/icons-react";

import imageA from "../assets/pics/aj.png";
import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";
import {bodySx, headingSx, COLORS} from "./utils";

const SOCIAL = [
  { id: 1, name: "Facebook", url: "https://www.facebook.com/eamon256", user: "EAMON Dreadlock Solutions Uganda | Kampala", photo: facebook },
  { id: 2, name: "Instagram", url: "https://www.instagram.com/eamon_dreads_kampala/", user: "eamon (@eamon_dreads_kampala)", photo: instagram },
  { id: 3, name: "TikTok", url: "https://www.tiktok.com/discover/eamon-dreadlock-solution?lang=en", user: "Eamon Dreadlocks Solution", photo: tiktok },
  { id: 4, name: "Instagram", url: "https://www.instagram.com/eamon_dreads_kampala/p/C6cnlBqowg3/?locale=es_US", user: "Unlock your beauty of dreadlocks", photo: instagram },
  { id: 5, name: "TikTok", url: "https://www.tiktok.com/@eamondreadssalon/video/7262751627570908421", user: "Eamon Dreads Salon Kampala", photo: tiktok },
];

const EMPTY_FORM = { name: "", email: "", contact: "", comment: "" };

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 1.5,
    bgcolor: "#fffdf9",
    "& fieldset": { borderColor: "#d8cbb8" },
    "&:hover fieldset": { borderColor: "#98724c" },
    "&.Mui-focused fieldset": { borderColor: "#98724c" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#805d3c" },
};

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("https://email-server-rl3u.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully. Thank you for contacting us.");
        setFormData(EMPTY_FORM);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage(`We could not send your message: ${errorData.message || "Please try again shortly."}`);
      }
    } catch (error) {
      console.error("Error sending contact message:", error);
      setMessage("A network error occurred. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const isSuccess = message.toLowerCase().includes("successfully");

  return (
    <Box component="main" id="contact" sx={{ bgcolor: "#f6f1e8", color: "#29251f", minHeight: "100vh", py: { xs: 5, md: 9 }, mt:5 }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 760, mx: "auto", textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography component="h1" sx={{ ...headingSx, lineHeight: 1.1, letterSpacing: "-0.035em" }}>
            Let’s talk about your style
          </Typography>
          <Typography sx={{ ...bodySx, mt: 2, mx: "auto", maxWidth: 620, color: COLORS.paper, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.8 }}>
            Questions about dreadlock styling, maintenance, or appointments? Send us a message or connect with us on social media.
          </Typography>
        </Box>

        

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "stretch" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: "relative", height: { xs: 300, sm: 420, md: "100%" }, minHeight: { md: 560 }, overflow: "hidden", borderRadius: 2, bgcolor: "#ded1bf" }}>
              <Box component="img" src={imageA} alt="Eamon Dreads hairstyle and salon" sx={{ display: "block", width: "100%", height: "100vh", minHeight: { md: 700 }, objectFit: "cover" }} />
              <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 35%, rgba(24,19,14,.82) 100%)" }} />
              <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: { xs: 3, md: 4 } }}>
                <Typography sx={{ color: "#e8c8a2", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.75rem", fontWeight: 700, mb: 1 }}>
                  Personal care, timeless style
                </Typography>
                <Typography component="h2" sx={{ color: "#fffaf3", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: { xs: "1.7rem", md: "2.2rem" }, fontWeight: 700, lineHeight: 1.2 }}>
                  Your hair. Your story.
                </Typography>
                <Typography sx={{ mt: 1.5, color: "rgba(255,250,243,.88)", lineHeight: 1.7 }}>
                  We’re here to help you find a style that feels like you.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={0} sx={{ height: "100%", p: { xs: 2.5, sm: 3.5, md: 4 }, border: "1px solid #e4d8c7", borderRadius: 2, bgcolor: "#fffdf9" }}>
              <Typography component="h2" sx={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, fontSize: { xs: "1.6rem", md: "2rem" }, mb: 1 }}>
                Send us a message
              </Typography>
              <Typography sx={{ color: "#6b6257", lineHeight: 1.7, mb: 3 }}>
                Complete the form below and our team will get back to you.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
                <TextField name="name" label="Full name" value={formData.name} onChange={handleChange} placeholder="Enter your name" autoComplete="name" fullWidth required sx={fieldSx} />
                <TextField name="email" type="email" label="Email address" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" fullWidth required sx={fieldSx} />
                <TextField name="contact" type="tel" label="Phone number (optional)" value={formData.contact} onChange={handleChange} placeholder="+256 ..." autoComplete="tel" fullWidth sx={fieldSx} />
                <TextField name="comment" label="How can we help?" value={formData.comment} onChange={handleChange} placeholder="Tell us about the style or service you have in mind" multiline minRows={4} fullWidth sx={fieldSx} />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 0.5 }}>
                  <Button type="submit" variant="contained" disabled={submitting} sx={{ flex: 1, py: 1.35, bgcolor: "#76563b", color: "#fffaf3", fontWeight: 700, textTransform: "none", borderRadius: 1.5, "&:hover": { bgcolor: "#5f432d" } }}>
                    {submitting ? "Sending message…" : "Send message"}
                  </Button>
                  <Button type="button" variant="outlined" onClick={handleReset} disabled={submitting} sx={{ px: 3, py: 1.35, borderColor: "#c8b49b", color: "#76563b", textTransform: "none", borderRadius: 1.5, "&:hover": { borderColor: "#76563b", bgcolor: "#f6f1e8" } }}>
                    Clear form
                  </Button>
                </Stack>

                {message && <Alert severity={isSuccess ? "success" : "error"} role="status">{message}</Alert>}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 7, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Information size={28} />
            <Typography component="h2" sx={{ mt: 1, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: { xs: "2rem", md: "2.7rem" }, fontWeight: 700 }}>
              Find us online
            </Typography>
            <Typography sx={{ color: "#62594e", mt: 1, lineHeight: 1.7 }}>
              Follow our work, discover new styles, and keep up with salon updates.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {SOCIAL.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box component="a" href={item.url} target="_blank" rel="noreferrer" sx={{
                  display: "flex", alignItems: "center", gap: 2, minHeight: 92, p: 2, height: "100%",
                  textDecoration: "none", color: "inherit", bgcolor: "#fffdf9", border: "1px solid #e4d8c7", borderRadius: 2,
                  transition: "transform .2s, box-shadow .2s, border-color .2s",
                  "&:hover": { transform: "translateY(-3px)", boxShadow: "0 10px 25px rgba(65,46,28,.09)", borderColor: "#b99a76" },
                  "&:focus-visible": { outline: "3px solid #98724c", outlineOffset: 2 },
                }}>
                  <Box component="img" src={item.photo} alt="" sx={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0 }} />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 800, color: "#76563b", mb: 0.4 }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.45, overflowWrap: "anywhere" }}>{item.user}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{
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
          <Typography component="h2" sx={{ ...headingSx, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: { xs: "1.5rem", md: "1.8rem" }, fontWeight: 700, mb: 1.5 }}>
            Tell us what you have in mind
          </Typography>
          <Typography sx={{ ...bodySx, lineHeight: 1.8 }}>
            Use the form to ask about starting dreadlocks, refreshing an
            existing style, repairs, or extensions. Include a short description
            of your hair and the look you want so our team can understand your
            request. You can also call us or send a message through our social
            pages if that is more convenient.
          </Typography>
          <Typography sx={{ ...bodySx, lineHeight: 1.8, mt: 2 }}>
            Eamon Dreads Solutions is at Pack View Shopping Center in Kampala.
            If you plan to visit, contact us first to discuss the service you
            need and any questions about your appointment. We look forward to
            hearing from you and helping you find a style that feels right.
          </Typography>
        </Box>
        </Box>
      </Container>
    </Box>
  );
}
