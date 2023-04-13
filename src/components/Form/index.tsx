import React, { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input } from '../Input';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from '../../shared/interface/IColaborador';


interface FormProps {
  newChamps: (champs: IColaborador) => void
  nameTimes: string[]
  cadastrarTime: (champs: any) => void
}


export const Form = ({ newChamps, nameTimes, cadastrarTime }: FormProps) => {
  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nameTime, setNameTime] = useState('');
  const [corTime, setCorTime] = useState('');
  const [data, setData] = useState('');


  const onSave = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newChamps({
      name,
      cargo,
      imagem,
      time,
      id: uuidv4(),
      favorito: false,
      data
    });
    setName('');
    setCargo('');
    setTime('');
  };

  return (
    <section className="form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <form action="" onSubmit={ onSave}>
        <Input
          required={true}
          label="Name"
          type='text'
          placeholder="Digite seu nome"
          value={name}
          newValue={value => setName(value)}
        />
        <Input
          required={true}
          label="Cargo"
          type='text'
          placeholder="Digite seu n cargo"
          value={cargo}
          newValue={value => setCargo(value)}
        />
        <Input
          label="Imagens"
          type='text'
          placeholder="Digite o endereço da imagem"
          value={imagem}
          newValue={value => setImagem(value)}
        />
        <Input
          label="Data de entrada no time"
          placeholder=""
          type='date'
          value={data}
          newValue={value => setData(value)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={nameTimes}
          value={time}
          newValue={value => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          cadastrarTime({ name: nameTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time!</h2>
        <Input
          required
          label="Name"
          placeholder="Digite o nome do time"
          value={nameTime}
          newValue={value => setNameTime(value)}
        />
        <Input
          required
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          value={corTime}
          newValue={value => setCorTime(value)}
        />
        <Button>Criar time</Button>
      </form>
    </section>
  );
};
