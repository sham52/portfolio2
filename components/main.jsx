import React from "react";
import Image from "next/Image";
import {
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen pt-20 text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="uppercase text-sm tracking-widest content-none border-b   text-white border-slate-500 ">
            JACK OF ALL TRADES
          </p>
          <Image
            className="my-2 rounded-full border-4 border-slate-500 hover:scale-105 ease-in duration-200"
            height="250"
            width="250"
            src="/assets/shamil.jpg"
          />
          <h1 className="text-white">
            Hi, I'm <span className="text-cyan-500">Shamil</span>
          </h1>
          <h1 className="text-white py-2">
            <TypeAnimation
              sequence={[
                "A Student.", // Types 'One'
                2000, // Waits 1s
                "A Coder.", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "A Guitarist.", // Types 'Three' without deleting 'Two'
                ,
                2000,
                "A Content Creator.",
                2000,
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            Hi! My name is Shamil. I am a student at 
            <a
              className="italic"
              href="https://www.tedu.edu.tr/en"
              target="_blank"
            >
              &nbsp;TED University&nbsp;
            </a>
            in the Department of Engineering. I am really into software
            development. I'm working on both responsive web, front-end and
            back-end technologies lately. Currently, I am learning Javascript
            (React, Next) and Java. I'm also playing guitar on my Youtube
            channel if you're interested.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4 ">
            <div className="mx-2 bg-[#0A66C2] rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300 ">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/%C5%9Famil-altun%C4%B1%C5%9F%C4%B1k-9a65a5235/"
              >
                <FaLinkedinIn className="text-white" size={25} />
              </a>
            </div>
            <div className="mx-2 bg-indigo-600 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <a target="_blank" href="https://github.com/Shamil52">
                <FaGithub className="text-white" size={25} />
              </a>
            </div>
            <div className="bg-[#FF0000] mx-2 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <a
                href="https://www.youtube.com/channel/UCOI8aM3S3rOkDdWoq13oyyg"
                target="_blank"
              >
                <FaYoutube className="text-white" size={25} />
              </a>
            </div>
            <div className="bg-[#00acee] mx-2 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300">
              <a href="https://twitter.com/guitaristeen" target="_blank">
                <FaTwitter className="text-white" size={25} />
              </a>
            </div>
            <div className="bg-[#5865F2] mx-2 rounded-xl shadow-md hover:shadow-lg p-5 cursor-pointer hover:scale-[110%] ease-in duration-300 ">
              <a href="https://discord.gg/MQmDAKY" target="_blank">
                <FaDiscord
                  className="text-[white]"
                  href="https://discord.gg/MQmDAKY"
                  size={25}
                />
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
