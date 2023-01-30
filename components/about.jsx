import React from "react";

const About = () => {
  return (
    <div id = "about"className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-slate-800 border-slate-800 border-b ">
            About
          </p>
          <h2 className="py-2 text-slate-800">Who I Am</h2>

          <p className="py-2 text-slate-800 font-md">
            Hi my name is "Omar Shamil". I was born in 2002 in Turkey. There is
            nothing much to talk about myself. All I can say is that I love
            creating beneficial products in all of my interests. I said
            "interests" 'cuz I'm also into music and playing guitar on my own
            Youtube Channel.
          </p>

          <p className="hover:text-slate-900 py-2 text-slate-500 underline cursor-pointer">
            Check out some of my latest videos.
          </p>
          <div className="w-[75%] h-auto m-auto flex border-8 border-slate-600 rounded-lg shadow-gray-400 shadow-md items-center justify-center">
            <h3>My Video Goes Here</h3>
            {/* <iframe
              className="aspect-auto md:aspect-square hover:aspect-square "
              width="1904"
              height="796"
              src="https://www.youtube.com/embed/vIYprhD46Bc"
              title="Sweater Weather - Sad Version - X - Wicked Game  [Guitar Cover] #StayHome"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
