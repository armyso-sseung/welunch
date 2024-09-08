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
  };
  method: {
    setTeamList: Dispatch<SetStateAction<string[]>>;
    setUserList: Dispatch<SetStateAction<UserType[]>>;
  };
};

const LunchContext = createContext<LunchContextType>({} as LunchContextType);

// Context Provider
export const LunchProvider = ({ children }: Props) => {
  const [teamList, setTeamList] = useState<string[]>([]);
  const [userList, setUserList] = useState<UserType[]>([]);

  const value = useMemo(
    () => ({
      data: {
        teamList,
        userList,
      },
      method: {
        setTeamList,
        setUserList,
      },
    }),
    [teamList, userList],
  );

  return (
    <LunchContext.Provider value={value}>{children}</LunchContext.Provider>
  );
};

// Context Hook
export const useLunchContext = () => useContext(LunchContext);
