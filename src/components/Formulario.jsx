import "./Formulario.css";
import CampoTexto from "./CampoTexto";
import ListaSuspensa from "./ListaSuspensa";
import Botao from "./botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = () => {
    console.log("Card salvo!");
  };

  return (
    <section className="formulario">
      <form
        action=""
        onSubmit={(event) => event.preventDefault() || aoSalvar()}
      >
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label={"Nome"}
          placeholder={"Digite seu nome"}
        />
        <CampoTexto
          label={"Cargo"}
          placeholder={"Digite seu cargo"}
          obrigatorio={true}
        />
        <CampoTexto
          label={"Imagem"}
          placeholder={"Coloque o URL da sua imagem"}
        />
        <ListaSuspensa itens={times} label="Time" obrigatorio={true} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
