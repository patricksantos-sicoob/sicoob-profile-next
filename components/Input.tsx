import React from "react";

interface InputButtonProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function Input(props: InputButtonProps) {
  return (
    <input
      className="border rounded border-[#003741] p-[4px]"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      {...(props.required && { required: true })}
    />
  );
}
