import { Button, Link } from '@carbon/react';
import React, { useState } from 'react';
import About from './About';
import Faqs from './Faqs';

export default function Blog() {
  const social = [
    { id: 1, name: "facebook", url: "https://www.facebook.com/eamon256", user: "EAMON Dreadlock Solutions Uganda | Kampala" },
    { id: 2, name: "instagram", url: "https://www.instagram.com/eamon_dreads_kampala/", user: "eamomn (@eamon_dreads_kampala)" },
    { id: 3, name: "TikTok", url: "https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", user: "Eamon Dreadlocks Solution" },
    { id: 4, name: "Instagram", url: "https://www.instagram.com/eamon_dreads_kampala/p/C6cnlBqowg3/?locale=es_US", user: "eamon | Unlock your beauty of dreadlocks ..." },
    { id: 5, name: "tiktok", url: "https://www.tiktok.com/@eamondreadssalon/video/7262751627570908421", user: "Eamon dreads salon Kampala (@eamondreadssalon)" },
  ];

  

  return (
    <div className='address'>
    <h1>Do Not Miss Our Sites</h1>
      {social.map((element) => (
        <div key={element.id} className='address-div'>
          <h3>{element.user}</h3>
          <b><em>{element.name}</em></b><br />
          <Link href={element.url} target="_blank" external>
            Get to our {element.name} site
          </Link>
        </div>
      ))}
    </div>
  );
}
