import { projects } from "../constants";
import { MdCode } from "react-icons/md";
import Button from "./Button";

function Projects() {
  return (
    <div className="min-h-screen px-4" id="projects">
      <div className="rounded-xl shadow-lg flex flex-col justify-center items-center mx-auto mb-10 max-w-md lg:max-w-4xl">
        <div className="rounded-xl shadow-lg p-6 justify-center font-bold w-full">
          <div className="border-2 border-color-1 text-color-3 flex flex-col items-center rounded-[10rem] mb-6">
            <h2 className="text-2xl">Projects</h2>
            <MdCode className="text-xl"></MdCode>
          </div>
        </div>

        <ul className="flex flex-col lg:grid lg:grid-cols-2 w-full gap-3 px-2">
          {projects.map((p) => (
            <li key={p.id} className="bg-n-6 rounded-lg p-4 shadow hover:shadow-white/60">
              <div className="flex flex-col items-center">
                <h3>{p.title}</h3> <span>Description: {p.description}</span>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <span>Status: {p.status}</span>
                <span>{p.status ? "Done ✅" : "In Progress 🔴"}</span>
              </div>
              {p.repo && (
                <div className="flex  justify-center gap-2 mt-2">
                  {""}

                  <Button className={`animate-float ${!p.status ? "disabled" : ""}`} white>
                    <a
                      href={p.repo}
                      className={`${!p.status ? "pointer-events-none text-gray-500" : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Checkout live demo
                    </a>
                  </Button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
