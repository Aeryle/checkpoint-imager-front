import React from "react";

interface IProps {
  name: string;
  placeholder?: string;
  className: string;
}

export default function TextInput({
  name,
  placeholder,
  className = "",
}: IProps): JSX.Element {
  return (
    <input
      type="text"
      placeholder={placeholder}
      id={name}
      className={`text-black placeholder-black placeholder-opacity-60 rounded-full focus:outline-none focus:ring focus:ring-red-400 h-10 ${className}`}
    />
  );
}
