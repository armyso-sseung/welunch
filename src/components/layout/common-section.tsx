import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const CommonSection = ({ children, className }: Props) => {
  return <div className={`mb-5 ${className}`}>{children}</div>;
};

export default CommonSection;
