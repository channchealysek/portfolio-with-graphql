import React from "react";
import Jumbotron from "../../Jumbotron";

export default function Resume() {
  return (
    <div>
      <Jumbotron>
        <h1>RESUME</h1>
        <div className="mt-5 text-sm ml-3">EXECUTIVE PROFILE</div>
        <form>
          <div className="w-full mb-4 border mt-2 max-h-[335px] max-w-[670px] border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label className="sr-only">Tell about your selft.</label>
              <textarea
                id="aboutme"
                rows="8"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a about your selft..."
                required
              />
            </div>
            <div className="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Save
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10 text-sm ml-3">Achievment & Certificate</div>
        <div className=" text-gray-700 mt-3 ml-3 mb-3 border p-1 border-emerald-700 w-[140px] text-lg hover:text-green-600 cursor-pointer">
          <button className="ml-2">+ Add New</button>
        </div>
        <div className="flex flex-col mt-3 mb-10 p-3 max-h-[335px] max-w-[670px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="flex flex-col justify-end">
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </div>
              <div className="flex justify-end items-center font-normal ">
                <div className="flex flex-row text-gray-400 dark:text-gray-300 shadow-sm bg-slate-500 rounded p-2 space-x-5">
                  <div className="text-gray-50 text-3xl hover:text-3xl hover:text-green-600 cursor-pointer">
                    <ion-icon name="create-outline"></ion-icon>
                  </div>
                  <div className="text-gray-50 text-3xl hover:text-3xl hover:text-red-500 cursor-pointer">
                    <ion-icon name="trash-outline"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}
