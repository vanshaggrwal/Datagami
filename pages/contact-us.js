import { useState } from 'react';
import Head from 'next/head';


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <>
      <Head>
        <title>Contact Us - Datagami</title>
      </Head>
      <div className="contactWrapper">
        <h1 className="heading">Keep In Touch With Us.</h1>
        <div className="grid">
         
          <div className="infoSection">
            <p className="description">
              Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. IST,
              Monday through Friday.
            </p>

            <div className="infoBlock">
              <h3 className="labelOrange">Registered Office</h3>
              <p>Head office: 309, Crescent Business Square, Khairani Rd, Saki Naka, Mumbai, Maharashtra</p>
            </div>

            <div className="infoBlock">
              <h3 className="labelBlue">Work Office</h3>
              <p>Same as registered office.</p>
            </div>

            <div className="infoBlock">
              <h3 className="labelPurple">Contact</h3>
              <p>+91 97029 34397 / +91 77381 70621</p>
            </div>

            <div className="infoBlock">
              <h3 className="labelTeal">Email</h3>
              <p>info@datagami.in</p>
            </div>
          </div>

          
          <form className="formSection" onSubmit={handleSubmit}>
            <h2 className="formHeading">I Want To Hear From You</h2>
            <div className="styles.formGroup">
              <input
                type="text"
                name="name"
                placeholder="Name..."
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email..."
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message..."
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="sendButton">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
