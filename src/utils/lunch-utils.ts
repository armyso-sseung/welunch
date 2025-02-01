import { UserType } from "../config/lunch-provider";

// 그룹 생성
export const generateStrictGroups = (
  userList?: UserType[],
  maxGroupSize?: number,
) => {
  // 초기값
  userList = userList ?? [];
  maxGroupSize = maxGroupSize ?? 4;

  // VIP, 일반 정의
  const specials = userList.filter((user) => user.check);
  const normals = userList.filter((user) => !user.check);
  const totalGroups = Math.ceil(userList.length / maxGroupSize);

  // VIP 인원 제한 검증
  if (specials.length > totalGroups) {
    return alert("VIP 인원의 수가 조 수를 초과하였습니다.");
  }

  // VIP 선 배치
  const groups = specials.map((vip) => [vip]);

  // 전체 조 생성
  while (groups.length < totalGroups) {
    groups.push([]);
  }

  // 사용자 랜덤 섞기 및 배치 시작
  const shuffledNormals = [...normals].sort(() => Math.random() - 0.5);
  shuffledNormals.forEach((user) => {
    let bestGroup = [] as UserType[];
    let minTeamConflict = Infinity;

    // 최적의 조 탐색
    groups.forEach((group) => {
      // 조 최대 인원 검증
      if (group.length >= maxGroupSize) return;

      // 같은팀 검증
      const hasTeamConflict = group.some((m) => m.team === user.team);
      const currentConflict = hasTeamConflict ? 1 : 0;

      // 최적의 조 검증 ( 맨처음은 통과 그 다음부터는 최적의 탐색 )
      if (currentConflict < minTeamConflict) {
        // Group 참조 및 최적 카운트 처리
        bestGroup = group;
        minTeamConflict = currentConflict;
      }
    });

    // 실제 Group 에 사용자 추가 ( 참조 )
    bestGroup.push(user);
  });

  groups.sort(() => Math.random() - 0.5);
  groups.sort((x, y) => y.length - x.length);
  return groups;
};

// 그룹 검증
export const validGroup = (userList: UserType[], groupList: UserType[][]) => {
  // Report 정의
  const report = {
    totalSpecial: userList.filter((user) => user.check).length,
    specialConflicts: 0,
    teamConflicts: 0,
  };

  groupList.forEach((group, idx) => {
    // VIP 중복확인
    const specialCount = group.filter((user) => user.check).length;
    if (specialCount > 1) report.specialConflicts++;

    // 팀 중복 확인
    const teamList = new Set(group.map((user) => user.team));
    report.teamConflicts += group.length - teamList.size;
  });

  return report;
};
