import React from "react";

interface ButtonLoginProps extends React.ComponentProps<"button"> {
  buttonText: string
}

export default function ButtonLogin({ buttonText, ...props }: ButtonLoginProps) {
  return (
    <button
      className={`bg-[#7eb61d] p-2 rounded-md text-white capitalize`}
      type="submit"
      {...props}
    >
      {buttonText}
    </button>
  );
}
