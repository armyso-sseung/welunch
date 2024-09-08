"use client";

import LunchUserContents from "./lunch-user/lunch-user-contents";
import { LUNCH_CONTENTS } from "../constants/lunch-user-constants";
import { useMemo, useState } from "react";
import LunchTeamContents from "./lunch-team/lunch-team-contents";
import { useLunchContext } from "../config/lunch-provider";

const LunchContents = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const {
    data: { userList, teamList },
  } = useLunchContext();

  const isNext = useMemo(() => {
    return userList.length > 0 && teamList.length > 0;
  }, [userList, teamList]);

  return (
    <>
      <div className="p-4 pb-[100px]">
        {!isComplete ? <LunchUserContents /> : <LunchTeamContents />}
      </div>

      {!isComplete ? (
        <div className="absolute bottom-0 w-full px-2 pb-8 flex justify-center">
          <div
            className={`w-1/2 h-[55px] rounded-full border flex justify-center items-center px-3 shadow-md ${isNext ? "bg-green-400 text-white cursor-pointer hover:opacity-85" : "bg-gray-300 text-gray-500 pointer-events-none"}`}
            onClick={() => setIsComplete(true)}
          >
            <span className="flex-1 flex justify-center font-bold text-xl">
              {LUNCH_CONTENTS.BTN_TEAM}
            </span>
            <span>
              <i className="fa-solid fa-circle-right text-2xl" />
            </span>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-0 w-full px-2 pb-8 flex justify-center">
          <div
            className="w-1/2 h-[55px] rounded-full border flex justify-center items-center px-3 shadow-md bg-green-400 text-white cursor-pointer hover:opacity-85"
            onClick={() => setIsComplete(false)}
          >
            <span>
              <i className="fa-solid fa-circle-left text-2xl" />
            </span>
            <span className="flex-1 flex justify-center font-bold text-xl">
              {LUNCH_CONTENTS.BTN_PREV}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LunchContents;
