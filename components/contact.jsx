import React from "react";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto  px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] border-b border-slate-800">
          Contact
        </p>
        <h2>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-lg p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                /> 
              </div>
              <div>
                <h2 className = "py-2">Shamil</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">I am available for freelance or part-time positions. Contact me and let's talk.</p>
              </div>
              <div>
                <p className="uppercase pt-8"></p>
                <div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
