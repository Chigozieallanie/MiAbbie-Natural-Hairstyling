import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

const phoneNumber = "+256758919919"; 

const images = [
  // --- BRAIDS ---
  {src: process.env.PUBLIC_URL + "/braids2.png", 
    title: "Classic Box Braids", 
    category: "Braids" },
  { src:process.env.PUBLIC_URL +"/braids1.jpg", title: "Box Braids", category: "Braids" },
  { src: process.env.PUBLIC_URL +"/braids3.png", title: "Boho Passion Twists", category: "Braids" },
  { src:process.env.PUBLIC_URL + "/brdk1.jpg", title: "Braided Hairstyles For Kids", category: "Braids" },
  { src: process.env.PUBLIC_URL +"/brdk1.png", title: "Overlapping Braids", category: "Braids" },
  
  // --- NATURAL ---
  { src: process.env.PUBLIC_URL +"/n1.png", title: "Defined Natural Curls", category: "Natural" },
  { src: process.env.PUBLIC_URL +"/n2.png", title: "Healthy 4C Twist-Out", category: "Natural" },
  { src: process.env.PUBLIC_URL +"/n3.jpg", title: "Medium-length natural haircut", category: "Natural" },
  { src: process.env.PUBLIC_URL +"/n4.png", title: "Taper curly haircut", category: "Natural" },
  { src: process.env.PUBLIC_URL +"/zooey.png", title: "Bantu knot", category: "Natural" },
  

  // --- UPDO ---
  { src: process.env.PUBLIC_URL +"/u1.png", title: "Elegant High Bun", category: "Updo" },
  { src: process.env.PUBLIC_URL +"/u2.png", title: "Sleek Bridal Updo", category: "Updo" },
  { src: process.env.PUBLIC_URL +"/u3.png", title: "Braided Top Knot", category: "Updo" },
  { src: process.env.PUBLIC_URL +"/u4.png", title: "Crown Twist Updo", category: "Updo" },
  { src: process.env.PUBLIC_URL +"/u5.png", title: "Curly/Coily Updo", category: "Updo" },
 

  // --- COLORING ---
  { src: process.env.PUBLIC_URL + "/c1.png", title: "Copper Tinted Tresses", category: "Coloring" },
  { src: process.env.PUBLIC_URL +"/c2.png", title: "Copper Tresses", category: "Coloring" },
  { src: process.env.PUBLIC_URL +"/c3.png", title: "Burgundy Ombre", category: "Coloring" },
  { src: process.env.PUBLIC_URL +"/c4.png", title: "Burgundy golden", category: "Coloring" },
  { src: process.env.PUBLIC_URL +"/c5.png", title: "Burgundy light purple", category: "Coloring" },
  
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null); 

 
  const categories = useMemo(() => ["All", ...new Set(images.map((img) => img.category))], []);

  const filtered = useMemo(() => 
    filter === "All" ? images : images.filter((img) => img.category === filter),
    [filter]
  );

  const bookStyle = (e, style) => {
    e.stopPropagation(); 
    const msg = `Hello Miabbie! I'm interested in booking the ${style}. Is there availability this week?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Our Hair Portfolio</h2>
        <div className="filter-bar">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="gallery-grid">
        <AnimatePresence mode='popLayout'>
          {filtered.map((img) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={img.title}
              className="gallery-card"
              onClick={() => setSelectedImg(img)}
            >
              <div className="image-wrapper">
                <img src={img.src} alt={img.title} />
                <div className="card-overlay">
                   <span>View Details</span>
                </div>
              </div>
              <div className="card-footer">
                <h4>{img.title}</h4>
                <button className="whatsapp-btn" onClick={(e) => bookStyle(e, img.title)}>
                   WhatsApp Booking
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImg && (
  <div className="lightbox" onClick={() => setSelectedImg(null)}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedImg.src} alt={selectedImg.title} className="lightbox-img" />
      
      <div className="lightbox-info">
        <h3>{selectedImg.title}</h3>
        <p>Natural and protective hairstyling tailored for your crown.</p>
        
        {/* Added the specific class for the gold button */}
        <button className="confirm-btn" onClick={(e) => bookStyle(e, selectedImg.title)}>
          Confirm Booking
        </button>
        
        <button className="close-btn" onClick={() => setSelectedImg(null)}>
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}