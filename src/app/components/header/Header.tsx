"use client";

import { useState } from "react";
import { ModeToggle } from "../extras/ModeToggle";
import LogoAndTitle from "./LogoAndTitle";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import { SignIn } from "@clerk/nextjs";
import BlurryBlobTwo from "@/components/ui/BlurryBlobTwo";

interface HeaderProps {
  toggleMenu: () => void;
  isOpen: boolean;
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>; // Added setShowSignIn
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };

  return (
    <div className="relative z-10 dark:border-b border-gray-900 bg-white dark:bg-slate-950 shadow-sm">
      <BlurryBlobTwo
        className="rounded-xl opacity-45"
        firstBlobColor="bg-purple-400"
        secondBlobColor="bg-blue-400"
      />
      <header className="text-slate-950 p-4 py-3 xl:px-12 flex justify-between items-center container mx-auto">
        <LogoAndTitle />
        <NavLinks />
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          <ModeToggle />
          <AuthButtons
            setShowSignIn={setShowSignIn}
            isModalOpen={showSignIn}
          />{" "}
          {/* Pass isModalOpen */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Sign In Overlay */}
      {showSignIn && (
        <div
          className="fixed h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            forceRedirectUrl="/onboarding"
            routing="hash"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
