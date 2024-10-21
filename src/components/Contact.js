import { Button, TextArea, TextInput } from '@carbon/react';
import React, { useState } from 'react';

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
    <div className='reg-nav bg-dark rounded p-2'>
      <center><h2 className="h-3 p-2 text-white">Get in Touch</h2></center>
      <h2 className="text-primary">
        A contact form for clients to reach out with questions or appointment requests
      </h2>

      <h2 className="text-primary">
        SUBMIT some of your information for subscription and to know more about us.
      </h2>

      <div className='form-div'>
        <form onSubmit={handleSubmit}>
          <p className="text-white comment"><b><i>Press Order Via Comment:</i></b></p>

          <div className="form-group">
            <label className="text-white" htmlFor="name">Names:</label>
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
            <label className="text-white" htmlFor="email">Email:</label>
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
            <label className="text-white" htmlFor="contact">Contact:</label>
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
            <label className="text-white" htmlFor="comment">Comment:</label><br />
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
            <Button style={{marginRight:"20%"}} color="blue" type="submit">Submit</Button><br />
            <Button color="red" type="button" onClick={() => setFormData({ name: '', email: '', contact: '', comment: '' })}>
              Reset
            </Button>
          </div>
          <br />
        </form>

        {/* Displaying success or error message */}
        {message && <p className={`message ${message.includes('success') ? 'text-success' : 'text-warning'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default Contact;
