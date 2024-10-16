import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="bg-[#00353e] text-white h-20 flex justify-around items-center">
        <p className="font-semibold">Perfil Sicoob</p>
        <div className="flex flex-row gap-3 items-center justify-center">
          <Link className="text-white" href="/home">
            Ver perfis
          </Link>
          <Link
            className="text-[#7eb61d]  p-2 rounded-md font-semibold"
            href="/user"
          >
            Minha conta
          </Link>
        </div>
      </div>
      {children}
    </ProtectedRoute>
  );
}
