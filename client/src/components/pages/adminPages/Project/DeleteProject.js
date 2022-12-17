import React from "react";
import { DELETE_PROJECT } from "../../../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_PROJECTS } from "../../../../utils/queries";

export default function DeleteProject({ visible, onClose, projectId }) {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: [{ query: QUERY_PROJECTS }],
  });

  function onSubmit() {
    deleteProject({
      variables: {
        projectId,
      },
    });
    onClose();
  }
  function handleonClose() {
    onClose();
  }
  if (!visible) return null;
  return (
    <>
      <div
        data-modal-toggle="authentication-modal"
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
        flex justify-center items-center"
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[680px] -z-50">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={handleonClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-10 py-10 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              DELETE
            </h3>
            <div className="w-fullborder max-w-[680px] border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className=" px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <div>
                  <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Do you want to delete this project?
                  </label>
                </div>
                <div className="flex flex-col">
                <div className="flex flex-row gap-3 justify-end">
                  <div className="flex justify-end items-end">
                    <button
                      className="w-[130px] mt-3 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={(e) => onSubmit()}
                    >
                      Yes
                    </button>
                  </div>
                  <div className="flex justify-end items-end">
                    <button
                      className="w-[130px] mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={handleonClose}
                    >
                      No
                    </button>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
