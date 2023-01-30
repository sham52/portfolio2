import React from "react";
import Link from "next/Link";
import Image from "next/Image";

const Project = ({ backgroundImg, title, projectUrl,detail}) => {
  return (
    <div className="transition relative flex items-center justify-center h-auto w-full shadow-md shadow-slate-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
      <Image
        className="rounded-md group-hover:opacity-20"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{detail}</p>
        <Link href={projectUrl}>
          <p className="text-center cursor-pointer bg-white py-3 rounded-lg text-slate-800 font-bold text-lg">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
