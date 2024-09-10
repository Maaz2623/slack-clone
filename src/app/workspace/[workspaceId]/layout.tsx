"use client";
import React from "react";
import Toolbar from "./toolbar";
import Sidebar from "./sidebar";

interface WorkspaceIdLayoutPops {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutPops) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
