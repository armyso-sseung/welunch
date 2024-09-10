import { UserType } from "../config/lunch-provider";

export const getLunchGroup = (
  userList: UserType[],
  maxGroupSize: number,
): UserType[][] => {
  const groupList = new Array(Math.ceil(userList.length / maxGroupSize));
  const chkUser = userList.filter((user) => user.check);
  const unChkUser = userList.filter((user) => !user.check);

  for (let i = 0; i < groupList.length; i++) groupList[i] = [];

  // 배열 셋팅
  chkUser.forEach(
    (user, idx) => (groupList[idx] = [...(groupList[idx] || []), user]),
  );
  getShuffleArray(groupList);

  // 팀 인원 정렬
  const teamGroupBy = getCustomGroup(unChkUser);

  const resultList: UserType[][] = [];
  Object.keys(teamGroupBy).forEach((key) => {
    for (let i = teamGroupBy[key].length - 1; i >= 0; i--) {
      if (groupList.length - 1 < i) getShuffleArray(groupList);

      const currentIndex = groupList.length - 1 < i ? groupList.length - 1 : i;
      groupList.at(currentIndex)?.push(teamGroupBy[key][i]);

      if (groupList.at(currentIndex)?.length >= 4) {
        resultList.push(groupList.at(currentIndex));

        const idx = groupList.indexOf(groupList.at(currentIndex));
        groupList.splice(idx, 1);
      }
    }

    getShuffleArray(groupList);
  });

  resultList.push(groupList[0]);
  groupList.splice(0, 1);

  return resultList;
};

const getCustomGroup = (group: UserType[]) => {
  const groupObject: { [key: string]: UserType[] } = group.reduce(
    (acc, item) => {
      if (!acc[item.team]) acc[item.team] = [];
      acc[item.team].push(item);
      return acc;
    },
    {},
  );

  // 객체를 배열로 변환하고 배열 길이로 내림차순 정렬
  const sortedEntries = Object.entries(groupObject).sort(
    (a, b) => b[1].length - a[1].length,
  );

  // 다시 객체로 변환
  return Object.fromEntries(sortedEntries);
};

const getShuffleArray = (array: UserType[] | UserType[][]) => {
  array.sort(() => Math.random() - 0.5);
};
