"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

type UserSettingsProps ={
  onInputChange: (field: string, value: string) => void;
  onSave: () => void;
}

export default function UserSettings({ onInputChange, onSave }: UserSettingsProps) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [image, setImage] = useState("");
  const [virtue1, setVirtue1] = useState("");
  const [virtue2, setVirtue2] = useState("");
  const [virtue3, setVirtue3] = useState("");

  const handleChange = (field: string, value: string) => {
    if (field === "username") setUsername(value);
    if (field === "name") setName(value);
    if (field === "description") setDescription(value);
    if (field === "role") setRole(value);
    if (field === "team") setTeam(value);
    if (field === "image") setImage(value);
    if (field === "virtue1") setVirtue1(value);
    if (field === "virtue2") setVirtue2(value);
    if (field === "virtue3") setVirtue3(value);
    onInputChange(field, value);
  };

  return (
    <div className="bg-white w-1/6 h-4/6 rounded-lg top-2/3 flex flex-col items-center justify-center text-center p-8">
      <h1 className="font-semibold pm-2 mb-6">Personalizar Perfil</h1>
      <form
        className="flex flex-col w-3/6 items-center gap-2 justify-center mb-4"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <Input
          placeholder="Role"
          type="text"
          value={role}
          onChange={(e) => handleChange("role", e.target.value)}
        />
        <Input
          placeholder="Team"
          type="text"
          value={team}
          onChange={(e) => handleChange("team", e.target.value)}
        />
        <Input
          placeholder="Link da imagem"
          type="text"
          value={image}
          onChange={(e) => handleChange("image", e.target.value)}
        />
        <Input
          placeholder="Qualidade 1"
          type="text"
          value={virtue1}
          onChange={(e) => handleChange("virtue1", e.target.value)}
        />
        <Input
          placeholder="Qualidade 2"
          type="text"
          value={virtue2}
          onChange={(e) => handleChange("virtue2", e.target.value)}
        />
        <Input
          placeholder="Qualidade 3"
          type="text"
          value={virtue3}
          onChange={(e) => handleChange("virtue3", e.target.value)}
        />
        <Button buttonText="Salvar" bgColor="bg-[#15b7a5]" onClick={onSave} />
      </form>
    </div>
  );
}
