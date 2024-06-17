import React from "react";


interface AuthLayoutProps {
  children : React.ReactNode
};

const AuthLayout = ({ children } : AuthLayoutProps ) => {
  return (
    <main className="bg-neutral-900 min-h-screen">
      {children}
    </main>
  );
};

export default AuthLayout;
