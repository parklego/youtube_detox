"use client";

import { useAllUser } from "@/hook/user";
import React from "react";

const Community = () => {
  const { user, isLoading, isError } = useAllUser();

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>something wrong...</p>;

  return (
    <div>
      <p> 현재 디톡스 중인 이용자 수 : {user.count}</p>
    </div>
  );
};

export default Community;
