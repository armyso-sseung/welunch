import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

const CommonTitle = ({ children, title }: Props) => {
  return (
    <div className="mb-3 py-2 border-gray-500 border-b-2 flex justify-between items-center">
      <p className="text-lg font-medium">{title}</p>
      {children}
    </div>
  );
};

export default CommonTitle;
