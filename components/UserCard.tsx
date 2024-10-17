import Image from "next/image";

interface UserCardProps {
  bgColor?: string;
  name: string;
  username: string;
  bio: string;
  description: string;
  role: string;
  team: string;
  image: string;
  virtues: string;
}

export default function UserCard(props: UserCardProps) {

  return (
      <div className={`${props.bgColor} h-4/6 w-2/6 rounded-lg flex flex-col justify-center items-center text-center pr-12 pl-12`}>
        <h3 className="text-3xl font-semibold">{props.name}</h3>
        <p className="mb-6">@{props.username}</p>
        <Image className="rounded-full mb-6" src={props.image} alt="User" width={200} height={200}></Image>
        <p className="mb-6">{props.description}</p>
        <p><strong>Equipe:</strong> {props.team}</p>
        <p className="mb-5"><strong>Cargo:</strong> {props.role}</p>
        <p>{props.virtues}</p>
      </div>
  );
}