import React from "react";
import propertyImg from "../public/assets/projects.png";

import ProjectItem from "./project";
const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-slate-800 tracking-widest uppercase text-xl border-b border-slate-800">
          {" "}
          Projects
        </p>
        <h2 className="text-slate-800">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title = "Still working on it" backgroundImg = {propertyImg} projectUrl="/" detail = "Wait till it's done"/>
          <ProjectItem title = "Still working on it" backgroundImg = {propertyImg} projectUrl="/" detail = "Wait till it's done"/>
          <ProjectItem title = "Still working on it" backgroundImg = {propertyImg} projectUrl="/" detail = "Wait till it's done"/>
          <ProjectItem title = "Still working on it" backgroundImg = {propertyImg} projectUrl="/" detail = "Wait till it's done"/>
        </div>
      </div>
    </div>
  );
};
export default Projects;
