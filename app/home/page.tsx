import UserCard from "../../components/UserCard";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center items-center bg-[#15b7a5]">
      <h1>Home</h1>
      <UserCard />
    </div>
  );
}
