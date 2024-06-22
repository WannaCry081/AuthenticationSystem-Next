import React from "react";

interface DashboardLayoutProps {
  children : React.ReactNode;
}

const DashboardLayout = ({ children } : DashboardLayoutProps ) => {
  return (
    <main className="bg-neutral-900 min-h-svh">
      <section className="py-4 sm:p-6 md:p-8 bg-inherit">
        {children}
      </section>
    </main>
  );
}

export default DashboardLayout;