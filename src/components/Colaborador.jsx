import { IoMdCloseCircle } from "react-icons/io";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import "./Colaborador.css";
const Colaborador = ({ colaborador, cor, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }
  const propsFavorito = {
    onClick: favoritar,
    size: 25,
  };
  return (
    <div className="colaborador">
      <IoMdCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img
          src={colaborador.imagem}
          alt={"Imagem do colaborador" + colaborador.nome}
        />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <IoHeartSharp {...propsFavorito} className="heart" />
          ) : (
            <IoHeartOutline {...propsFavorito} className="heart" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
