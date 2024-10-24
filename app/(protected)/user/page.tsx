"use client";

import UserCard from "@/components/UserCard";
import UserSettings from "@/components/UserSettings";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

type User = {
  id: string;
  username?: string;
  name?: string;
  description?: string;
  bio?: string;
  role?: string;
  team?: string;
  image?: string;
  virtue1?: string;
  virtue2?: string;
  virtue3?: string;
};

export default function UserPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<User | null>();

  console.log(userInfo);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:2345/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).catch(() => {
          throw new Error("Falha ao conectar ao servidor");
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar informações do usuário");
        }

        const data = await response.json();
        console.log(data);
        setUserInfo(data);
      } catch (err) {
        const error = err as Error;
        console.error(error);
        toast.error(error.message);
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
      const response = await fetch(`http://localhost:2345/users`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: userInfo!.id,
          username: userInfo!.username,
          name: userInfo!.name,
          description: userInfo!.description,
          role: userInfo!.role,
          team: userInfo!.team,
          image: userInfo!.image,
          virtue1: userInfo!.virtue1,
          virtue2: userInfo!.virtue2,
          virtue3: userInfo!.virtue3,
        }),
      }).catch(() => {
        throw new Error("Falha ao conectar ao servidor");
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar perfil");
      }

      const updatedUserData = await response.json();
      toast.success("Informações salvas com sucesso!");
      setUserInfo(updatedUserData);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
      toast.error(error.message);
    }
  };

  const handleDeletion = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:2345/users/${userInfo!.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).catch(() => {
        throw new Error("Falha ao conectar ao servidor");
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar perfil");
      }

      localStorage.removeItem("token");

      router.push("/login");
    } catch (err) {
      const error = err as Error;
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex h-screen flex-row bg-[#15b7a5] justify-center items-center gap-2">
      <UserSettings
        onInputChange={handleInputChange}
        onSave={handleSave}
        onDeletion={handleDeletion}
      />
      <UserCard
        bgColor="bg-gray-200"
        name={userInfo!.name}
        username={userInfo!.username}
        bio={userInfo!.bio}
        description={userInfo!.description}
        role={userInfo!.role}
        team={userInfo!.team}
        image={userInfo!.image}
        virtue1={userInfo!.virtue1}
        virtue2={userInfo!.virtue2}
        virtue3={userInfo!.virtue3}
      />
      <Toaster position="bottom-right" />
    </div>
  );
}
