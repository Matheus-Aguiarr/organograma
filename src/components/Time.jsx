import hexToRgba from "hex-to-rgba";
import Colaborador from "./Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  console.log(time.corPrimaria);
  const corPrimaria = time.corPrimaria || "#000";

  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: hexToRgba(corPrimaria, "0.6"),
        }}
      >
        <input
          value={time.corPrimaria}
          type="color"
          className="input-cor"
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
        />
        <h3 style={{ borderBottom: `4px solid ${corPrimaria}` }}>
          {time.nome}
        </h3>
        <div className="colaboradores" key={colaboradores.id}>
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.id}
                colaborador={colaborador}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                cor={corPrimaria}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
