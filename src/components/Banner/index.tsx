import React from 'react';
import './Banner.css';

interface BannerProps {
  enderecoImg: string
  textoAlternativo?: string
}

export const Banner = ({enderecoImg, textoAlternativo}:BannerProps) => {
  return (
    <header className="banner">
      <img src={enderecoImg} alt={textoAlternativo} />
    </header>
  );
};
