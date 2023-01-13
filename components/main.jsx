import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="uppercase text-sm tracking-widest text-gray-100">
            JACK OF ALL TRADES
          </p>
          <Image
            className="my-2 rounded-full border-4 border-slate-300 hover:scale-105 ease-in duration-200"
            height="250"
            width="250"
            src="/assets/shamil.jpg"
          />
          <h1 className="text-white">
            Hi, I'm <span className="text-slate-900">Shamil</span>
          </h1>
          <h1 className="text-white py-2">An Engineering Student</h1>
          <p className="text-lg py-4 text-white max-w-[70%] m-auto">
            Hi! My name is Shamil. I am a student at{" "}
            <a
              className="italic"
              href="https://www.tedu.edu.tr/en"
              target="_blank"
            >
              TED University
            </a>{" "}
            in the Department of Engineering. I am really into software
            development. I'm working on both responsive web, front-end and
            back-end technologies lately. Currently, I am learning Javascript
            (React, Next) and Java. I'm also playing guitar on my Youtube
            channel if you're interested.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="mx-2 bg-blue-900 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/%C5%9Famil-altun%C4%B1%C5%9F%C4%B1k-9a65a5235/"
              >
                <FaLinkedinIn className="text-white" size={25} />
              </a>
            </div>
            <div className="mx-2 bg-indigo-700 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <a target="_blank" href="https://github.com/Shamil52">
                <FaGithub className="text-white" size={25} />
              </a>
            </div>
            <div className="bg-red-700 mx-2 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <a
                href="https://www.youtube.com/channel/UCOI8aM3S3rOkDdWoq13oyyg"
                target="_blank"
              >
                <FaYoutube className="text-white" size={25} />
              </a>
            </div>
            <div className="bg-blue-600 mx-2 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <a href="https://twitter.com/guitaristeen" target="_blank">
                <FaTwitter className="text-white" size={25} />
              </a>
            </div>
            {/* <div className="rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <AiOutlineMail size = {25}/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;