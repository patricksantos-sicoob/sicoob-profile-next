"use client";

import UserCard from "@/components/UserCard";
import UserSettings from "@/components/UserSettings";
import { useState, useEffect } from "react";
import router from "next/router";

export default function UserPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState({
    sub: "",
    username: "",
    name: "",
    description: "",
    bio: "",
    role: "",
    team: "",
    image: "",
    virtue1: "",
    virtue2: "",
    virtue3: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:2345/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar informações do usuário");
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error(error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const handleInputChange = (field: string, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:2345/users/${userInfo.sub}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            username: userInfo.username,
            name: userInfo.name,
            description: userInfo.description,
            role: userInfo.role,
            team: userInfo.team,
            image: userInfo.image,
            virtue1: userInfo.virtue1,
            virtue2: userInfo.virtue2,
            virtue3: userInfo.virtue3,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar perfil");
      }

      const updatedUserData = await response.json();
      alert("Informações salvas com sucesso!");
      setUserInfo(updatedUserData);
    } catch (err) {
      const erro= err as Error
      setError(erro.message);
    }
  };

  return (
    <div className="flex h-screen flex-row bg-[#15b7a5] justify-center items-center gap-2">
      <UserSettings onInputChange={handleInputChange} onSave={handleSave} />
      <UserCard
        bgColor="bg-gray-100"
        name={userInfo.name}
        username={userInfo.username}
        bio={userInfo.bio}
        description={userInfo.description}
        role={userInfo.role}
        team={userInfo.team}
        image={userInfo.image}
        virtue1={userInfo.virtue1}
        virtue2={userInfo.virtue2}
        virtue3={userInfo.virtue3}
      />
    </div>
  );
}
