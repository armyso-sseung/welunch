"use client";

import LunchUserContents from "./lunch-user/lunch-user-contents";
import { LUNCH_CONTENTS, LUNCH_USER } from "../constants/lunch-user-constants";
import { useMemo, useState } from "react";
import LunchTeamContents from "./lunch-team/lunch-team-contents";
import { useLunchContext, UserType } from "../config/lunch-provider";
import { Button, InputNumber, Modal } from "antd";
import { generateStrictGroups, validGroup } from "../utils/lunch-utils";

const LunchContents = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [maxGroupSize, setMaxGroupSize] = useState<number | undefined>();

  const {
    data: { userList, teamList },
    method: { setGroupList, setReport },
  } = useLunchContext();

  const isNext = useMemo(() => {
    return userList.length > 0 && teamList.length > 0;
  }, [userList, teamList]);

  const handleGroupCount = () => {
    if (typeof maxGroupSize !== "number" && !maxGroupSize) {
      return alert(LUNCH_USER.CONTENTS.VALID);
    }

    // Lunch Group
    const resultGroupdList = generateStrictGroups(
      userList,
      maxGroupSize,
    ) as UserType[][];
    setGroupList(resultGroupdList);

    // Report
    const resultReport = validGroup(userList, resultGroupdList);
    setReport(resultReport);

    // 모달 및 완료 처리
    setIsComplete(true);
    setIsOpen(false);
  };

  return (
    <>
      <div className="p-4 pb-[100px]">
        {!isComplete ? <LunchUserContents /> : <LunchTeamContents />}
      </div>

      {!isComplete ? (
        <div className="absolute bottom-0 w-full px-2 pb-8 flex justify-center">
          <div
            className={`w-1/4 h-[55px] rounded-full border flex justify-center items-center px-3 shadow-md ${isNext ? "bg-green-400 text-white cursor-pointer hover:opacity-85" : "bg-gray-300 text-gray-500 pointer-events-none"}`}
            onClick={() => setIsOpen(true)}
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
            className="w-1/4 h-[55px] rounded-full border flex justify-center items-center px-3 shadow-md bg-green-400 text-white cursor-pointer hover:opacity-85"
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

      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        width={350}
        title={LUNCH_USER.CONTENTS.GROUP_COUNT}
        footer={
          <>
            <Button type="primary" onClick={handleGroupCount}>
              확인
            </Button>
          </>
        }
        centered
      >
        <InputNumber
          className="!w-full"
          value={maxGroupSize}
          type="number"
          onChange={(value) => setMaxGroupSize(value as number)}
          onPressEnter={handleGroupCount}
        />
      </Modal>
    </>
  );
};

export default LunchContents;
