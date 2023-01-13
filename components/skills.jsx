import React from "react";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"></div>
      <p className="text-xl tracking widest uppercase text-slate-700">Skills</p>
      <h2 className="py-4">What I Can Do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
    </div>
  );
};

export default Skills;
