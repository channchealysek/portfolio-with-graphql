import React, { useContext } from "react";
import { AuthContext } from "../../utils/auth";
import logo from "../../assets/cover/logo.png";

export default function Navbar({ actionView }) {
  const { logout } = useContext(AuthContext);
  return (
    <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
      <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-2">
          <div className="flex items-center ml-[60px] mr-[110px] mb-[10px]">
            <img className="w-[60px] h-[60px] rounded-full" src={logo} alt="" />
          </div>

          <div>
            <button
              type="button"
              name="overview"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={actionView}
            >
              <ion-icon name="pie-chart-outline"></ion-icon>
              <span className="ml-3" name="overview">
                Overview
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              name="aboutme"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={actionView}
            >
              <ion-icon name="reader-outline"></ion-icon>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                About me
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              name="portfolio"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={actionView}
            >
              <ion-icon name="bag-outline"></ion-icon>
              <span className="ml-3  whitespace-nowrap">Portfolio</span>
              <span className="inline-flex ml-20 justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                6
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              name="resume"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={actionView}
            >
              <ion-icon name="clipboard-outline"></ion-icon>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Resume
              </span>
            </button>
          </div>
        </div>
        <div className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <div className="cursor-pointer">
            <button
              name="logout"
              onClick={logout}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <ion-icon name="log-out-outline"></ion-icon>
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
