import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label htmlFor="">{props.label}</label>
      <select
        name=""
        id=""
        required={props.obrigatorio}
        value={props.valor}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
      >
        {props.itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
