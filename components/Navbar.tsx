import React from "react";
import Image from "next/image";
import x_white from "@/public/x_white.png";

type NavbarProps = {
  title: string;
};

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src={x_white}
              alt="logo"
              width={70}
              height={300}
              className="rounded-3xl p-4"
            />
          </div>
          <div className="flex">
            <a
              href="https://github.com/hellofaizan/xprofile"
              className="text-white rounded-full hover:bg-white hover:text-black px-6 py-2 mr-6 text-2xl font-bold"
            >
              Contribute
            </a>
            <a
              href="#"
              className="text-black rounded-full bg-white hover:bg-slate-700 hover:text-white px-6 py-2 text-2xl font-bold"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
