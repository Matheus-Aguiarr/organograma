import "./Formulario.css";
import CampoTexto from "./CampoTexto";
import ListaSuspensa from "./ListaSuspensa";
import Botao from "./botao";
import { useState } from "react";

const Formulario = ({ aoCriarTime, times, aoColaboradorCadastrado }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form action="" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label={"Nome"}
          placeholder={"Digite seu nome"}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label={"Cargo"}
          placeholder={"Digite seu cargo"}
          obrigatorio={true}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label={"Imagem"}
          placeholder={"Coloque o URL da sua imagem"}
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          itens={times}
          label="Time"
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          aoCriarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar o um novo time</h2>
        <CampoTexto
          obrigatorio
          label={"Nome"}
          placeholder={"Digite o nome do time"}
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          label={"Cor"}
          type="color"
          placeholder={"Digite a cor do time"}
          obrigatorio
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar um novo Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
