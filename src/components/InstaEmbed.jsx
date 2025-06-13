import { useEffect } from "react";

const InstaEmbed = ({ url }) => {
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  return (
    <blockquote 
    className="instagram-media"
    data-instgrm-permalink={url}
    data-instgrm-version="14"
    style={{
      background: "#FFF",
      border: "0",
      borderRadius: "3px",
      boxShadow: "0 0 1px rgba(0, 0, 0, 0.5)",
      margin: "5px",
      maxWidth: "540px",
      minWidth: "326px",
      padding: "0",
      width: "100%",
    }}
    />
  );
};

export default InstaEmbed;
