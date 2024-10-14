import React from "react";

interface InputButtonProps {
  type: string;
  placeholder: string;
}

export default function Input(props: InputButtonProps) {
  return (
    <input
      className="border rounded border-[#003741] p-[4px]"
      type={props.type}
      placeholder={props.placeholder}
      required
    />
  );
}
