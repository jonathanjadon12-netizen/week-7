import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] bg-radial from-[#FAF6F0] via-[#FAF7F2] to-[#EFEBE4] text-[#2A2421] flex flex-col font-sans selection:bg-[#EBDCCB] selection:text-[#5C3E21]">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;