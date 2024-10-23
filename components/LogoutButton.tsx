'use client'

import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="">
      <button onClick={logout}>
        <LogOut color="red" width={16} height={16} />
      </button>
    </div>
  );
};

export default LogoutButton;
