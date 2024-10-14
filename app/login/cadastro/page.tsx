import Input from "@/app/components/Input";
import LoginModal from "../../components/LoginModal";
import ButtonLogin from "@/app/components/Button";
import { useState } from "react";

export default function Cadastro() {

  return (
    <LoginModal>
      <h1 className="text-xl">Cadastro Perfil Sicoob</h1>
      <form className="flex flex-col gap-2 w-2/5" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Insira seu nome" />
        <Input type="text" placeholder="Crie um nome de usuário" />
        <Input type="email" placeholder="Insira seu email" />
        <Input type="password" placeholder="Crie uma senha" />
        <Input type="password" placeholder="Repita a senha" />

        <ButtonLogin buttonText="Fazer Cadastro" />
      </form>
      <div>
        <p>
          Já possui uma conta? <a href="/login">Clique aqui</a> para fazer login
        </p>
      </div>
    </LoginModal>
  );
}