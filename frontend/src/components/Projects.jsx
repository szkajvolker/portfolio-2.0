import { projects } from "../constants";
import { MdCode, MdOpenInNew } from "react-icons/md";
import Section from "./Section";
import Button from "./Button";
import { GlowingEffect } from "./ui/glowingeffect";

function Projects() {
  return (
    <Section className="-mt-[6.25rem]" crossesOffset custompaddings id="projects">
      <div className="rounded-xl shadow-lg p-6 flex justify-center items-center max-w-2xl gap-8 mx-auto">
        <div className=" rounded-xl shadow-lg p-6 justify-center font-bold">
          <div className="border-2 border-color-1 text-color-3 flex flex-col items-center rounded-[10rem] mb-6">
            <h2 className="">Projects</h2>
            <MdCode className="text-xl"></MdCode>
          </div>

          <ul className="flex flex-col gap-6">
            {projects.map((p) => (
              <li key={p.id} className="bg-n-6 rounded-lg p-4 shadow">
                <strong>{p.title}</strong>: <span>{p.description}</span>
                <div className="flex gap-2 mt-2">
                  <span>Status: {p.status}</span>
                  <span>{p.status ? "Done 🟢" : "In Progress 🔴"}</span>
                </div>
                {p.repo && (
                  <div className="flex items-center gap-2 mt-2">
                    {""}

                    <Button className="animate-float" white>
                      <a href={p.repo} target="_blank" rel="noopener noreferrer">
                        Checkout project on GitHub
                      </a>
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
