import React from 'react'
import ProtectedRoutes from '../components/extras/ProtectedRoutes';

const page = () => {
  return (
    <ProtectedRoutes>
      <div>post a job</div>
    </ProtectedRoutes>
  );
}

export default page
