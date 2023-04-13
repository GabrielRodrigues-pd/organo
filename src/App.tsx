// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Time } from './components/Time';
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from './shared/interface/IColaborador';


function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      cor: '#a6d157',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      cor: '#db6ebf',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      cor: '#ffb405',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      cor: '#ff8a29',
    },
  ]);

  const namesTimes = times.map(time => time.name);

  const [timesChamp, setTimesChamp] = useState<IColaborador[]>([]);

  function createNewChamps(champs: IColaborador) {
    setTimesChamp([...timesChamp, champs]);
  }

  const deleteTime = (id: string) => {
    setTimesChamp(timesChamp.filter(times => times.id !== id));
  };

  const mudarCorTime = (cor:string, id:string) => {
    setTimes(
      times.map(time => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      }),
    );
  };

  const cadastrarTime = (novoTime: { id: any; name: string; cor: string; }) => {
    
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const resolverFavorito = (id:string) => {
    setTimesChamp(
      timesChamp.map(champ => {
        if (champ.id === id) champ.favorito = !champ.favorito;
        return champ;
      }),
    );
  };

  return (
    <div className="App">
      <Banner
        enderecoImg="/img/bg-lol.png"
        textoAlternativo="O Banner principal da página do Organo"
      />
      <Form
        cadastrarTime={cadastrarTime}
        newChamps={champs => createNewChamps(champs)}
        nameTimes={namesTimes}
      />

      {times.map(time => (
        <Time
          key={time.name}
          time={time}
          // corPrimary={time.corPrimary}
          // corSecondary={time.corSecondary}
          timesChamps={timesChamp.filter(
            timeChamp => timeChamp.time === time.name
          )}
          onDelete={deleteTime}
          mudarCor={mudarCorTime}
          onFavoritar={resolverFavorito} valueCor={function (e: React.SyntheticEvent<Element, Event>): void {
            throw new Error('Function not implemented.');
          } }        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
