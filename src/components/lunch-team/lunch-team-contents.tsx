"use client";

import { useLunchContext } from "../../config/lunch-provider";
import { getLunchGroup } from "../../utils/lunch-utils";

const LunchTeamContents = () => {
  const {
    data: { userList },
  } = useLunchContext();

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
      {getLunchGroup(userList, 4).map((groupList, groupIdx) => (
        <div
          key={groupIdx}
          className="w-full flex flex-col items-center border rounded-md p-4"
        >
          <p className="mb-4 text-xl font-bold">{groupIdx + 1}조</p>
          <div className="w-full grid grid-cols-2 gap-2">
            {groupList?.map((user, idx) => (
              <div key={idx} className="text-center text-[11pt]">
                <span>{`${user.team} ${user.name}`}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LunchTeamContents;
