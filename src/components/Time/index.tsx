import React from 'react';
import { Card } from '../Card';
import './Time.css';
import hexToRgba from 'hex-to-rgba';
import { IColaborador } from '../../shared/interface/IColaborador';

interface TimeProps {
  time: {id:string, cor:string, name:string}
  timesChamps: IColaborador[]
  onDelete: (id: string) => void
  mudarCor: (cor: string, id: string) => void
  onFavoritar: (id: string) => void
  valueCor: (e: React.SyntheticEvent) => void
}

export const Time = ({
  time,
  timesChamps,
  onDelete,
  mudarCor,
  onFavoritar,
}:TimeProps) => {
  const valueCor = (e:React.ChangeEvent<HTMLInputElement>) => {
    const cor = e.target.value;
    mudarCor(cor, time.id);
  };


  return (
    timesChamps.length > 0 ? (
      <section
        className="time"
        style={{
          backgroundColor: hexToRgba(time.cor, '0.2'),
          backgroundImage: 'url(/img/fundo.png',
        }}
      >
        <input
          value={time.cor}
          type="color"
          className="inputCor"
          onChange={valueCor}
        />
        <h3
          style={{
            borderColor: time.cor,
          }}
        >
          {time.name}
        </h3>
        <div className="cardChamp">
          {timesChamps.map(timeChamp => {
            return (
              <Card
                corDeFundo={time.cor}
                key={timeChamp.id}
                timeCard={timeChamp}
                onDelete={onDelete}
                onFavoritar={onFavoritar}
                data={timeChamp.data}
              />
            );
          })}
        </div>
      </section>
    ) : <></>
  );
};
