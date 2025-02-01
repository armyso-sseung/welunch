"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export type UserType = {
  team: string;
  name: string;
  check: boolean;
};

type LunchContextType = {
  data: {
    teamList: string[];
    userList: UserType[];
    groupList: UserType[][];
    report: ReportType;
  };
  method: {
    setTeamList: Dispatch<SetStateAction<string[]>>;
    setUserList: Dispatch<SetStateAction<UserType[]>>;
    setGroupList: Dispatch<SetStateAction<UserType[][]>>;
    setReport: Dispatch<SetStateAction<ReportType>>;
  };
};

type ReportType = {
  totalSpecial: number;
  specialConflicts: number;
  teamConflicts: number;
};

const LunchContext = createContext<LunchContextType>({} as LunchContextType);

// Context Provider
export const LunchProvider = ({ children }: Props) => {
  const [teamList, setTeamList] = useState<string[]>([]);
  const [userList, setUserList] = useState<UserType[]>([]);
  const [groupList, setGroupList] = useState<UserType[][]>([]);
  const [report, setReport] = useState<ReportType>({
    totalSpecial: 0,
    specialConflicts: 0,
    teamConflicts: 0,
  });

  const value = useMemo(
    () => ({
      data: {
        teamList,
        userList,
        groupList,
        report,
      },
      method: {
        setTeamList,
        setUserList,
        setGroupList,
        setReport,
      },
    }),
    [groupList, report, teamList, userList],
  );

  return (
    <LunchContext.Provider value={value}>{children}</LunchContext.Provider>
  );
};

// Context Hook
export const useLunchContext = () => useContext(LunchContext);
