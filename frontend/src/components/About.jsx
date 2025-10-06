import profile2 from "../assets/images/profile2.jpg";
import { aboutMe } from "../constants";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pictureRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pictureRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: pictureRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center" id="about">
      <div className="flex flex-col lg:flex-row mx-auto gap-10 items-center justify-center">
        <div className="max-w-xs">
          <img
            id="picture"
            src={profile2}
            className="rounded-xl border-2 border-black shadow-lg shadow-black max-w-xs"
            alt="profilepic"
            ref={pictureRef}
          />
        </div>

        <div
          className="border-2 border-n-6 shadow-xl animate-shadow-pulse max-w-2xl p-2 m-5"
          ref={textRef}
        >
          <p
            className="text-sm lg:text-xl dark:text-n-3 text-n-6 dark:bg-n-8 p-6 leading-relaxed font-code"
            id="text"
          >
            {aboutMe}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
