"use client";

import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Heart, LogIn, PenBox } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect } from "react";

const AuthButtons: React.FC<{
  setShowSignIn: (value: boolean) => void;
  isModalOpen: boolean;
}> = ({ setShowSignIn, isModalOpen }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = ""; // Reset scrolling when modal is closed
    }

    return () => {
      document.body.style.overflow = ""; // Reset scrolling on unmount
    };
  }, [isModalOpen]);

  return (
    <div className="hidden lg:flex space-x-2 sm:space-x-4">
      <SignedOut>
        <Button
          variant="outline"
          className="text-slate-950 dark:text-gray-200 flex items-center"
          onClick={() => setShowSignIn(true)}
        >
          <LogIn size={20} className="mr-2" />
          Login
        </Button>
      </SignedOut>

      <SignedIn>
        <Link href="/post-job">
          <Button className="rounded-full bg-gradient-to-r from-pink-600 to-blue-700 text-white">
            <PenBox size={20} className="mr-2" />
            Post a Job
          </Button>
        </Link>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-9 h-9",
            },
          }}
        >
          <UserButton.MenuItems>
            <UserButton.Link
              label="My Jobs"
              labelIcon={<BriefcaseBusiness size={15} />}
              href="/my-jobs"
            />
            <UserButton.Link
              label="Saved Jobs"
              labelIcon={<Heart size={15} />}
              href="/saved-jobs"
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
    </div>
  );
};

export default AuthButtons;
