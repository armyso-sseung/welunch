"use client";

import CommonSection from "../layout/common-section";
import CommonTitle from "../layout/common-title";
import LunchUserAddInput from "./lunch-user-add-input";
import LunchUserAddUser from "./lunch-user-add-user";
import { LUNCH_USER } from "../../constants/lunch-user-constants";
import { useLunchContext } from "../../config/lunch-provider";

const LunchUserAdd = () => {
  const {
    data: { teamList, userList },
    method: { setUserList },
  } = useLunchContext();

  // 삭제
  const handleRemoveUser = (name: string) => {
    setUserList((prev) => prev.filter((user) => user.name !== name));
  };

  // 체크
  const handleChangeCheck = (name: string) => {
    setUserList((prev) =>
      prev.map((user) =>
        user.name !== name ? user : { ...user, check: !user.check },
      ),
    );
  };

  return (
    <CommonSection>
      {/* 타이틀 */}
      <CommonTitle title={LUNCH_USER.USER.TITLE}>
        <span className="text-sm">{userList.length} 명</span>
      </CommonTitle>

      {/* 목록 */}
      {teamList.length > 0 ? (
        <>
          {/* 사용자 목록 */}
          {userList.length > 0 && (
            <div className="w-full grid xs:grid-cols-2 grid-cols-1 gap-2 pb-3 border-b">
              {userList.map((user) => (
                <LunchUserAddUser
                  key={user.name}
                  user={user}
                  onRemove={handleRemoveUser}
                  onCheck={handleChangeCheck}
                />
              ))}
            </div>
          )}

          {/* 사용자 입력 */}
          <LunchUserAddInput />
        </>
      ) : (
        <div className="w-full h-[150px] flex justify-center items-center">
          <p className="text-gray-400 font-bold">{LUNCH_USER.USER.NO_TEAM}</p>
        </div>
      )}
    </CommonSection>
  );
};

export default LunchUserAdd;
