// pages/protected.js
import React from 'react';
import withAuth from '@/backend/withAuth';

const ProtectedPage = () => {
  return <div>This page is protected!</div>;
};

export default withAuth(ProtectedPage);
