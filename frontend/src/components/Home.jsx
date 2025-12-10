import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home({ theme }) {
  const waveRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".anim-span",
      { opacity: 0 },
      { opacity: 1, stagger: 1, delay: 0.2 }
    );

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
      {(() => {
        const content = (
          <div className="w-full px-4 lg:px-20 max-w-6xl mx-auto flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="lg:h1 md:h6 sm:h3 xl:h2 mb-6">
                <span className="anim-span dark:text-n-1 text-n-4">Hi</span>
                <span ref={waveRef} className="anim-span inline-block">
                  👋
                </span>
                <br />
                <span className="anim-span dark:text-purple-300 text-purple-800">
                  I'm Istvan Szabo
                </span>
                <br />
                <span className="dark:text-purple-300 text-purple-800 anim-span">
                  Front End Developer
                </span>
                <br />
                <span className="anim-span dark:text-n-1 text-n-4">
                  Check out my story below
                </span>
              </h1>
            </div>
          </div>
        );

        const wrapperClass =
          "dark:bg-n-8 bg-n-1 min-h-screen w-full ml-10 mr-10";

        return theme === "dark" ? (
          <div className={wrapperClass}>{content}</div>
        ) : (
          <div className={wrapperClass}>{content}</div>
        );
      })()}
    </div>
  );
}

export default Home;
