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
      }).catch(() => {
        throw new Error("Falha ao conectar ao servidor")
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Login ou senha incorretos");
        }
        throw new Error("Erro ao fazer login");
      }

      setResponse(response);

      const data = await response.json();
      console.log("Login realizado com sucesso:", data);

      localStorage.setItem("token", data.access_token);

      router.push("/home");

      toast.success("login efetuado com sucesso.");
    } catch (err) {
      const error = err as Error;
      console.error(error);
      setError(error);
      toast.error(error.message);
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
        <ButtonLogin buttonText="Fazer Login" />
        <Toaster position="bottom-right" />
      </form>
      <div>
        <p>
          Ainda não possui uma conta? <a href="/cadastro">Clique aqui</a> para
          se cadastrar
        </p>
      </div>
    </LoginModal>
  );
}
