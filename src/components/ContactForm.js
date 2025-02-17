import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: [],
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked
          ? [...prevFormData[name], value] // Add value if checked
          : prevFormData[name].filter((item) => item !== value), // Remove if unchecked
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting:", formData);

    try {
      const response = await fetch('https://triangle-theta.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error:", error);
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
          Inquiry Type:
          <div>
            <input type="checkbox" id="option1" name="inquiryType" onChange={handleChange} value="Request Quote" checked={formData.inquiryType.includes("Request Quote")} />
            <label htmlFor="option1">Request Quote</label>
          </div>

          <div>
            <input type="checkbox" id="option2" name="inquiryType" onChange={handleChange} value="Employment" checked={formData.inquiryType.includes("Employment")} />
            <label htmlFor="option2">Employment</label>
          </div>

          <div>
            <input type="checkbox" id="option3" name="inquiryType" onChange={handleChange} value="Other" checked={formData.inquiryType.includes("Other")} />
            <label htmlFor="option3">Other</label>
          </div>
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

