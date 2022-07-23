import { ButtonHTMLAttributes } from "react";

export type LoadButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};
