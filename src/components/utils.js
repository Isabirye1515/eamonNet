import facebook from "../assets/pics/facebook.svg";
import instagram from "../assets/pics/instagram.svg";
import tiktok from "../assets/pics/tiktok.svg";

export const headingSx = {
  color: "common.white",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.1rem" },
  lineHeight: 1.15,
  mb: 3,
};

export const bodySx = {
  color: "rgba(255,255,255,0.9)",
  fontSize: { xs: "1.2rem", md: "1.25rem" },
  lineHeight: 2.0, 
  fontFamily:"monospace"
  
};

export const COLORS = {
  page: "#f6f1e8",
  paper: "#fffdf9",
  ink: "#29251f",
  muted: "#ee8606",
  brown: "#76563b",
  border: "#e4d8c7",
  accent: "#c6a47e",
};

export const SOCIAL_LINKS = [
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
