"use client";

import { useLunchContext } from "../../config/lunch-provider";
import { getLunchGroup } from "../../utils/lunch-utils";

const tempList = [
  {
    team: "회계팀",
    name: "정가현",
    check: false,
  },
  {
    team: "회계팀",
    name: "장한나",
    check: false,
  },
  {
    team: "회계팀",
    name: "정세훈",
    check: false,
  },
  {
    team: "회계팀",
    name: "미궁이",
    check: false,
  },
  {
    team: "회계팀",
    name: "고라파덕",
    check: true,
  },
  {
    team: "현대",
    name: "이진용",
    check: false,
  },
  {
    team: "현대",
    name: "굴렁이",
    check: false,
  },
  {
    team: "현대",
    name: "모기",
    check: false,
  },
  {
    team: "현대",
    name: "파리",
    check: false,
  },
  {
    team: "현대",
    name: "고래",
    check: true,
  },
  {
    team: "한화",
    name: "김요셉",
    check: false,
  },
  {
    team: "한화",
    name: "정솔",
    check: false,
  },
  {
    team: "한화",
    name: "이쁜이",
    check: true,
  },
  {
    team: "한화",
    name: "모로코",
    check: false,
  },
  {
    team: "IDT",
    name: "김유라",
    check: false,
  },
  {
    team: "IDT",
    name: "안소희",
    check: true,
  },
  {
    team: "IDT",
    name: "김영우",
    check: false,
  },
  {
    team: "EC",
    name: "정승현",
    check: false,
  },
  {
    team: "EC",
    name: "박현준",
    check: true,
  },
  {
    team: "EC",
    name: "김민태",
    check: false,
  },
  {
    team: "EC",
    name: "엄성경",
    check: false,
  },
  {
    team: "그루비",
    name: "오현아",
    check: true,
  },
  {
    team: "그루비",
    name: "모른이",
    check: false,
  },
  {
    team: "그루비",
    name: "김태훈",
    check: false,
  },
  {
    team: "그루비",
    name: "김태공",
    check: false,
  },
  {
    team: "그루비",
    name: "민행",
    check: false,
  },
  {
    team: "정산팀",
    name: "정산팀",
    check: false,
  },
  {
    team: "정산팀",
    name: "정상현",
    check: false,
  },
  {
    team: "정산팀",
    name: "오로리",
    check: false,
  },
  {
    team: "정산팀",
    name: "손오공",
    check: true,
  },
  {
    team: "정산팀",
    name: "손오반",
    check: false,
  },
];

const LunchTeamContents = () => {
  const {
    data: { userList },
  } = useLunchContext();

  return (
    <div className="grid xs:grid-cols-2 grid-cols-1 gap-2">
      {getLunchGroup(tempList, 4).map((groupList, groupIdx) => (
        <div
          key={groupIdx}
          className="w-full flex flex-col items-center border rounded-md p-4"
        >
          <p className="mb-4 text-xl font-bold">{groupIdx + 1}조</p>
          <div className="w-full grid grid-cols-2 gap-2">
            {groupList.map((user) => (
              <div key={user.name} className="text-center">
                <span>
                  {user.team}
                  {user.name}
                  {user.check ? 1 : 2}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LunchTeamContents;
