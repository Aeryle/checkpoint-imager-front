import React from "react";
import { useForm } from "react-hook-form";
import { MailIcon } from "@heroicons/react/outline";

import FormDecoration from "../../../assets/formDecoration.jpg";

import TextInput from "../Inputs/TextInput";

export default function Login(): JSX.Element {
  const { register } = useForm();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form className="flex w-1/2 h-2/3 bg-gray-900 rounded-2xl">
        <img
          src={FormDecoration}
          alt="Cat image"
          className="h-full rounded-bl-2xl rounded-tl-2xl"
        />
        <div className="relative flex">
          <TextInput
            name="username"
            placeholder="Email"
            className="pl-12 h-8"
          />

          <label
            htmlFor="username"
            className="absolute top-0 flex items-center pl-3 h-8"
          >
            <MailIcon className="h-8 text-black opacity-60" />
          </label>
        </div>
      </form>
    </div>
  );
}
