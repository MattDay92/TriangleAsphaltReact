import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    try {
      const response = await fetch('https://triangle-theta.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message);
    } catch (error) {
      setResponseMessage('An error occurred while sending the email.');
    }
  };

  return (
    <div className='contact-form-div'>
      <h1 className='text-center'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" className='form-control' name="name" value={formData.name} onChange={handleChange} required />
        </label><br />

        <label>
          Email:
          <input type="email" className='form-control' name="email" value={formData.email} onChange={handleChange} required />
        </label><br />

        <label>
          Message:
          <textarea name="message" className='form-control' value={formData.message} onChange={handleChange} required />
        </label><br />

        <button type="submit" className='btn btn-primary'>Send</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default ContactForm;

