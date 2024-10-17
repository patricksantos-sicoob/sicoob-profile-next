"use client";

import UserCard from "@/components/UserCard";
import UserSettings from "@/components/UserSettings";
import { useState } from "react";

export default function UserPage() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    name: "",
    description: "",
    bio: "",
    role: "",
    team: "",
    image: "",
    virtues: "",
  });

  const [savedInfo, setSavedInfo] = useState(userInfo);


  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setSavedInfo(userInfo); 
  };

  return (
    <div className="flex h-screen flex-row bg-[#15b7a5] justify-center items-center gap-2">
      <UserSettings onInputChange={handleInputChange} onSave={handleSave} />
      <UserCard
        bgColor="bg-gray-100"
        name={savedInfo.name}
        username={savedInfo.username}
        bio={savedInfo.bio}
        description={savedInfo.description}
        role={savedInfo.role}
        team={savedInfo.team}
        image={savedInfo.image}
        virtues={savedInfo.virtues}
      />
    </div>
  );
}
