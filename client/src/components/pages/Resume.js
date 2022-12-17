import React from "react";
function Resume() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-[30px] mb-[20px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="flex flex-col">
          <div className="pt-5">
            <div className="grid justify-center items-center">
              <div className="flex flex-row items-baseline">
                Download my
                <span className=" py-2 ml-5 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
                  <a
                    href="https://drive.google.com/file/d/10UGhDDjlyOHZsocVcAR-48Qb2Tlh7sMp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="pt-10 pl-10">
            <section className="block max-w-full mb-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                EXECUTIVE PROFILE
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                With a background spanning organizational leadership and
                education, an extensively experienced Computer Science, and
                Information Technology strategist with a history of project
                management excellence steering and shaping the product
                development process. Highly adept at leading the Software
                Development Lifecyle through deploying a Servant Leader approach
                to aligning collaborative efforts. Heightened communication and
                teaching skills underline an ability to effect stakeholder
                management while guiding teams and workflows. A broad exposure
                to Systems Design and Architecture.
              </p>
            </section>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Achievment & Certificate
            </h5>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-5">
              <li className="mb-10 mt-5 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-yellow-600 dark:text-yellow-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Boot Camp Certificate - Nov 02, 2022
                  <span className="bg-yellow-400 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-300 dark:text-yellow-900 ml-3">
                    Latest
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Rice University - Susanne M. Glasscock School of Continuing
                  Studies | Houston, TX
                </time>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-yellow-600 dark:text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Master of Computer Science - 2010
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  National University of Management | Phnom Penh, Cambodia
                </time>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-yellow-600 dark:text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Technical Instructor Training - 2009
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  National Technical Training Institute | Phnom Penh, Cambodia
                </time>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-yellow-600 dark:text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Computer Science - 2005
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  National University of Management | Phnom Penh, Cambodia
                </time>
              </li>
              <li className="ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-yellow-600 dark:text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Competency Based Education and Training Certificate - 2012
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Asian Development Bank | Phnom Penh, Cambodia
                </time>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
