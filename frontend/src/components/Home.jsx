import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

function Home() {
  const waveRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".anim-span", { opacity: 0 }, { opacity: 1, stagger: 1, delay: 0.2 });

    tl.to(
      waveRef.current,
      {
        keyframes: [
          { rotate: 14 },
          { rotate: -8 },
          { rotate: 14 },
          { rotate: -4 },
          { rotate: 10 },
          { rotate: 0 },
        ],
        duration: 2.5,
        repeat: -1,
        ease: "linear",
        transformOrigin: "70% 70%",
      },
      "<+1"
    );
  });

  return (
    <div className="w-full flex items-center justify-center" id="home">
      <BackgroundBeamsWithCollision className="bg-n-8 min-h-screen w-full ml-10 mr-10">
        <div className="w-full px-4 lg:px-20 max-w-6xl mx-auto">
          <div className="relative z-1 text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] lg:mt-[6rem]">
            <h1 className="h1 mb-6">
              <span className="anim-span">Hi</span>
              <span ref={waveRef} className="anim-span inline-block">
                👋
              </span>
              <br />
              <span className="anim-span text-purple-300">I'm Istvan Szabo</span>
              <br />
              <span className="text-purple-300 anim-span">Front End Developer</span>
              <br />
              <span className="anim-span">Check out my story below</span>
            </h1>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default Home;
