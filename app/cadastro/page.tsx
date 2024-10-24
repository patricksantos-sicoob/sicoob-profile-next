"use client";

import Input from "@/components/Input";
import LoginModal from "../../components/LoginModal";
import ButtonLogin from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = { name, username, email, password };
    console.log(password, "  ", confirmPassword)
    try {
      const response = await fetch("http://localhost:2345/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData),
      }).catch(() => {
        throw new Error("Falha ao conectar ao servidor")
      });

      setResponse(response);
      
      if (password !== confirmPassword) {
        throw new Error("As senhas precisam ser iguais");
      }

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      if (response.ok) {
        router.push("/login");
      }

      const data = await response.json();
      toast.success("Cadastro realizado com sucesso");
      console.log("Usuário cadastrado com sucesso:", data);
    } catch (err) {
      const error = err as Error;
      console.error(error);
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <LoginModal>
      <h1 className="text-xl">Cadastro Perfil Sicoob</h1>
      <form className="flex flex-col gap-2 w-2/5" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Crie um nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Crie uma senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Repita a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <ButtonLogin buttonText="Fazer Cadastro" />
        <Toaster position="bottom-right" />
        <p></p>
      </form>
      <div>
        <p>
          Já possui uma conta? <a href="/login">Clique aqui</a> para fazer login
        </p>
      </div>
    </LoginModal>
  );
}
