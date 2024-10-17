import type { Metadata } from "next";
import localFont from "next/font/local";
import { Eczar } from "next/font/google"; // Import Eczar font
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import BothHeaders from "./components/header/BothHeaders";
import ClientLayout from "./ClientLayout"; // Import the client component

// Load Eczar font from Google
const eczar = Eczar({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin-ext"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: shadesOfPurple }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" suppressHydrationWarning className="duration-300">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${eczar.className} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative z-10">
              <BothHeaders />
            </div>
            {/* Wrap the dynamic content in ClientLayout */}
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
