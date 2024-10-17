import React from "react";
import ProtectedRoutes from "../components/extras/ProtectedRoutes";

const page = () => {
  return <ProtectedRoutes>saved-jobs</ProtectedRoutes>;
};

export default page;
