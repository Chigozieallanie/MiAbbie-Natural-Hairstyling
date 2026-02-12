import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 1. Your Data (Defined here so the error "services is not defined" goes away)
const naturalHairStyling = [
  {
    title: 'Natural twists',
    image: process.env.PUBLIC_URL +'/natural twists.png',
    desc: 'A protective, cute, and comfy style that keeps your natural hair healthy and on point.',
    options: [
      { name: 'Natural twists', price: 'From UGX 30,000', duration: '180–435 minutes' },
    ],
  },
  {
    title: 'Cornrows',
    image: process.env.PUBLIC_URL +'/cornrows.png',
    desc: 'Natural Hair braiding and flat-twist, no hair piece addition.',
    options: [
      { name: 'Cornrows', price: 'From UGX 25,000', duration: '3–4½ hours' },
    ],
  },
  {
    title: 'Braids',
    image: process.env.PUBLIC_URL +'/Braids.png',
    desc: 'Three strands hair braiding. Price includes a hair piece-basic.',
    options: [
      { name: 'Braids', price: 'From UGX 55,000', duration: '4–10 hours' },
    ],
  },
  {
    title: 'Natural styling',
    image: process.env.PUBLIC_URL +'/natural styling.png',
    desc: 'Bespoke natural styles.',
    options: [
      { name: 'Natural styling', price: 'From UGX 40,000', duration: '90–105 minutes' },
    ],
  },
  {
    title: 'Fluffy/ Loose Twists/Braids',
    image: process.env.PUBLIC_URL +'/fluffy.png',
    desc: 'Soft, airy texture. Hair is twisted/braided in a relaxed, undone style. No add-ons, just your natural hair in a beautiful, free-flowing style.',
    options: [
      { name: 'Fluffy/ Loose Twists/Braids', price: 'UGX 45,000', duration: '6 hours' },
    ],
  },
];

const naturalHairCare = [
  {
    title: 'Washing',
    image: process.env.PUBLIC_URL +'/washing.png',
    desc: 'Shampooing, conditioning and drying the hair.',
    options: [
      { name: 'Washing', price: 'From UGX 25,000', duration: '1–2½ hours' },
    ],
  },
  {
    title: 'Unplaiting',
    image: process.env.PUBLIC_URL +'/unplating.png',
    desc: 'Gently taking down your braids, twists, or protective styles, done with care to protect your natural hair and avoid breakage.',
    options: [
      { name: 'Unplaiting', price: 'From UGX 15,000', duration: '75–315 minutes' },
    ],
  },
  {
    title: 'Natural hair care tutorial',
    image: process.env.PUBLIC_URL +'/natuaral hair care.png',
    desc: 'DIY workshops to help you care for your own hair.',
    options: [
      { name: 'Natural hair care tutorial', price: 'UGX 45,000', duration: '' },
    ],
  },
   {
    title: 'Tsavorite Spritz Moisturizer Hair Spray',
    image: process.env.PUBLIC_URL +'/l1.png',
    desc: 'Natural Effective Products For 4C Hair You Can’t Go Wrong With.',
    options: [
      { name: 'Tsavorite Spritz Moisturizer Hair Spray', price: 'From UGX 25,000', duration: '1–2½ hours' },
    ],
  },
   {
    title: 'Hair Product',
    image: process.env.PUBLIC_URL +'/kkkk.png',
    desc: 'Shampooing & conditioning .',
    options: [
      { name: 'Hair Products', price: 'From UGX 25,000', duration: '1–2½ hours' },
    ],
  },
];

const bridalHairServices = [
  {
    title: 'Bridal Hair Package (Bride Only)',
    image: process.env.PUBLIC_URL +'/bridal package.png',
    desc: 'Consultation, optional trial session, and wedding day styling tailored to the bride’s preferences, with or without extensions.',
    options: [
      { name: 'Bridal Hair Package (Bride Only)', price: 'From UGX 500,000', duration: '2 hours' },
    ],
  },
  {
    title: 'Bridal Entourage Styling',
    image: process.env.PUBLIC_URL +'/bidat entro.png',
    desc: 'Coordinated hairstyles for the bridal party, customized to complement the wedding theme. Group bookings may qualify for discounts.',
    options: [
      { name: 'Bridal Entourage Styling', price: 'From UGX 100,000', duration: '1 hour' },
    ],
  },
  {
    title: 'Wedding guest styles',
    image: process.env.PUBLIC_URL +'/wedding g.png',
    desc: 'Elegant hairstyles for wedding attendees, suitable for various hair types and lengths. Pricing depends on the complexity of the chosen style.',
    options: [
      { name: 'Wedding guest styles', price: 'From UGX 45,000', duration: '105–120 minutes' },
    ],
  },
  {
    title: 'Bridal Hair Package (Bride Only)',
    image: process.env.PUBLIC_URL +'/hai3.png',
    desc: 'Consultation, optional trial session, and wedding day styling tailored to the bride’s preferences, with or without extensions.',
    options: [
      { name: 'Bridal Hair Package (Bride Only)', price: 'From UGX 500,000', duration: '2 hours' },
    ],
  },
  {
    title: 'Bridal Hair Package (Bride Only)',
    image: process.env.PUBLIC_URL +'/hai2.png',
    desc: 'Consultation, optional trial session, and wedding day styling tailored to the bride’s preferences, with or without extensions.',
    options: [
      { name: 'Bridal Hair Package (Bride Only)', price: 'From UGX 500,000', duration: '2 hours' },
    ],
  },
];

function ServiceSection({ title, data }) {
  return (
    <section className="service-section">
      <h2 style={{ color: '#fff', margin: '2rem 0 1.5rem 0', fontWeight: 700 }}>{title}</h2>
      <div className="services-grid">
        {data.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-image-wrapper">
              <img src={s.image} alt={s.title} className="service-image dynamic-img" />
            </div>
            <div className="service-body">
              <div className="service-header">
                <h3>{s.title}</h3>
              </div>
              <p style={{ fontSize: '0.98rem', color: '#444', margin: '0.5rem 0 0.7rem 0' }}>{s.desc}</p>
              {s.options && (
                <ul className="service-options">
                  {s.options.map((o) => (
                    <li key={o.name} style={{marginBottom: '0.3rem'}}>
                      <div className="opt-name" style={{fontWeight: 500}}>{o.name}</div>
                      {o.duration && <div className="duration" style={{fontSize: '0.85rem', color: '#888'}}>{o.duration}</div>}
                      <div className="price">{o.price}</div>
                    </li>
                  ))}
                </ul>
              )}
              {/* 2. Change <a> to <Link> and use 'to' instead of 'href' */}
              <Link className="btn-cta" to="/contact">BOOK NOW</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="services-page">
      <ServiceSection title="Natural Hair Styling" data={naturalHairStyling} />
      <ServiceSection title="Natural Hair Care" data={naturalHairCare} />
      <ServiceSection title="Bridal Hair Services" data={bridalHairServices} />
    </div>
  );
}