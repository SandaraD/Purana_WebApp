import React, { useEffect } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.hero-section');
      let scrollPosition = window.pageYOffset;
      parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="title">Welcome to PURANA</h1>
          <p className="subtitle">Preserving Sri Lanka's Cultural Heritage</p>
          <div className="description">
          <p>
      PURANA is a groundbreaking initiative designed to bridge the gap between heritage preservation and modern technology. Our mission is to create an accessible digital platform that allows both locals and travelers to easily explore and appreciate the rich cultural heritage of Sri Lanka.
    </p>
    <p>
      Through a comprehensive suite of web and mobile applications, PURANA empowers users to learn about archaeological sites through QR codes, offering detailed information about each location. Our platform ensures that Sri Lanka’s archaeological treasures are preserved digitally while being accessible to anyone, anywhere, at any time.
    </p>
    <p>
      By combining technology with cultural preservation, PURANA aims to provide a seamless, engaging experience that brings Sri Lanka's history to life, fostering greater awareness and appreciation for the country’s historical legacy.
    </p>
          </div>
          <div className="buttons">
            <Button size="large" className="button1"><Link to="/login">Log In</Link></Button>
          </div>
        </div>
      </div>
      <div id="features-section" className="features-section">
        <h2 className="features-title">Key Features</h2>
        <div className="features-container">
          <div className="feature">
            <i className="bi bi-geo-alt-fill feature-icon" style={{color: '#219EBC'}}></i>
            <h3>Site Information Management</h3>
            <p>Centralized platform for efficient management of archaeological site information.</p>
          </div>
          <div className="feature">
            <i className="bi bi-globe feature-icon" style={{color: '#219EBC'}}></i>
            <h3>Global Accessibility</h3>
            <p>Promote Sri Lanka's cultural heritage on a global scale through enhanced accessibility.</p>
          </div>
          <div className="feature">
            <i className="bi bi-qr-code feature-icon" style={{color: '#219EBC'}}></i>
            <h3>QR Code Integration</h3>
            <p>Seamless access to site information for visitors via QR code scanning.</p>
          </div>
        </div>
        <div className="features-container" style={{marginTop: '70px'}}>
        <div className="feature">
          <i class="bi bi bi-chat-dots-fill feature-icon" style={{color: '#219EBC'}}></i>
            <h3>Virtual Assistant</h3>
            <p>Your smart companion, ready to answer all your questions about historical sites with a simple ask.</p>
          </div>
          <div className="feature">
            <i className="bi bi-geo-fill feature-icon" style={{color: '#219EBC'}}></i>
            <h3>Nearest Site Finder</h3>
            <p>Find the nearest archaeological site to your current location.</p>
          </div>
          <div className="feature">
            <i className="bi bi-sign-turn-right-fill feature-icon" style={{color: '#219EBC'}}></i>
            <h3>Get Directions</h3>
            <p>Need help finding a site? Get easy-to-follow directions to any of Sri Lanka's archaeological gems.</p>
          </div>
        </div>
      </div>
      
      <div id="mobile-app-section" className="mobile-app-section">
        <h2 className="mobile-app-title" >Mobile Application</h2>
        <div className="mobile-app-container">
          <div className="mobile-app-description" >
            <p style={{fontSize:'1.2em'}}>
              Our mobile application provides easy access to official information for visitors via QR code scanning at archaeological sites. Tourists and local users can effortlessly retrieve detailed information about the site they are visiting, enhancing their overall experience.
            </p>
            <p style={{fontSize:'1.2em'}}>
              Download our app today and explore Sri Lanka's rich cultural heritage like never before!
            </p>
            <div className="mobile-app-buttons">
              <Button size="large" className="button">Download for <AppleFilled /></Button>
              <Button size="large" className="button">Download for <AndroidFilled /></Button>
            </div>
          </div>
          <div className="mobile-app-image">
          </div>
        </div>
      </div>
      <div id="testimonials-section" className="testimonials-section">
        <h2 className="testimonials-title">What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"The PURANA app is amazing! It made our visit to the archaeological sites so much more informative and enjoyable."</p>
            <h4>- Visitor from Russia</h4>
          </div>
          <div className="testimonial">
            <p>"A great initiative to preserve and share Sri Lanka's rich cultural heritage. Highly recommended!"</p>
            <h4>- Local Historian</h4>
          </div>
          <div className="testimonial">
            <p>"The QR code integration is a game changer. Accessing detailed site information has never been easier."</p>
            <h4>- Tour Guide</h4>
          </div>
        </div>
      </div>
      <div id="call-to-action-section" className="call-to-action-section">
  <h2 className="call-to-action-title">Explore Sri Lanka’s Rich History with PURANA</h2>
  <p>Download the PURANA mobile app today to access detailed information about Sri Lanka's archaeological sites. Whether you're a traveler or a local, embark on a journey through history at your fingertips.</p>
</div>

    </div>
  );
}

export default LandingPage;


