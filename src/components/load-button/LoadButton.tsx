import type { LoadButtonProps } from "./LoadButton.types";

export const LoadButton = (props: LoadButtonProps) => {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
};
