import { useState } from "react";
import "./register.css";
import Alert from '@mui/material/Alert';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/rota/register/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password, user}),
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

/*   const handleSub = (e) => {
    e.preventDefault()

    axios.post("/rota/register/registrar"), {
      username,
      password,
      user
    }, 
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
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
  } */

  return (
    <div className="container2">
      <div className="form-box2">
        <div className="header-form2">
          <h1 className="text-primary text-center2">
            <span>X</span>-Form
          </h1>
          <p>Soluções em pesquisa</p>
         <h2>Cadastro de usúario</h2>
        </div>
        <div className="body-form2">
          <form>
            <div className="input-group2">
              <label htmlFor="">Login</label>
              <input
                className="form-control2"
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>

            <div className="input-group2">
              <label htmlFor="">Senha</label>
              <input
                className="form-control2"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group2">
              <label htmlFor="">Admistrador</label>
              <input
                className="form-control2"
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
            </div>
            
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn2 btn-secondary2 btn-block2"
            >
              Cadastrar
            </button>
            <Alert severity="success">
  Here is a gentle confirmation that your action was successful.
</Alert>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
