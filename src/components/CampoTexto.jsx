import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio }) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{label}</label>
      <input required={obrigatorio} placeholder={placeholder + "..."} />
    </div>
  );
};

export default CampoTexto;
