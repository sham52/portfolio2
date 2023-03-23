import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-4 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest border-b ">About</p>
          <h2 className="py-2 text-center">Who I Am</h2>

          <p className="py-2 font-md text-center w-1/2 mx-auto">
            Hi my name is "Omar Shamil". I was born in 2002 in Turkey. There is
            nothing much to talk about myself. All I can say is that I love
            creating beneficial products in all of my interests. I said
            "interests" because I'm also into music and playing guitar on my own
            Youtube Channel.
          </p>

          <a
            className="transition-all mx-auto hover:text-slate-500 text-white border-b border-slate-500"
            href="https://www.youtube.com/channel/UCOI8aM3S3rOkDdWoq13oyyg"
            target="_blank"
          >
            Check out my latest videos
          </a>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="  w-[75%] h-[75%]  mx-auto my-8 border-4 border-slate-600 rounded-lg shadow-gray-400 shadow-md "
              src="https://www.youtube.com/embed/vIYprhD46Bc"
              title="Sweater Weather - Sad Version - X - Wicked Game  [Guitar Cover] #StayHome"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
