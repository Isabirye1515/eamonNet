import { Column, Grid } from '@carbon/react';

import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";
import InstaEmbed from './InstaEmbed';

export default function Blog() {
  const insta1 = [{id:"1", url:"https://www.instagram.com/p/DJT1KFMtRus/"}
  , {id:"2", url:"https://www.instagram.com/p/DA8J0XLIZFA/"},
    { id: "3", url: "https://www.instagram.com/reel/DJT1KFMtRus/?utm_source=ig_embed&ig_rid=3fb7c40b-1c54-4541-b5d8-ea4bf1ca79b0" },
    { id: "4", url: "https://www.instagram.com/p/C8JY6iooPaI/" },
    { id: "5", url: "https://www.instagram.com/p/C8bRe2PIV7i/" },
    { id: "6", url: "https://www.instagram.com/p/C9g6RiRooQe/" },
    { id: "7", url: "https://www.instagram.com/p/C9tsl58IsJl/" },
    { id: "8", url: "https://www.instagram.com/p/C9yrzLiIBU5/" },
    { id: "9", url: "https://www.instagram.com/p/C91ppP9o51U/" },
    { id: "10", url: "https://www.instagram.com/p/C_52Ck9oL5Y/" },
    { id: "11", url: "https://www.instagram.com/p/DA0DNiiI-vu/" },
    { id: "12", url: "https://www.instagram.com/p/DA0DaMKIgvB/" }
  ]
  const social = [
    { id: 1, name: "facebook", url: "https://www.facebook.com/eamon256", user: "EAMON Dreadlock Solutions Uganda | Kampala", photo: facebook },
    { id: 2, name: "instagram", url: "https://www.instagram.com/eamon_dreads_kampala/", user: "eamomn (@eamon_dreads_kampala)", photo: instagram },
    { id: 3, name: "TikTok", url: "https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", user: "Eamon Dreadlocks Solution", photo: tiktok },
    { id: 4, name: "Instagram", url: "https://www.instagram.com/eamon_dreads_kampala/p/C6cnlBqowg3/?locale=es_US", user: "eamon | Unlock your beauty of dreadlocks ...", photo: instagram },
    { id: 5, name: "tiktok", url: "https://www.tiktok.com/@eamondreadssalon/video/7262751627570908421", user: "Eamon dreads salon Kampala (@eamondreadssalon)", photo: tiktok },
  ];

  return (
    <Grid className='p-5 text-center'>
      {insta1.map((insta) => (
        <Column key={insta.id} lg={4} md={4} sm={4}   className='m-3'>
        <InstaEmbed key={insta.id} url={insta.url} />
        </Column>
      ))}

      {social.map((item)=>(
        <Column lg={3} sm={4} md={4}  key={item.id} >
          <a className='btn btn-primary m-3' href={item.url} target="_blank" rel="noreferrer" ><img src={item.photo} alt={item.name} width={20} height={20} />{item.user}</a>

        </Column>
      ))}
      


      

      </Grid>
    
    
  );
}
