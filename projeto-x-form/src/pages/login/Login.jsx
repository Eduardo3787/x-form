import { useState } from "react";
import "./login.css";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { Container, Content, Title, Subtitle } from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ infoSuccessfully, setInfoSuccessfully ] = useState(false);

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

        setInfoSuccessfully(true)
      })

      .catch((err) => {
        console.error("Error no login", err);
      });
  };

  return (
    <Container>
      <Content>
        <Title>X <h3>-Form</h3></Title>
        <Subtitle>Soluções em pesquisa</Subtitle>

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
          </form>

          <div className="message1">
            <Link to="/forgot-password">Esqueci minha senha</Link>
            <Link to="/register">Solicitar acesso</Link>
          </div>
          
          { infoSuccessfully && 
            <Alert severity="success">
              Here is a gentle confirmation that your action was successful.
            </Alert>
          }
        </div>
      </Content>
    </Container>
  );
};

export default Login;
