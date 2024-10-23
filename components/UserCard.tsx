import Image from "next/image";

interface UserCardProps {
  bgColor?: string;
  name: string | undefined;
  username: string | undefined;
  bio: string | undefined;
  description: string | undefined;
  role: string | undefined;
  team: string | undefined;
  image: string | undefined;
  virtue1: string | undefined;
  virtue2: string | undefined;
  virtue3: string | undefined;
}

export default function UserCard(props: UserCardProps) {

  return (
      <div className={`${props.bgColor} h-4/6 w-2/6 rounded-lg flex flex-col justify-center items-center text-center pr-12 pl-12 p-8`}>
        <h3 className="text-3xl font-semibold">{props.name}</h3>
        <p className="mb-6">@{props.username}</p>
        <Image className="rounded-full mb-6" src={props.image} alt="User" width={200} height={200} priority />
        <p className="mb-6">{props.description}</p>
        <p><strong>Equipe:</strong> {props.team}</p>
        <p className="mb-5"><strong>Cargo:</strong> {props.role}</p>
        <p>{props.virtue1}</p>
        <p>{props.virtue2}</p>
        <p>{props.virtue3}</p>
      </div>
  );
}