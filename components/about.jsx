import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-white border-b ">
            About
          </p>
          <h2 className="py-2 text-white">Who I Am</h2>

          <p className="py-2 text-white font-md">
            Ut rutrum dapibus quam non dapibus. Donec facilisis enim id risus
            ornare, at imperdiet ante ultricies. Mauris blandit, enim malesuada
            ultrices blandit, leo purus bibendum dui, eget molestie est sapien
            in diam. Nam iaculis urna vitae neque interdum tincidunt. Aliquam
            blandit porttitor nibh, sed vehicula sem ultrices at. Fusce nec
            ipsum non urna gravida vestibulum et in neque. Sed varius tellus vel
            blandit interdum. Praesent tristique, purus eget fermentum mollis,
            urna velit convallis lacus, eu iaculis leo erat quis quam. Nullam
            dapibus, nunc non efficitur malesuada, eros urna tincidunt lorem,
            quis bibendum elit augue nec leo. Integer ornare venenatis
            facilisis. Phasellus sit amet dui est. Aliquam metus metus,
            venenatis sed massa et, cursus tempor arcu. Proin eu lectus in dui
            suscipit luctus eu ut sapien. Curabitur mattis hendrerit nunc non
            porta. Aenean fermentum sagittis sapien, vitae commodo lectus
            aliquet ac. Fusce non est quis ante vulputate pellentesque in in
            arcu. Maecenas porta ut augue eu sodales. Morbi tristique quis ante
            vitae egestas. Integer vulputate dolor hendrerit erat aliquet, nec
            gravida eros porttitor.
          </p>

          <p className="hover:text-white py-2 text-gray-300 underline cursor-pointer">
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
