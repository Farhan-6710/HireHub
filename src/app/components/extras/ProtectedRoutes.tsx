"use client"

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      // Redirect to the sign-in page
      router.push("/?sign-in=true");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    // Optionally, you can return a loading indicator or nothing while loading
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
