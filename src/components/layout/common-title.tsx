import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CommonTitle = ({ children }: Props) => {
  return (
    <div className="mb-3 py-2 border-gray-500 border-b-2">
      <p className="text-lg font-medium">{children}</p>
    </div>
  );
};

export default CommonTitle;
