import { ReactNode } from "react";

type LinkWrapperProps = {
  children: ReactNode;
};

const LinkWrapper = ({ children }: LinkWrapperProps) => {
  return <li>{children}</li>;
};
export default LinkWrapper;
