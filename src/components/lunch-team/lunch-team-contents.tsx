"use client";

import { useLunchContext } from "../../config/lunch-provider";
import { LUNCH_TEAM } from "../../constants/lunch-user-constants";
import CommonTitle from "../layout/common-title";

const LunchTeamContents = () => {
  const {
    data: { userList, groupList, report },
  } = useLunchContext();

  return (
    <>
      <CommonTitle title={LUNCH_TEAM.REPORT.TITLE} />
      <div className="h-32">
        <div className="flex flex-col border rounded-md p-4 gap-2">
          <p className="text-sm font-bold">
            <span>{LUNCH_TEAM.REPORT.VIP} : </span>
            <span>{report.specialConflicts} 건</span>
          </p>

          <p className="text-sm font-bold">
            <span>{LUNCH_TEAM.REPORT.TEAM} : </span>
            <span>{report.teamConflicts} 건</span>
          </p>
        </div>
      </div>

      <CommonTitle title={LUNCH_TEAM.GROUP}>
        <span className="text-sm">총 {userList.length} 명</span>
      </CommonTitle>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        {groupList.map((groupList, groupIdx) => (
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
    </>
  );
};

export default LunchTeamContents;
