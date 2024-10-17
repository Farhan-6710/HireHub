"use client";

import { MapPin } from "lucide-react"; // Import social media icons
import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <div className="relative block sm:hidden z-10 bg-white border-b border-gray-100 dark:border-gray-800 dark:bg-slate-950 p-2">
      <div className="container mx-auto flex justify-center md:justify-between items-center gap-3">
        {/* Left Div: Location and Address */}
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <MapPin className="mr-2 h-5 w-5" />
          <span>123 Main St, Dream Town, Jobland</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
