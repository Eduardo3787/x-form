import { useState } from "react";
import "./login.css";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/rota/login/criar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    })
      .then((res) => {
        if (res.ok) {
          console.log("OKAY");
        } else {
          console.error("Error");
        }
      })

      .catch((err) => {
        console.error("Error no login", err);
      });
  };

  return (
    <div className="container1">
      <div className="form-box1">
        <div className="header-form1">
          <h1 className="text-primary text-center1">
            <span>X</span>-Form
          </h1>
          <p>Soluções em pesquisa</p>
         <h2>Login</h2>
        </div>
        <div className="body-form1">
          <form>
            <div className="input-group1">
              <label htmlFor="">Login</label>
              <input
                className="form-control1"
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>

            <div className="input-group1">
              <label htmlFor="">Senha</label>
              <input
                className="form-control1"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="btn1 btn-secondary1 btn-block1"
            >
              Entrar
            </button>
            <div className="message1">
              <Link to="/forgot-password">Esqueci minha senha</Link>
              <Link to="/register">Solicitar acesso</Link>
            </div>
            <Alert severity="success">
  Here is a gentle confirmation that your action was successful.
</Alert>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
