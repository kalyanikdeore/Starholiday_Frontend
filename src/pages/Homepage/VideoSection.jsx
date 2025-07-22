import React from "react";

export const VideoSection = () => {
  return (
    <section className="relative shadow-2xl w-full h-[560px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};
