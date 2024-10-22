import { RiLayoutFill } from "react-icons/ri";
import { LiaStarOfDavidSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { IoServerOutline } from "react-icons/io5";
import { BsTerminal } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { SiMicrosoftazure } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <header className="bg-[#00353e] text-white h-20 flex justify-around items-center">
        <h1 className="font-semibold">Perfil Sicoob</h1>
        <div className="flex flex-row gap-3 items-center justify-center">
          <Link className="text-[#7eb61d]" href="/login">
            Fazer login
          </Link>
          <Link
            className="bg-[#7eb61d] text-white p-2 rounded-md font-semibold"
            href="/cadastro"
          >
            Criar conta
          </Link>
        </div>
      </header>
      <main className="bg-white h-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-semibold">Crie seu perfil no Sicoob!</h1>
        <p className="text-center">
          Projeto feito para fins de estudo e integração com o ambiente da
          corretora. <br /> A ideia é sintetizar o que aprendi nesse primeiro
          mês de corretora, como:
        </p>
        <ul className="">
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <RiLayoutFill className="w-7 h-7 mr-2" />
            Conceitos e elementos de UI/UX utilizados no projeto residencial
            digital.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <LiaStarOfDavidSolid className="w-7 h-7 mr-2" />
            Os valores éticos da corretora, e como eles são colocados em prática
            nos minímos detalhes.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <FaReact className="w-7 h-7 mr-2" />
            Habilidades de front-end que já tinha e pude aprimorar, como React,
            Next.js, TailwindCSS, etc.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <TbBrandTypescript className="w-7 h-7 mr-2" />
            Fundamentos do TypeScript, tipagem estática, e suas diferenças em
            relação ao JavaScript.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <IoServerOutline className="w-7 h-7 mr-2" />
            Boas práticas de desenvolvimento de APIs REST com Express e NestJS,
            utilizando MongoDB e PostgreSQL como DB.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <BsTerminal className="w-7 h-7 mr-2" />
            Me aprimorei na criação de ambientes de desenvolvimento usando WSL e
            Docker.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <GoTasklist className="w-7 h-7 mr-2" />
            Como a organização e alinhamento da equipe de desenvolvimento é
            realizado, por meio do Teams e do Azure DevOps.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <SiMicrosoftazure className="w-7 h-7 mr-2" />
            Como fazer deploy de uma aplicação full-stack utilizando a
            infraestrutura do Azure.
          </li>
          <li className="bg-[#0ba091] mb-1 p-2 rounded-md text-white flex flex-row items-center">
            <IoIosGitNetwork className="w-7 h-7 mr-2" />A organização da área de
            Tecnologia da corretora, qual sua gerência e em que equipes se
            divide.
          </li>
        </ul>
      </main>
      <footer className="bg-[#00353e] h-20 text-white flex items-center justify-center flex-col">
        <p>
          Feito por Patrick Girardi, com a ajuda todas as pessoas incríveis que
          conheci na corretora.
        </p>
        <a href="https://github.com/patricksantos-sicoob/">GitHub</a>
      </footer>
    </div>
  );
}
