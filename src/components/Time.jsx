import hexToRgba from "hex-to-rgba";
import Colaborador from "./Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: hexToRgba(time.corPrimaria, "0.6"),
        }}
      >
        <input
          value={time.corPrimaria}
          type="color"
          className="input-cor"
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
        />
        <h3 style={{ borderBottom: `4px solid ${time.corPrimaria}` }}>
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
                cor={time.corPrimaria}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
