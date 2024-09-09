import { UserType } from "../config/lunch-provider";

export // 그룹화 함수 (화살표 함수 사용)
const getLunchGroup = (
  userList: UserType[],
  maxGroupSize: number,
): UserType[][] => {
  const groupList = new Array(Math.ceil(userList.length / maxGroupSize));
  const chkUser = userList.filter((user) => user.check);
  const unChkUser = userList.filter((user) => user.check === false);

  for (let i = 0; i < groupList.length; i++) groupList[i] = [];

  chkUser.forEach(
    (user, idx) => (groupList[idx] = [...(groupList[idx] || []), user]),
  );
  getShuffleArray(groupList);

  const teamGroupBy = unChkUser.reduce((acc, item) => {
    if (!acc[item.team]) acc[item.team] = [];
    acc[item.team].push(item);
    return acc;
  }, {});

  const tempInUser: string[] = [];
  Object.keys(teamGroupBy).forEach((key) => {
    if (teamGroupBy[key].length > groupList.length) {
      // 예정
    } else {
      for (let i = teamGroupBy[key].length; i > 0; i--) {
        let tempIndex = i;
        while (!tempInUser.includes(teamGroupBy[key][i - 1].name)) {
          if (groupList.at(tempIndex)?.length < maxGroupSize) {
            groupList.at(tempIndex).push(teamGroupBy[key][i - 1]);
            tempInUser.push(teamGroupBy[key][i - 1].name);
          } else {
            tempIndex--;
          }
        }
        getShuffleArray(groupList);
      }
    }
  });

  console.log(teamGroupBy);
  console.log(groupList);

  return groupList;
};

// const getRandomNum = (rangeNum: number) => {
//   return Math.ceil(Math.random() * rangeNum);
// };

const getShuffleArray = (array: UserType[] | UserType[][]) => {
  array.sort(() => Math.random() - 0.5);
};
