import { Button, Column, Grid, TextArea, TextInput } from '@carbon/react';
import React, { useState } from 'react';
import imageA from "../assets/pics/y.jpg"
import facebook from "../assets/pics/facebook.svg";
import tiktok from "../assets/pics/tiktok.svg";
import instagram from "../assets/pics/instagram.svg";
import { ConnectionSend, Information } from '@carbon/icons-react';

function Contact() {

  const social = [
      { id: 1, name: "facebook", url: "https://www.facebook.com/eamon256", user: "EAMON Dreadlock Solutions Uganda | Kampala", photo: facebook },
      { id: 2, name: "instagram", url: "https://www.instagram.com/eamon_dreads_kampala/", user: "eamomn (@eamon_dreads_kampala)", photo: instagram },
      { id: 3, name: "TikTok", url: "https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", user: "Eamon Dreadlocks Solution", photo: tiktok },
      { id: 4, name: "Instagram", url: "https://www.instagram.com/eamon_dreads_kampala/p/C6cnlBqowg3/?locale=es_US", user: "eamon | Unlock your beauty of dreadlocks ...", photo: instagram },
      { id: 5, name: "tiktok", url: "https://www.tiktok.com/@eamondreadssalon/video/7262751627570908421", user: "Eamon dreads salon Kampala (@eamondreadssalon)", photo: tiktok },
    ];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    comment: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://email-server-rl3u.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          contact: '',
          comment: ''
        });
      } else {
        const errorData = await response.json();
        setMessage(`Error sending email: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Network error');
    }
  };

  return (
<>

<Grid className='mt-5 p-5' >
                                                            <Column lg={16} md={8} sm={4}  className="d-flex m-4 " >
                                  <ConnectionSend size={30} /> <h5  >Contact Us</h5>
                                  </Column> 
<Column lg={8} md={8} sm={4}>
<img src={imageA} width="100%" height={550} alt='imagesa' style={{objectFit:"cover"}}/>
</Column>
  <Column lg={8} md={8} sm={4}>
  
        <form onSubmit={handleSubmit}>

            <TextInput
              id="name"
              className='input m-2'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              
            />
      

            <TextInput
              id="email"
              className='input m-2'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <TextInput
              id="contact"
              className='input m-2'
              type='tel'
              name='contact'
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
            />

            <TextArea
              id="comment"
              className='input m-2'
              name='comment'
              value={formData.comment}
              onChange={handleChange}
              rows="4"
              cols="50"
              placeholder="Enter your comment"
            />
<div className='d-flex' >
            <Button style={{marginRight:"20%"}} color="blue" type="submit">Submit</Button><br />
            <Button className='bg-danger' type="clear" onClick={() => setFormData({ name: '', email: '', contact: '', comment: '' })}>
              Reset
            </Button>
            </div>

        </form>
                {message && <p className={`message ${message.includes('success') ? 'text-success' : 'text-warning'}`}>{message}</p>}
                </Column>


                                                          <Column lg={16} md={8} sm={4}  className="d-flex m-4 " >
                                  <Information size={30} /> <h5  >Media Platforms</h5>
                                  </Column> 
                {social.map((item)=>(
                        <Column lg={3} sm={4} md={4}  key={item.id} >
                          <a className='btn btn-primary m-3' href={item.url} target="_blank" rel="noreferrer" ><img src={item.photo} alt={item.name} width={20} height={20} />{item.user}</a>
                
                        </Column>
                      ))}
                </Grid>
</>
      
  );
}

export default Contact;
