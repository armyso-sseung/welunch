"use client";

import { Input, Select, Space } from "antd";
import { useState } from "react";
import { useLunchContext } from "../../config/lunch-provider";

const LunchUserAddInput = () => {
  const {
    data: { teamList, userList },
    method: { setUserList },
  } = useLunchContext();

  const [team, setTeam] = useState<string>(teamList.at(-1) as string);
  const [userName, setUserName] = useState<string>("");

  // 추가
  const handleAddUser = () => {
    if (!team || !userName) return;

    const isUser = !!userList.find((user) => user.name === userName);
    if (isUser) return;

    setUserList((prev) => [...prev, { team, name: userName, check: false }]);
    setUserName("");
  };

  return (
    <div className="w-full mt-3">
      <div className="flex justify-center w-full">
        {/* 입력 */}
        <Space.Compact className="w-full">
          <Select
            value={team}
            className="min-w-32"
            options={teamList
              .sort()
              .map((team) => ({ label: team, value: team }))}
            onChange={setTeam}
          />
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onPressEnter={(e) => {
              if (!e.nativeEvent.isComposing) handleAddUser();
            }}
          />
        </Space.Compact>

        {/* 추가 */}
        <i
          className="fa-solid fa-circle-plus text-2xl flex self-center pl-1 cursor-pointer"
          onClick={handleAddUser}
        />
      </div>
    </div>
  );
};

export default LunchUserAddInput;
