"use client";

import { LogIn, LogOut } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AuthModal } from "./AuthModal";
import { signOut } from "@/app/auth/callback/actions";

const AuthButton = ({ user }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  console.log(user);

  if (user) {
    return (
      <form action={signOut}>
        <Button
          variant="ghost"
          type="submit"
          className="gap-2  bg-orange-400 hover:bg-orange-600 font-semibold rounded-sm text-white px-4 py-5 "
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }
  return (
    <>
      <Button
        onClick={() => setShowAuthModal(true)}
        variant="default"
        className="gap-2  bg-orange-400 hover:bg-orange-600 font-semibold rounded-sm text-white px-5 py-5 "
      >
        <LogIn />
        Sign In
      </Button>
      <AuthModal
        isOpen={showAuthModal}
        onClose={(open) => setShowAuthModal(open)}
      />
    </>
  );
};

export default AuthButton;
