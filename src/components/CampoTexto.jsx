import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo-texto campo-${props.type}`}>
      <label htmlFor="">{props.label}</label>
      <input
        type={props.type}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder + "..."}
        value={props.valor}
      />
    </div>
  );
};

CampoTexto.defaultProps = {
  type: "text",
};

export default CampoTexto;
