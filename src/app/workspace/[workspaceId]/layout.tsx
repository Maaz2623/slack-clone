"use client";
import React from "react";
import Toolbar from "./toolbar";

interface WorkspaceIdLayoutPops {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutPops) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceIdLayout;
