import "./Formulario.css";
import CampoTexto from "./CampoTexto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label={"Nome"} placeholder={"Digite seu nome"} />
        <CampoTexto label={"Cargo"} placeholder={"Digite seu cargo"} />
        <CampoTexto
          label={"Imagem"}
          placeholder={"Coloque o URL da sua imagem"}
        />
      </form>
    </section>
  );
};

export default Formulario;
