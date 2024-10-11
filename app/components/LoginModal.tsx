import Image from "next/image";

interface LoginModalProps {
  actionText: string;
}

export default function LoginModal(props: LoginModalProps) {
  return (
    <div className="flex h-screen flex-col bg-[#fff]">
      <div className="flex items-center justify-center h-full bg-[#d7fffa] p-30">
        <div className="bg-[#15b7a5] h-3/6 w-1/6 rounded-l-lg text-white flex flex-col justify-around items-center">
          <div className="text-center">
            <h1 className="text-xl">Seja bem-vindo(a)!</h1>
            <p>Faça seu {props.actionText} para continuar</p>
          </div>
          <Image
            className=""
            src="/escolha.webp"
            alt="sicoob logo"
            width={200}
            height={200}
          ></Image>
          <Image
            className=""
            src="/logo-sicoob.webp"
            alt="sicoob logo"
            width={200}
            height={200}
          ></Image>
        </div>
        <div className="bg-[#fff] h-3/6 w-2/6 rounded-r-lg flex flex-col justify-around items-center text-center">
          <h1 className="text-xl capitalize">
            {props.actionText} Perfil Sicoob
          </h1>
          <form className="flex flex-col gap-2 w-2/5">
            <input
              className="border rounded border-[#003741] p-[4px]"
              type="email"
              placeholder="Email"
            />
            <input
              className="border rounded border-[#003741] p-[4px]"
              type="password"
              placeholder="Senha"
            />
            {props.actionText === "cadastro" && (
              <input
                className="border rounded border-[#003741] p-[4px]"
                type="password"
                placeholder="Confirme sua senha"
              />
            )}
            <button
              className="bg-[#7eb61d] p-2 rounded-md text-white capitalize"
              type="submit"
            >
              Realizar {props.actionText}
            </button>
          </form>
          <div>
            {props.actionText === "login" && (
              <p>
                Esqueceu sua senha? <a href="">Clique para redefinir</a>
              </p>
            )}
            {props.actionText === "login" && (
              <p>
                Primeira vez por aqui? <a href="/login/cadastro">Crie sua conta!</a>
              </p>
            )}
            {props.actionText === "cadastro" && (
              <p>
                Já possui uma conta? <a href="/login">Clique para entrar!</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
