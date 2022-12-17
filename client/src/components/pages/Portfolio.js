import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "./../../utils/queries";

function Portfolio() {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const bodyMockUP = (
    <section className="bg-white dark:bg-gray-900 mt-[20px] sm:ml-[20px] sm:mr-[20px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl"></div>
      <div className="text-bold lg:text-2xl ml-[15%]  mb-[20px] mt-[20px] ">
        Project Experiences
      </div>
      <div>
        {loading ? (
          <h1>loading projects...</h1>
        ) : (
          data.getProjects &&
          data.getProjects.map(
            (project) =>
              project.title !== "" && (
                <div
                  key={project.id}
                  className="flex flex-col mb-5 p-3 h-full mr-[15%] ml-[15%] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="flex md:flex-row flex-col">
                    <div className="flex flex-row justify-start items-start">
                      <img
                        className=" max-h-[180px] max-w-[140px] p-2"
                        src={project.imageURL}
                        alt=""
                      />
                      <div className="flex flex-row">
                        <div className="flex flex-col justify-between leading-normal">
                          <h5 className="mb-[10px] max-h-[30px] overflow-hidden text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {project.title}
                          </h5>
                          <div className="flex flex-col justify-end">
                            <div className="mb-3 max-h-[180px] overflow-hidden font-normal text-gray-700 dark:text-gray-400">
                              {project.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[30px] mt-2">
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href={project.githubURL}
                          className="text-gray-500 hover:text-blue-500 hover:text-xl dark:hover:text-white drop-shadow-lg shadow-gray-600/50"
                          target="blank"
                        >
                          <FontAwesomeIcon size="lg" icon={faGithub} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={project.liveURL}
                          className="text-gray-500 hover:text-blue-500 hover:text-xl dark:hover:text-white drop-shadow-lg shadow-gray-600/50"
                          target="blank"
                        >
                          <FontAwesomeIcon size="lg" icon={faLink} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )
          )
        )}
      </div>
    </section>
  );
  return bodyMockUP;
}
export default Portfolio;
