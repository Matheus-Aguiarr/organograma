import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="social-media">
        <img src="/images/fb.png" alt="" />
        <img src="/images/tw.png" alt="" />
        <img src="/images/ig.png" alt="" />
      </div>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="text">
        <p>Desenvolvido Por Matheus com a Alura</p>
      </div>
    </footer>
  );
};

export default Rodape;
