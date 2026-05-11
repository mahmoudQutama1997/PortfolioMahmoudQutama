import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((response) => {
        setContact(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, []);
      

  if (!contact) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <section className="contact-section">
        <h1 className="section-title">
  <FaPhoneAlt className="title-icon" />
  Contact Me
</h1>
        <p className="contact-text">{contact.description}</p>
        <div className="contact-info">

  <div className="info-card">
    <strong>Email:</strong>
    <p>{contact.email}</p>
  </div>

  <div className="info-card">
    <strong>Phone:</strong>
    <p>{contact.phone}</p>
  </div>

  <div className="info-card">
    <strong>Location:</strong>
    <p>{contact.location}</p>
  </div>

</div>
      </section>
    </div>
  );
}

export default Contact; 