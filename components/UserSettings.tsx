"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

type UserSettingsProps = {
  onInputChange: (field: string, value: string) => void;
  onSave: () => void;
  onDeletion: () => void;
};

export default function UserSettings({
  onInputChange,
  onSave,
  onDeletion,
}: UserSettingsProps) {
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
    <div className="bg-[#d7fffa] w-1/6 h-4/6 rounded-lg top-2/3 flex flex-col items-center justify-between text-center p-8">
      <h1 className="font-semibold pm-2 mb-6">Personalizar Perfil</h1>
      <form
        className="flex flex-col w-3/6 items-center gap-2 justify-center mb-4"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <Input
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <Input
          placeholder="Team"
          type="text"
          value={team}
          onChange={(e) => handleChange("team", e.target.value)}
        />
        <Input
          placeholder="Role"
          type="text"
          value={role}
          onChange={(e) => handleChange("role", e.target.value)}
        />
        <Input
          placeholder="Link da imagem"
          type="text"
          value={image}
          onChange={(e) => handleChange("image", e.target.value)}
        />
        <Select.Root>
          <Select.Trigger
            className="border rounded border-[#003741] p-[4px]"
            aria-label="Qualidades"
          >
            <Select.Icon>
              <ChevronDown color="grey"/>
            </Select.Icon>
          </Select.Trigger>
        </Select.Root>
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
        <Button buttonText="Salvar" onClick={onSave} />
      </form>
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button className="text-red-400">Deletar conta</button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
            <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
              <AlertDialog.Title className="m-0 text-[17px] font-medium">
                Você tem plena certeza?
              </AlertDialog.Title>
              <AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal">
                Essa ação não pode ser desfeita.
              </AlertDialog.Description>
              <div className="flex justify-end gap-[25px]">
                <AlertDialog.Cancel asChild>
                  <button className="text-neutral-500">Cancelar</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button
                    onClick={onDeletion}
                    className="bg-red-700 p-2 rounded-md text-white"
                  >
                    Sim. Deletar conta.
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </div>
  );
}
