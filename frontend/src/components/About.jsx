import profile2 from "../assets/images/profile2.jpg";
import { aboutMe } from "../constants";
import Section from "./Section";
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
    <Section id="about">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center px-10 mt-5 pt-2">
        <div className="max-w-xs ml-[2rem] mr-[2rem] pt-5">
          <img
            id="picture"
            src={profile2}
            className="rounded-xl"
            alt="profilepic"
            ref={pictureRef}
          />
        </div>

        <div
          className="border-2 border-n-6 shadow-xl animate-shadow-pulse lg:p-2 lg:max-w-2xl max-w-xs w-full ml-[4rem] mr-[4rem] "
          ref={textRef}
        >
          <p
            className="text-lg md:text-xl lg:text-2xl text-n-3 bg-n-8 p-6 leading-relaxed font-code"
            id="text"
          >
            {aboutMe}
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
