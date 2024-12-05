import React from 'react';
import "../styles/Home.css";
const HomePage = () => {
  return (
    <div className="utama">
      <div className="kotak1"></div>
      <div className="kotak2"></div>
      <img className="logo" src="src/assets/v13_29.png" alt="Logo Navbar" />
      <div className="menu">
        <button className="ikon"><a href="/"></a></button>
      </div>
      <div className="cari">
        <div className="ikon"></div>
      </div>
      <img className="gambar-utama" src="src/assets/v13_32.png" alt="Gambar Utama" />
      <div className="nano-diane">Nano Diane</div>
      <div className="wanita">WANITA</div>
      <div className="jelajahi-digital">Jelajahi Peluncuran Digital Eksklusif</div>
      <div className="garis"></div>
      <div className="avatar">
        <div className="placeholder-avatar"></div>
      </div>
    </div>
  );
};

export default HomePage;