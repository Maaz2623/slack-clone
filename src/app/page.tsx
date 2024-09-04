"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/user-button";
import { useAuthActions } from "@convex-dev/auth/react";

const HomePage = () => {
  const { signOut } = useAuthActions();

  return <UserButton />;
};

export default HomePage;
