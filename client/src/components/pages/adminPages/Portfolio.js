import React, { useState, useContext } from "react";
import Jumbotron from "../../Jumbotron";
import NewProject from "./Project/NewProject";
import EditProject from "./Project/EditProject";
import { AuthContext } from "../../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { QUERY_PROJECTS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import DeleteProject from "./Project/DeleteProject";

export default function Portfolio() {
  const { user } = useContext(AuthContext);
  if (!user) window.location.assign("/");
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setEditShowModal] = useState(false);
  const [showDeleteModul, setDeleteShowModal] = useState(false);
  const [filterData, setfilterData] = useState({});
  const [projectId, setProjectId] = useState({});

  const handleOnClose = () => {
    setShowModal(false);
    setEditShowModal(false);
    setDeleteShowModal(false);
    setfilterData({});
  };
  const handleEdit = (e)=>{
    const projectId = e.target.id;
    setProjectId(projectId);
    setEditShowModal(true);
    const projectFilter = data.getProjects.filter(getData => getData.id === projectId);
    setfilterData(projectFilter);
  }
  const handleDelete = (e)=>{
    const projectId = e.target.id;
    setProjectId(projectId);
    setDeleteShowModal(true);
  }

  return (
    <div>
      <Jumbotron>
        <h1>Portfolio</h1>

        <button
          className=" mt-3 mb-2 ml-2 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="authentication-modal"
          onClick={() => {
            setShowModal(true);
          }}
        >
          + Add New
        </button>
    
        
        <NewProject onClose={handleOnClose} visible={showModal} />
        <EditProject onClose={handleOnClose} visible={showEditModal} projectId={projectId} dataById={filterData} />
        <DeleteProject onClose={handleOnClose} visible={showDeleteModul} projectId={projectId} />

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
                    className="flex flex-col mb-5 p-3 min-h-[135px] max-w-[670px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
                      <div className=" text-gray-400 mt-[80px] ml-[3px] dark:text-gray-300 shadow-sm rounded bg-gray-600 font-normal text-lg">
                        <div className="flex h-full  md:flex-col gap-3 flex-col sm:mt-0 it items-center justify-center  p-2">
                          <button className="text-white hover:text-gray-900 dark:hover:text-blue-600 border pr-4 pl-4 bg-slate-700 hover:bg-white" id={project.id} onClick={(e)=>handleEdit(e)}>
                            {/* <FontAwesomeIcon icon={faEdit} size="lg" /> */} Edit
                          </button>
                          <button className="text-white hover:text-red-900 dark:hover:text-gray-500 border pr-1 pl-1 bg-slate-700 hover:bg-white" id={project.id} onClick={(e)=>handleDelete(e)}>
                            {/* <FontAwesomeIcon icon={faTrashCan} size="lg" /> */} Delete
                          </button>
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
      </Jumbotron>
    </div>
  );
}
