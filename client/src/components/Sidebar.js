import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const user = useSelector((state) => state.user);
  if (!user) {
    return <></>;
  }
  return (
    <>
      <h2>Members</h2>
    </>
  );
};
