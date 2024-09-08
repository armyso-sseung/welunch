"use client";

import { useEffect, useRef, useState } from "react";
import { Input, InputRef, Tag, theme } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CommonTitle from "../layout/common-title";
import CommonSection from "../layout/common-section";
import { LUNCH_USER } from "../../constants/lunch-user-constants";
import { useLunchContext } from "../../config/lunch-provider";

const LunchUserTeam = () => {
  const { token } = theme.useToken();
  const {
    data: { teamList },
    method: { setTeamList },
  } = useLunchContext();

  const [isEdit, setIsEdit] = useState(false);
  const [team, setTeam] = useState("");
  const inputRef = useRef<InputRef>(null);

  // 포커스
  useEffect(() => {
    if (isEdit) inputRef.current?.focus();
  }, [isEdit]);

  // 추가
  const handleAddTeam = () => {
    if (team && teamList.indexOf(team) === -1) {
      setTeamList([team, ...teamList]);
    }

    setIsEdit(false);
    setTeam("");
  };

  // 제거
  const handleRemoveTeams = (team: string) => {
    setTeamList((prev) => prev.filter((ele) => ele !== team));
  };

  return (
    <CommonSection className="min-h-[150px]">
      {/* 타이틀 */}
      <CommonTitle>{LUNCH_USER.TEAM.TITLE}</CommonTitle>

      {/* 입력 */}
      {isEdit ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 74.6,
            marginRight: 8.9,
            padding: 1,
            marginTop: "0.25rem",
          }}
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          onBlur={handleAddTeam}
          onPressEnter={handleAddTeam}
        />
      ) : (
        <Tag
          onClick={() => setIsEdit(true)}
          style={{
            padding: 3,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: "0.25rem",
            background: token.colorBgContainer,
            borderStyle: "dashed",
            cursor: "pointer",
          }}
        >
          <PlusOutlined />
          <span>{LUNCH_USER.TEAM.BTN_ADD}</span>
        </Tag>
      )}

      {/* 목록 */}
      {teamList.map((team: string) => (
        <span className="inline-block my-1" key={team}>
          <Tag
            closable
            style={{
              padding: 3,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onClose={(e) => {
              e.preventDefault();
              handleRemoveTeams(team);
            }}
          >
            <span>{team}</span>
          </Tag>
        </span>
      ))}
    </CommonSection>
  );
};

export default LunchUserTeam;
