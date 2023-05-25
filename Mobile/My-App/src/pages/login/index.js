import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import * as C from "./style";

const login = () => {
    const { login } = useState();
    const navigate = useNavigate();

    const  [email, setEmail] = useState("");
    const  [senha, setSenha] = useState("");
    const  [error, setError] = useState("");

    const verificaLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }
        
        const res = login(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home")
    };

return (
    <C.Container>
      <C.Label>Login</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={verificaLogin} />
      </C.Content>
    </C.Container>
  );
};

export default login;