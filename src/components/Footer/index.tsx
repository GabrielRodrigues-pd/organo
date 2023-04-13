import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes">
        <img src="/img/fb.png" alt="" />
        <img src="/img/ig.png" alt="" />
        <img src="/img/tw.png" alt="" />
      </div>
      <div className="logo">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="dev">
        <p>Desenvolvido por Gabriel</p>
      </div>
    </footer>
  );
};
