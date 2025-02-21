import Banner from "./components/Banner.jsx";
import Formulario from "./components/Formulario.jsx";
import { useState } from "react";
import Time from "./components/Time.jsx";
import Rodape from "./components/Rodape.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      corPrimaria: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      corPrimaria: "#82cffa",
    },
    {
      id: uuidv4(),
      nome: "Data-Science",
      corPrimaria: "#a6d157",
    },
    {
      id: uuidv4(),
      nome: "DevOps",
      corPrimaria: "#e06b69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      corPrimaria: "#db6ebf",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      corPrimaria: "#ffba05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
    },
  ]);

  const nomesTimes = times.map((time) => time.nome);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4();
    console.log(colaborador.id);
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    console.log("deletando colaborador", id);
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.corPrimaria = cor;
        }
        return time;
      })
    );
  }

  return (
    <div>
      <Banner />
      <Formulario
        times={nomesTimes}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => {
        return (
          <Time
            mudarCor={mudarCorDoTime}
            nome={time.nome}
            key={time.id}
            time={time}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
