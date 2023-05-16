import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 h-12 py-3 px-4 w-full text-left bg-gray-800 rounded focus-within:ring ring-cyan-300 ">
      {children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";

interface TextInputIconProps {
    children: ReactNode;
}
const TextInputIcon = ({children}:TextInputIconProps) => {
    return (
        <Slot className="w-6 h-6 text-gray-400">
        {children}
    </Slot>
    )
};

TextInputIcon.displayName = "TextInput.Icon"

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none "
      {...props}
    />
  );
};

TextInputInput.displayName = "TextInput.Input"

export const textInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}