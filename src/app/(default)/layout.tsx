import { ReactNode } from "react";
import { LunchProvider } from "../../config/lunch-provider";

type Props = {
  children: ReactNode;
};

const IndexLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-dvh bg-gray-800">
      <div className="w-full flex justify-center">
        <div className="max-w-[600px] min-w-[350px] w-[600px] px-6 pb-10">
          {/* 타이틀 */}
          <div className="flex justify-center my-10">
            <p className="font-medium text-white text-2xl shadow-md">
              같이 점심 먹을래?
            </p>
          </div>

          {/* 콘텐츠 */}
          <div className="w-full min-h-[82dvh] rounded-xl bg-white relative">
            <LunchProvider>{children}</LunchProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexLayout;
