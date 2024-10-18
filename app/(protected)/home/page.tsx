"use client";

import UserCard from "../../../components/UserCard";
import { useState, useEffect } from "react";

type User = {
  sub: string;
  username: string;
  name: string;
  description: string;
  bio: string;
  role: string;
  team: string;
  image: string;
  virtue1: string;
  virtue2: string;
  virtue3: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:2345/users", {});

        if (!response.ok) {
          throw new Error("Erro ao carregar informações dos usuários");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        const erro= err as Error
        setError(erro.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-5 pt-8 pb-8">
      {users.map((user) => (
        <UserCard
          key={user.sub}
          bgColor="bg-[#15b7a5]"
          name={user.name}
          username={user.username}
          bio={user.bio}
          description={user.description}
          role={user.role}
          team={user.team}
          image={user.image}
          virtue1={user.virtue1}
          virtue2={user.virtue2}
          virtue3={user.virtue3}
        />
      ))}
    </div>
  );
}
