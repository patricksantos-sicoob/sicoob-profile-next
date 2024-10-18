"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ComponentProps } from "react";
const ProtectedRoute = ({ children  }: ComponentProps<"div">) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return <div>{children}</div>;
}

export default ProtectedRoute;