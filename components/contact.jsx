import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/Link";
const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-slate-800 border-b border-slate-800 ">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-md shadow-gray-400 rounded-lg p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                  alt="/"
                  className="rounded-lg hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Shamil</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or part-time positions. Let me
                  now if you're interested.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-lg lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-xl shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
