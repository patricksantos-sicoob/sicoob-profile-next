"use client"

import ProtectedRoute from "@/components/ProtectedRoute";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter()

  const logout = () => {
    localStorage.removeItem("token");
    router.push('/login')
  }

  return (
    <ProtectedRoute>
      <div className="bg-[#00353e] text-white h-20 flex justify-around items-center">
        <p className="font-semibold">Perfil Sicoob</p>
        <div className="flex flex-row gap-3 items-center justify-center text-center">
          <Link className="text-white" href="/home">
            Ver perfis
          </Link>
          <Link
            className="text-[#7eb61d]  p-2 rounded-md font-semibold"
            href="/user"
          >
            Minha conta
          </Link>
          <button onClick={logout}><LogOut width={14} className="text-red-500"/></button>
        </div>
      </div>
      {children}
    </ProtectedRoute>
  );
}
