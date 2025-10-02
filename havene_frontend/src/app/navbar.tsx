"use client";
import { Globe, ToggleRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return ( 
    <>
      <nav className="bg-white flex items-center justify-between ">
        <div className="-mt-4 ml-8 -mb-1">
          <Link href="/">
            <Image
              src="/haveneLogo.png"
              alt="site logo"
              width={105}
              height={89}
            />
          </Link>
        </div>

        <div className="flex gap-10">
          <a href="" className="text-black hover:text-gray-400 font-medium">
            HOME
          </a>
          <a href="" className="text-black hover:text-gray-400">
            OFFICES
          </a>
          <a href="" className="text-black hover:text-gray-400">
            AGENTS
          </a>
          <a href="" className="text-black hover:text-gray-400">
            ABOUT
          </a>
          <a href="" className="text-black hover:text-gray-400">
            CONTACT
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#ABA48D] pt-2.5 pb-2.5 px-6  text-white rounded-2xl hover:bg-gray-100 hover:text-black "
          >
            LOGIN
          </button>

          {open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">Login Form</h2>
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-2 w-full mt-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-2 w-full mt-2"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <div className="flex space-x-[2px]">
            <Globe size={24} color="#696969"></Globe>
          </div>
          <span className="text-[#696969] text-xl">EN</span>
          <div className="mr-8">
            <ToggleRight
              style={{ width: 50, height: 29, color: "#696969" }}
            ></ToggleRight>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
