import React from "react";
import Image from "next/Image";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking widest uppercase text-white border-b">Skills</p>
        <h2 className="py-4 text-white">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/assets/html.png" height="64" width="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center  ">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/assets/css.png" height="64" width="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/javascript.png"
                  height="64"
                  width="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/assets/java.png" height="64" width="64" alt="/" />
              </div>
              <div className="text-white flex flex-col items-center justify-center ">
                <h3>JAVA</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/assets/react.png" height="64" width="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/tailwind.png"
                  height="64"
                  width="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/firebase.png"
                  height="35"
                  width="47"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-500 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/assets/html.png" height="64" width="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
