"use client"; // Mark this component as a client component

import { useEffect } from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    console.log(
      "Clerk Publishable Key:",
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    );
    // Note: CLERK_SECRET_KEY is server-side only and won't be accessible here
  }, []);

  return <>{children}</>; // Render the children inside this client layout
}
