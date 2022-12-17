import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function portfolioCard({title, description, imageURL, githubURL, liveURL}) {
  return (
    <div>
        <div className="flex flex-col mb-10 p-3 min-h-[135px] max-w-[670px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex md:flex-row flex-col">
            <div>
              <img
                className=" max-h-[420px] p-2"
                src={imageURL}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <div className="flex flex-col justify-end">
                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {description}
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center font-normal">
              <div className="grid  text-gray-400 dark:text-gray-300 shadow-sm bg-slate-500 rounded p-2">
                <ul className="flex md:flex-col gap-3 flex-col sm:mt-0">
                  <li>
                    <button
                      className="text-white hover:text-gray-900 dark:hover:text-gray-500"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-red-700 hover:text-gray-900 dark:hover:text-gray-500"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-[130px] mt-3">
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                <a href={githubURL}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href={liveURL}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}
