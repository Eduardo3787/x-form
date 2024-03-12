import "./recuperar-senha.css";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";

const ForgotPassword = () => {
  return (
    <div className="container3">
      <div className="form-box3">
        <div className="header-form3">
          <h1 className="text-primary text-center3">
            <span>X</span>-Form
          </h1>
          <p>Soluções em pesquisa</p>
          <h2>Recuperar senha</h2>
        </div>
        <div className="body-form3">
          <form>
            <div className="input-group3">
              <label htmlFor="">E-mail</label>
              <input className="form-control3" type="email" />
            </div>

            <button type="button" className="btn3 btn-secondary3 btn-block3">
              Entrar
            </button>
            <div className="message3">
              <Link to="/forgot-password">Esqueci minha senha</Link>
              <Link to="/register">Solicitar acesso</Link>
            </div>
            <Alert  severity="success">
              E-mail de recuperação de senha enviado
            </Alert>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
