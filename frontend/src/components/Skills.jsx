import { useEffect, useRef } from "react";
import { softSkills } from "../constants";
import { hardSkills } from "../constants";
import { icons } from "../constants";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const hardSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    if (hardSkillsRef.current) {
      gsap.fromTo(
        hardSkillsRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: hardSkillsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (softSkillsRef.current) {
      gsap.fromTo(
        softSkillsRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: softSkillsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    hardSkills.forEach((skill, i) => {
      const el = skillsRef.current[i];
      if (el) {
        gsap.to(el, {
          width: `${skill.percentage}%`,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "restart none none reset",
          },
        });
      }
    });

    softSkills.forEach((skill, i) => {
      const el = skillsRef.current[hardSkills.length + i];
      if (el) {
        gsap.to(el, {
          width: `${skill.percentage}%`,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "restart none none reset",
          },
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen justify-center items-center" id="skills">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:translate-y-[10rem] p-[2rem]">
        <div
          ref={hardSkillsRef}
          className="bg-black/30 backdrop-blur-md rounded-xl lg:m-[4rem] p-[2rem] w-full max-w-2xl h-full"
        >
          <h2 className="text-blue-300 text-xl sm:text-2xl font-code text-center mb-6">
            Hard skills
          </h2>
          <div className="text-blue-300 text-base sm:text-lg transition-colors duration-300 text-center md:text-left lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-3">
            {hardSkills.map((skill, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-center font-code">{skill.name}</span>
                <div className="flex flex-row items-center">
                  <img
                    src={icons[skill.id]}
                    alt={skill.name}
                    className="w-8 h-8 mr-2 bg-gray-600 p-1 rounded-xl"
                  />
                  <div className="border-4 border-n-6 w-full h-5 rounded-lg overflow-hidden bg-black/20">
                    <div
                      ref={(el) => (skillsRef.current[i] = el)}
                      className="h-full bg-blue-300 transition-all duration-2000 ease-out"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={softSkillsRef}
          className="bg-black/30 backdrop-blur-md rounded-xl lg:m-[4rem] p-[2rem] w-full max-w-2xl h-full"
        >
          <h2 className="text-color-6 text-xl sm:text-2xl font-code text-center mb-6">
            Soft skills
          </h2>
          <div className="text-color-6 text-base sm:text-lg transition-colors duration-300 text-center md:text-left lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-3">
            {softSkills.map((skill, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-center font-code">{skill.name}</span>
                <div className="flex flex-row items-center">
                  <span className="material-symbols-outlined text-xl w-8 h-8 mr-2 bg-gray-600 p-1 rounded-xl">
                    {icons[skill.id]}
                  </span>
                  <div className="border-4 border-n-6 w-full h-5 rounded-lg overflow-hidden bg-black/20">
                    <div
                      ref={(el) => (skillsRef.current[hardSkills.length + i] = el)}
                      className="h-full bg-color-6 transition-all duration-2000 ease-out"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <span className="text-center font-code">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
