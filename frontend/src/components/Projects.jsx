import { projects } from "../constants";
import { MdCode } from "react-icons/md";
import Section from "./Section";
import Button from "./Button";

function Projects() {
  return (
    <Section crossesOffset custompaddings id="projects">
      <div className="rounded-xl shadow-lg p-6 flex flex-col justify-center items-center max-w-3xl gap-8 mx-auto mb-10">
        <div className="rounded-xl shadow-lg p-6 justify-center font-bold w-full">
          <div className="border-2 border-color-1 text-color-3 flex flex-col items-center rounded-[10rem] mb-6">
            <h2 className="text-2xl">Projects</h2>
            <MdCode className="text-xl"></MdCode>
          </div>
        </div>

        <ul className="flex flex-col lg:grid lg:grid-cols-2 lg:w-full gap-3">
          {projects.map((p) => (
            <li key={p.id} className="bg-n-6 rounded-lg p-4 shadow hover:shadow-white/60">
              <div className="flex flex-col items-center">
                <h3>{p.title}</h3> <span>Desctiption: {p.description}</span>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <span>Status: {p.status}</span>
                <span>{p.status ? "Done ✅" : "In Progress 🔴"}</span>
              </div>
              {p.repo && (
                <div className="flex  justify-center gap-2 mt-2">
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
    </Section>
  );
}

export default Projects;
