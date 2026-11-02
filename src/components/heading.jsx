import { useState } from "react";
import { 
  Menu as MenuIcon, 
} from "@carbon/icons-react";
import { 
  Column, 
  Grid, 
  Header, 
  HeaderGlobalAction, 
  HeaderGlobalBar, 
  HeaderName 
} from "@carbon/react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageUrls = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Activity", url: "/offers" },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Blogs", url: "/blog" },
  { id: 6, name: "Services", url: "/services" },
  { id: 7, name: "Gallery", url: "/gallery" },
];

const Heading = () => {
  const navigate = useNavigate();

  // State to manage the MUI Menu dropdown anchor
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (url) => {
    handleMenuClose();
    if (url.startsWith("#")) {
      // Scroll to section if it's an anchor link
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate via React Router
      navigate(url);
    }
  };

  return (
    <Grid>
      <Column sm={4} md={8} lg={16}>
        <Header  id="heading" aria-label="EAMON DREADS Header ">
          <HeaderName  prefix="EAMON DREADS" />
          <HeaderGlobalBar>

            {/* Mobile / Dropdown Menu Trigger */}
            <HeaderGlobalAction onClick={handleMenuClick} aria-label="Menu">
              <MenuIcon size={20} className="m-5" />
            </HeaderGlobalAction>
          </HeaderGlobalBar>

          {/* MUI Dropdown Menu for PageUrls */}
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            {PageUrls.map((item) => (
              <MenuItem key={item.id} onClick={() => handleNavigate(item.url)}>
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Header>
      </Column>
    </Grid>
  );
};

export default Heading;