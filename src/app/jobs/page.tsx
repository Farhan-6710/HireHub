import React from 'react'
import ProtectedRoutes from '../components/extras/ProtectedRoutes';

const page = () => {
  return (
    <ProtectedRoutes>
      <div>Job</div>
    </ProtectedRoutes>
  );
}

export default page
