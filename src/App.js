import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <section className="welcome">
                  <div className="welcome-content">
                    <h2>Joy looks good on healthy hair <span role="img" aria-label="heart eyes">😍</span></h2>
                    <p>Natural twists that protect, grow, and glow because your crown deserves gentle care and confident style <span role="img" aria-label="flower">🌸</span></p>
                    <ul className="welcome-list">
                      <li>✔️ Low manipulation</li>
                      <li>✔️ Moisture retention</li>
                      <li>✔️ Timeless natural beauty</li>
                    </ul>
                    <div className="welcome-book">
                      <span>✨ Book now with Miabbie Natural Hair Care</span>
                      <br />
                      <span>📍 Kampala | Mobile & ready to travel</span>
                      <br />
                      <a className="welcome-link" href="https://vev.co/miabbie-kampala" target="_blank" rel="noopener noreferrer">🔗 Book via vev.co/miabbie-kampala</a>
                    </div>
                  </div>
                </section>
                <section className="hero">
  {/* The Moving Background Layer */}
  <div className="hero-moving-gallery">
    <div className="gallery-track">
      <img src={process.env.PUBLIC_URL + "/swwa5.png"} alt="Twist 1" />
      <img src={process.env.PUBLIC_URL +"/swwa6.png"} alt="Twist 2" />
      <img src={process.env.PUBLIC_URL +"/swwa4.png"} alt="Twist 3" />
      <img src={process.env.PUBLIC_URL +"/swwa7.png"} alt="Twist 4" />
      <img src={process.env.PUBLIC_URL +"/cornrows.png"} alt="Twist 5" />
      <img src={process.env.PUBLIC_URL +"/swb.jpg"} alt="Twist 6" />
      <img src={process.env.PUBLIC_URL +"/cf.png"} alt="Twist 1" />
      <img src={process.env.PUBLIC_URL +"/fc.png"} alt="Twist 2" />
      <img src={process.env.PUBLIC_URL +"/brdk1.png"} alt="Twist 3" />
      <img src={process.env.PUBLIC_URL +"/fluffy.png"} alt="Twist 4" />
      <img src={process.env.PUBLIC_URL +"/c1.png"} alt="Twist 5" />
      <img src={process.env.PUBLIC_URL +"/c2.png"} alt="Twist 6" />
      <img src={process.env.PUBLIC_URL +"/c3.png"} alt="Twist 1" />
      <img src={process.env.PUBLIC_URL +"/c4.png"} alt="Twist 2" />
      <img src={process.env.PUBLIC_URL +"/c5.png"} alt="Twist 3" />
      <img src={process.env.PUBLIC_URL +"/swwa5.png"} alt="Twist 4" />
      <img src={process.env.PUBLIC_URL +"/swwa6.png"} alt="Twist 5" />
      <img src={process.env.PUBLIC_URL +"/swwa7.png"} alt="Twist 6" />
    </div>
  </div>

  <div className="hero-inner">
    <div className="hero-content">
      <h1 className="hero-title">MiAbbie Natural hairstyling</h1>
      <p className="hero-sub">Crown maintenance, redefined.</p>
    </div>
  </div>
</section>
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
