import ButtonLogin from "../components/Button";
import Input from "../components/Input";
import LoginModal from "../components/LoginModal";

export default function LoginPage() {
  return (
    <LoginModal>
      <h1 className="text-xl">Login Perfil Sicoob</h1>
      <form className="flex flex-col gap-2 w-2/5">
        <Input type="email" placeholder="Insira seu email" />
        <Input type="password" placeholder="Insira sua senha" />
        <ButtonLogin buttonText="Fazer Login" />
      </form>
      <div>
        <p>
          Ainda não possui uma conta? <a href="/login/cadastro">Clique aqui</a> para se
          cadastrar
        </p>
      </div>
    </LoginModal>
  );
}
