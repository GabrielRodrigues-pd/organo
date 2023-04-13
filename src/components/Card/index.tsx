import React from 'react';
import './Card.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface CardProps {
  timeCard: {name: string,
    cargo: string,
    id: string,
    imagem: string, favorito:boolean}
  corDeFundo: string
  onDelete: (id: string) => void
  onFavoritar: (id: string) => void
  data: string
}

export const Card = ({ timeCard, corDeFundo, onDelete, onFavoritar, data }:CardProps) => {
  const alt = `Imagem de ${timeCard.name}`;
  function favoritar() {
    onFavoritar(timeCard.id);
  }

  const propsFavorito = {
    size: 24,
    onClick: favoritar,
  };

  return (
    <div className="Card">
      <AiFillCloseCircle
        className="deletar"
        onClick={() => onDelete(timeCard.id)}
        size={26}
      />
      <div
        className="cabecalho"
        style={{
          backgroundColor: corDeFundo,
        }}
      >
        <img src={timeCard.imagem} alt={alt} />
      </div>
      <div className="rodape">
        <h4>{timeCard.name}</h4>
        <h5>{timeCard.cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
        <div className="favoritar">
          {timeCard.favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};
