"use client";

import { Checkbox } from "antd";
import { UserType } from "../../config/lunch-provider";

type Props = {
  user: UserType;
  onRemove: (name: string) => void;
  onCheck: (name: string) => void;
};

const LunchUserAddUser = ({ user, onRemove, onCheck }: Props) => {
  return (
    <div className="w-full flex items-center px-2 border rounded-md py-1">
      <div
        className="w-full h-full grid grid-cols-12 gap-2 items-center cursor-pointer"
        onClick={() => onCheck(user.name)}
      >
        <Checkbox className="col-span-1" checked={user.check} />
        <span className="col-span-6 pointer-events-none truncate pl-1">
          {user.team}
        </span>
        <span className="col-span-5 pointer-events-none truncate pr-1">
          {user.name}
        </span>
      </div>
      <i
        className="fa-regular fa-trash-can cursor-pointer"
        onClick={() => onRemove(user.name)}
      />
    </div>
  );
};

export default LunchUserAddUser;
