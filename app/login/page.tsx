"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonLogin from "../../components/Button";
import Input from "../../components/Input";
import LoginModal from "../../components/LoginModal";
import { toast, Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2345/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      setResponse(response);

      if (!response.ok) {
        console.error("Login inválido");
        throw new Error("Login inválido");
      }

      const data = await response.json();
      console.log("Login realizado com sucesso:", data);

      localStorage.setItem("token", data.access_token);

      router.push("/home");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const notifyServerError = () => {
    if (error instanceof Error) {
      toast.error("Houve um erro no servidor");
    }
    if (response && !response.ok) {
      toast.error("Login ou senha incorretos");
    }
    if (response) {
      toast.success("Login realizado com sucesso");
    }
  };

  return (
    <LoginModal>
      <h1 className="text-xl">Login Perfil Sicoob</h1>
      <form className="flex flex-col gap-2 w-2/5" onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Insira seu nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonLogin buttonText="Fazer Login" onClick={notifyServerError} />
        <Toaster />
      </form>
      <div>
        <p>
          Ainda não possui uma conta? <a href="/login/cadastro">Clique aqui</a>{" "}
          para se cadastrar
        </p>
      </div>
    </LoginModal>
  );
}
