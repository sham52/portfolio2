import React, { useState, useEffect } from "react";
import Image from "next/Image";
import Link from "next/Link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <>
            <Image width="100" height="50" src="/assets/sham.png" />
          </>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className=" text-gray-300 hover:text-white ml-10 text-sm uppercase hover:border-b ">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className=" text-gray-300 hover:text-white ml-10 text-sm uppercase hover:border-b  ">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className=" text-gray-300 hover:text-white  ml-10 text-sm uppercase hover:border-b ">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" text-gray-300 hover:text-white  ml-10 text-sm uppercase hover:border-b ">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className=" text-gray-300 hover:text-white  ml-10 text-sm uppercase hover:border-b ">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu
              className="text-white"
              onClick={handleNav}
              size={25}
            />
          </div>
        </div>
      </div>

      {/* SideBar */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-10 ease-out duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/assets/sham.png" width="87" height="50" alt="/" />
              <div
                onClick={handleNav}
                className="rounded-xl shadow-sm hover:shadow-lg transition-shadow shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 text-center italic">
              <p className=" text-slate-700 w-[85%] md:w-[90%] p-2 ">
                Jack Of All Trades
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase">
              <Link href="/">
                <li className="text-slate-700 py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="text-slate-700 py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="text-slate-700 py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="text-slate-700 py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="text-slate-700 py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-slate-900 font-bold">
                TO CONTACT ME
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 rounded-xl shadow-md shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/%C5%9Famil-altun%C4%B1%C5%9F%C4%B1k-9a65a5235/"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </div>

                <div className="p-3 rounded-xl shadow-md shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200">
                  <a target="_blank" href="https://github.com/Shamil52">
                    <FaGithub size={25} />
                  </a>
                </div>
                <div className="p-3 rounded-xl shadow-md shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200">
                  <AiOutlineMail size={25} />
                </div>
                <div className="p-3 rounded-xl shadow-md shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200">
                  <BsFillPersonLinesFill size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
