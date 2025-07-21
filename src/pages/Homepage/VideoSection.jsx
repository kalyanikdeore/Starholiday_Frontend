import React from "react";

export const VideoSection = () => {
  return (
    <section className="relative w-full h-[560px] md:h-[700px] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po"
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
    </section>
  );
};
