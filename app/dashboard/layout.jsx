import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <Sidebar />
        <div className="flex flex-col self-start justify-center w-full">
          <Nav />
          {children}
        </div>
      </div>
    </>
  );
}
