"use client";

import LunchUserTeam from "./lunch-user-team";
import LunchUserAdd from "./lunch-user-add";

const LunchUserContents = () => {
  return (
    <>
      {/* 팀추가 */}
      <LunchUserTeam />

      {/* 사용자추가 */}
      <LunchUserAdd />
    </>
  );
};

export default LunchUserContents;
