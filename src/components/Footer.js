import React from 'react';

export default function Footer() {
  return (
    //<footer className="site-footer">
      //<div>© {new Date().getFullYear()} MiAbbie Natural Hairstyling</div>
      //<div className="socials">Instagram · Facebook . X . Tiktok</div>
    //</footer>//
    <footer className="site-footer">
  <div>© {new Date().getFullYear()} MiAbbie Natural Hairstyling</div>
  <div className="socials">
    <a href="https://www.instagram.com/miabbie25/" target="_blank" rel="noreferrer">Instagram</a> · 
    <a href="https://www.facebook.com/chigozie.allanie" target="_blank" rel="noreferrer">Facebook</a> · 
    <a href="https://www.tiktok.com/@chigozieallanie" target="_blank" rel="noreferrer">TikTok</a>
  </div>
</footer>
  );
}
