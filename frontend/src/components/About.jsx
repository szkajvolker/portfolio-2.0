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
    <Section className="-mt-[6.25rem]" id="about">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          id="picture"
          src={profile2}
          className="max-w-xl  w-[250px] lg:w-[320px] rounded-xl  mx-auto mb-8 mt-8"
          alt="profilepic"
          ref={pictureRef}
        />
        <div ref={textRef}>
          <div className="border-2 border-n-6 shadow-xl animate-shadow-pulse">
            <p
              className="text-lg md:text-xl lg:text-2xl text-n-3 bg-n-8 p-6 leading-relaxed font-code"
              id="text"
            >
              {aboutMe}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
