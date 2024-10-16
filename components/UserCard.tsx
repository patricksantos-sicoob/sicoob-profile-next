import Image from "next/image";

export default function UserCard() {

  return (
      <div className="bg-[#fff] h-4/6 w-2/6 rounded-lg flex flex-col justify-around items-center text-center p-2">
        <h3 className="text-3xl font-semibold">Nome da Pessoa</h3>
        <Image src="/avatar.png" alt="User" width={200} height={200}></Image>
        <p>@nomedeusuario</p>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.</p>
        <p>Cargo da Pessoa</p>L
        <p>#Vocação</p>
        <ul>
          <li>Lealdade</li>
          <li>Aprendizado Contínuo</li>
          <li>Empreendedorismo</li>
        </ul>
      </div>
  );
}