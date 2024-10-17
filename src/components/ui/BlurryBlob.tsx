import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  const [showBlob, setShowBlob] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlob(true); // Show the blobs after 2 seconds
    }, 2000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative dark:opacity-50">
      <div className="absolute inset-0">
        {showBlob && (
          <>
            <div
              className={cn(
                "absolute right-52 -top-20 h-72 w-52 animate-pop-blob rounded-sm p-8 mix-blend-multiply blur-3xl filter transition-opacity delay-500 duration-2000", // Added transition for fade-in
                className,
                firstBlobColor,
              )}
            ></div>
            <div
              className={cn(
                "absolute left-72 top-6 h-72 w-40 animate-pop-blob rounded-sm p-8 mix-blend-multiply blur-3xl filter transition-opacity duration-2000", // Added transition for fade-in
                className,
                secondBlobColor,
              )}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
