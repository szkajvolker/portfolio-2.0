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
            start: "top 80%",
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
            start: "top 80%",
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
    <Section className="-mt-[6.25rem]" crosses crossesOffset custompaddings crossesSide id="skills">
      <div className="flex flex-col lg:flex-row justify-between ml-[4rem] mr-[4rem] pt-[5rem] mt-[5rem]">
        <div
          ref={hardSkillsRef}
          className="bg-black/30 backdrop-blur-md rounded-xl lg:m-[4rem] p-[2rem] w-full max-w-2xl lg:h-[350px]"
        >
          <h2 className="text-color-3 text-xl sm:text-2xl font-bold text-center mb-6">
            Hard skills
          </h2>
          <div className="text-color-3 text-base sm:text-lg transition-colors duration-300 text-center md:text-left lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-3">
            {hardSkills.map((skill, i) => (
              <div key={skill.id} className="flex flex-col">
                <div className="flex flex-row items-center">
                  <span className="material-symbols-outlined text-xl">{icons[skill.id]}</span>
                  <div className="border-4 border-n-6 w-full h-5 rounded-lg overflow-hidden bg-black/20">
                    <div
                      ref={(el) => (skillsRef.current[i] = el)}
                      className="h-full bg-color-3 transition-all duration-2000 ease-out"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <span className="ml-7 text-left">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={softSkillsRef}
          className="bg-black/30 backdrop-blur-md rounded-xl lg:m-[4rem] p-[2rem] mt-[5rem] mb-[6rem] w-full max-w-2xl lg:h-[350px]"
        >
          <h2 className="text-color-6 text-xl sm:text-2xl font-bold text-center mb-6">
            Soft skills
          </h2>
          <div className="text-color-6 text-base sm:text-lg transition-colors duration-300 text-center md:text-left lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-3">
            {softSkills.map((skill, i) => (
              <div key={skill.id} className="flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                  <span className="material-symbols-outlined text-xl">{icons[skill.id]}</span>
                  <div className="border-4 border-n-6 w-full h-5 rounded-lg overflow-hidden bg-black/20">
                    <div
                      ref={(el) => (skillsRef.current[hardSkills.length + i] = el)}
                      className="h-full bg-color-6 transition-all duration-2000 ease-out"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <span className="ml-7 text-left">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
