import React from 'react';

const ContactPage = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2 style={{ color: 'white' }}>Discutons</h2>
        <p style={{ color: 'white' }}>Partagez-nous votre opinion</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>Contactez-nous</span>
        </div>
        <ul>
          <li>
            <i className="far fa-envelope"></i>
            <p>email: edenecommerce2.0@gmail.com</p>
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>
            <p>Tel: +7987 757 55 96 / +242 06 877 6011</p>
          </li>
          <li>
            <i className="fal fa-clock"></i>
            <p>Heures de travail: 24h/24 - 7j/7</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ContactPage;