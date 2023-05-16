import {ReactNode} from "react"
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean
}

export const Button = ({children, asChild }: ButtonProps) => {
    const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx("text-black font-sans text-sm font-semibold px-4 py-3 bg-cyan-500 rounded w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white")}>
      {children}
    </Comp>
  );
};