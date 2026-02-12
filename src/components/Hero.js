import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Bold. Beautiful. You.</h1>
          <p className="hero-sub">Signature styles for modern women — color, braids, natural care.</p>
          <a className="btn-cta" href="#contact">Book an Appointment</a>
          <div className="trust">
            <span className="stars">★★★★★</span>
            <small>Trusted by hundreds of delighted clients</small>
          </div>
        </div>

        <div className="hero-right">
          <div className="testimonials">
            <blockquote>“Best stylist in town — my hair looks better!”</blockquote>
            <cite>— Be a regular client</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
