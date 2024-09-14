import { Accordion, AccordionItem, Button, TextArea, TextInput } from '@carbon/react';
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    comment: ''
  });
  const [message, setMessage] = useState(''); // To show feedback messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/send-email', {
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
        setMessage('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Network error');
    }
  };

  return (
    <div className='reg-nav'>
      <h1>Get in Touch</h1>

      <Accordion>
        <AccordionItem title="Click For Contact Information">
          <p>Address: Pack View Shopping Center</p>
          <p>Phone number: 703819029</p>
          <p>Email: eamondreads@gmail.com</p>
        </AccordionItem>
      </Accordion>

      <h2 style={{ color: "#ddd", marginLeft: "3%" }}>
        A contact form for clients to reach out with questions or appointment requests
      </h2>

      <h1 style={{ color: "#cc", marginLeft: "3%" }}>
        SUBMIT some of your information for subscription and to know more about us.
      </h1>

      <div className='form-div'>
        <form onSubmit={handleSubmit}>
          <p className='comment'><b><i>Press Order Via Comment:</i></b></p>

          <div className="form-group">
            <label htmlFor="name">Names:</label>
            <TextInput
              id="name"
              className='input'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              
              placeholder="Enter your name"
            />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <TextInput
              id="email"
              className='input'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              
              placeholder="Enter your email"
            />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <TextInput
              id="contact"
              className='input'
              type='tel'
              name='contact'
              value={formData.contact}
              onChange={handleChange}
              
              placeholder="Enter your contact number"
            />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="comment">Comment:</label><br />
            <TextArea
              id="comment"
              className='input'
              name='comment'
              value={formData.comment}
              onChange={handleChange}
              rows="4"
              cols="50"
              
              placeholder="Enter your comment"
            />
          </div>
          <br />

          <div className="button-group">
            <Button style={{marginRight:"20%"}}  color="blue" type="submit">Submit</Button><br />
            <Button color="red" type="button" onClick={() => setFormData({ name: '', email: '', contact: '', comment: '' })}>
              Reset
            </Button>
          </div>
          <br />
        </form>

        {/* Displaying success or error message */}
        {message && <p className={`message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default Contact;
