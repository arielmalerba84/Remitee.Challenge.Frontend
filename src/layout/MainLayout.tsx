// src/layout/MainLayout.tsx
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 flex justify-center items-start p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
