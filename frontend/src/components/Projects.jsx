import { projects } from "../constants";
import { MdCode } from "react-icons/md";
import Button from "./Button";

function Projects() {
  return (
    <div className="min-h-screen px-4 py-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl shadow-xl dark:bg-black/40 bg-black/10 shadow-black/70 dark:shadow-purple-800/40 flex flex-col mb-10 p-2">
          <div className="shadow-md dark:shadow-purple-800/70 shadow-black/30 dark:text-color-1 text-n-4 flex flex-row items-center rounded-[10rem] mb-2 justify-center">
            <h2 className="lg:text-2xl text-sm font-code">Projects</h2>   
            <span>
              <MdCode className="lg:text-2xl text-sm"></MdCode>
            </span>
          </div>
       

          <ul className="flex flex-col lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-3 px-4">
          {projects.map((p) => (
            <li
              key={p.id}
              className="dark:bg-n-6 bg-n-5 dark:text-n-3 text-n-2  font-bold font-code rounded-lg p-4 shadow-md shadow-black/60 hover:dark:shadow-purple-800/70"
            >
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
    </div>
  );
}

export default Projects;
