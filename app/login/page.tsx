import Image from "next/image";

export default function Login() {
  return (
    <div className="flex h-screen flex-col bg-[#fff]">
      <div className="flex items-center justify-center h-full bg-[#d7fffa] p-30">
        <div className="bg-[#15b7a5] h-3/6 w-1/6 rounded-l-lg text-white flex flex-col justify-around items-center">
          <div className="text-center">
            <h1 className="text-xl">Seja bem-vindo!</h1>
            <p>Faça seu login para continuar</p>
          </div>
          <Image
            className="rounded-full"
            src="/avatar.png"
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
          <h1 className="text-xl">Login Perfil Sicoob</h1>
          <form className="flex flex-col gap-2">
            <input className="border rounded border-[#003741] p-[4px]" type="email" placeholder="Email" />
            <input className="border rounded border-[#003741] p-[4px]" type="password" placeholder="Senha" />
            <button className="bg-[#7eb61d] p-2 rounded-md text-white" type="submit">Entrar</button>
          </form>
          <div>
            <p>Esqueceu sua senha? <a href="">Clique para redefinir</a></p>
            <p>Primeira vez por aqui? <a href="">Crie sua conta!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}