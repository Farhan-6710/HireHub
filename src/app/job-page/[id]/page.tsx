import ProtectedRoutes from '@/app/components/extras/ProtectedRoutes';
import React from 'react'

const page = () => {
  return (
    <ProtectedRoutes>
      <div>Job-page</div>
    </ProtectedRoutes>
  );
}

export default page
