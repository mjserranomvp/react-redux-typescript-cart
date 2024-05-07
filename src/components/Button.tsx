import { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, className,...props }: Props) => {
  const classes = `px-3 py-2 rounded-xl bg-amber-400 text-neutral-700 cursor-pointer text-center font-medium ${className}`;

  return <button className={classes} {...props}>{children}</button>;
};
export default Button;
