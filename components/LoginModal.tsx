import LogoSicoob from "./icons/LogoSicoob";
import Escolha from "./icons/Escolha";
import React, { ReactNode } from "react";

const LoginModal: React.FC<{ children: ReactNode }> = (
  { children }
) => {
  return (
    <div className="flex h-screen flex-col bg-[#fff]">
      <div className="flex items-center justify-center h-full bg-[#d7fffa] p-30">
        <div className="bg-[#15b7a5] h-3/6 w-1/6 rounded-l-lg text-white flex flex-col justify-around items-center">
          <div className="text-center">
            <h1 className="text-xl">Seja bem-vindo(a)!</h1>
            <p>Faça seu login para continuar</p>
          </div>
          <Escolha />
          <LogoSicoob />
        </div>
        <div className="bg-[#fff] h-3/6 w-2/6 rounded-r-lg flex flex-col justify-around items-center text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginModal
