import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlobTwo({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  const [showBlob, setShowBlob] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlob(true); // Show the blobs after 2 seconds
    }, 0);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative -z-10 dark:opacity-50">
      <div className="absolute inset-0">
        {showBlob && (
          <>
            <div
              className={cn(
                "absolute h-40 w-40 right-10 top-24 sm:right-20 sm:top-14 lg:right-32 dark:lg:right-56 lg:top-0 lg:h-72 lg:w-72 rounded-sm p-8 mix-blend-multiply blur-3xl filter transition-opacity delay-1000 duration-2000 animate-move-blobs", // Custom animation applied
                className,
                firstBlobColor
              )}
            ></div>
            <div
              className={cn(
                "absolute h-28 w-28 left-10 top-72 sm:left-20 sm:top-48 lg:left-32 dark:lg:left-56 lg:top-60 dark:lg:top-52 dark:lg:h-72 dark:lg:w-72 lg:h-52 lg:w-52 rounded-sm p-8 mix-blend-multiply blur-3xl filter transition-opacity duration-2000 animate-move-blobs", // Custom animation applied
                className,
                secondBlobColor
              )}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
