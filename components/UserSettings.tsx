"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function UserSettings({ onInputChange, onSave }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [image, setImage] = useState("");
  const [virtues, setVirtues] = useState("");

  const handleChange = (field, value) => {

    if (field === "username") setUsername(value);
    if (field === "name") setName(value);
    if (field === "description") setDescription(value);
    if (field === "bio") setBio(value);
    if (field === "role") setRole(value);
    if (field === "team") setTeam(value);
    if (field === "image") setImage(value);
    if (field === "virtues") setVirtues(value);
    onInputChange(field, value);
  };

  

  return (
    <div className="bg-white w-1/6 h-4/6 rounded-lg top-2/3 flex flex-col items-center justify-around text-center p-8">
      <h1 className="font-semibold pm-2">User Settings</h1>
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
          placeholder="Image"
          type="text"
          value={image}
          onChange={(e) => handleChange("image", e.target.value)}

        />
        <Input
          placeholder="Virtues"
          type="text"
          value={virtues}
          onChange={(e) => handleChange("virtues", e.target.value)}

        />
        <Button buttonText="Salvar" bgColor="bg-[#15b7a5]" onClick={onSave} />
      </form>
    </div>
  );
}
