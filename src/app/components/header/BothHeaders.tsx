"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeSlideDown1 } from "@/animations";
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust the path as needed
import { BriefcaseBusiness, Heart, LogIn, PenBox } from "lucide-react"; // Import icons
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const BothHeaders = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const searchParams = useSearchParams(); // Get search params

  useEffect(() => {
    if (searchParams.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [searchParams]);

  // Lock or unlock scrolling depending on the modal and sidebar states
  useEffect(() => {
    if (isOpen || showSignIn) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Reset scrolling
    }
  }, [isOpen, showSignIn]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("sign-in");
      window.history.replaceState({}, "", `?${newSearchParams.toString()}`);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={fadeSlideDown1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <HeaderTop />
        <Header
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          setShowSignIn={setShowSignIn}
        />
      </motion.div>

      {/* Mobile Menu Background */}
      {isOpen && (
        <div
          className={`fixed h-screen inset-0 bg-gray-800 dark:bg-black bg-opacity-75 dark:bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-20`}
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-slate-950 transform transition-transform duration-300 z-30`}
        style={{
          width: "250px",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <nav className="p-4">
          <div className="text-3xl uppercase font-bold font-eczar py-8 dark:text-gray-200 text-slate-950 flex justify-center items-center mb-6">
            <div className="text-3xl xs:text-4xl uppercase font-bold bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent flex justify-center items-center">
              Hirehub
            </div>
          </div>
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-slate-950 hover:underline mb-2 dark:text-gray-200"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Auth management */}
        <div className="flex space-x-2 sm:space-x-4 px-4">
          <div className="flex gap-2">
            <SignedOut>
              <Button
                variant="outline"
                className="text-slate-950 dark:text-gray-200 flex items-center"
                onClick={() => {
                  setShowSignIn(true);
                  toggleMenu(); // Close the sidebar on login button click
                }}
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
        </div>
      </div>

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
    </>
  );
};

export default BothHeaders;
