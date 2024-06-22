import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-neutral-900 min-h-svh">
      <section className="py-4 sm:p-6 md:p-8 bg-inherit">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
