import { Column, Grid, Link } from '@carbon/react';

import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";

export default function Blog() {
  const social = [
    { id: 1, name: "facebook", url: "https://www.facebook.com/eamon256", user: "EAMON Dreadlock Solutions Uganda | Kampala", photo: facebook },
    { id: 2, name: "instagram", url: "https://www.instagram.com/eamon_dreads_kampala/", user: "eamomn (@eamon_dreads_kampala)", photo: instagram },
    { id: 3, name: "TikTok", url: "https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", user: "Eamon Dreadlocks Solution", photo: tiktok },
    { id: 4, name: "Instagram", url: "https://www.instagram.com/eamon_dreads_kampala/p/C6cnlBqowg3/?locale=es_US", user: "eamon | Unlock your beauty of dreadlocks ...", photo: instagram },
    { id: 5, name: "tiktok", url: "https://www.tiktok.com/@eamondreadssalon/video/7262751627570908421", user: "Eamon dreads salon Kampala (@eamondreadssalon)", photo: tiktok },
  ];

  return (
    <div  class="bg-dark rounded p-5" >
    
      <h2 class="text-white h2 p-2 " >Visit Our Social Media</h2>
      <Grid>
      {social.map((element) => (
        <Column   lg={4} sm={4}  md={4}   key={element.id} className='address-div p-2'>
          <h3>{element.user}</h3>
          <b><em>{element.name}</em></b><br />
          <Link href={element.url} target="_blank" external>
            Get to our {element.name} site
            <img src={element.photo} height={20} width={20} alt='logo' />
          </Link>
        </Column>
      ))}
    </Grid>
    </div>
  );
}
