import { Button, Column, Grid, TextArea, TextInput } from '@carbon/react';
import React, { useState } from 'react';
import imageA from "../assets/pics/y.jpg"

function Contact() {
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
                </Grid>
</>
      
  );
}

export default Contact;
