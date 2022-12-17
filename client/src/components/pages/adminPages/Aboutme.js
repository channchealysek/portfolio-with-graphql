import React from "react";
import Jumbotron from "../../Jumbotron";

export default function Aboutme() {
  return (
    <div>
      <Jumbotron>
        <h1>Aboutme</h1>
        <form>
          <div className="w-full mb-4 border mt-5 max-h-[335px] max-w-[670px] border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label className="sr-only">
                Tell about your selft.
              </label>
              <textarea
                id="aboutme"
                rows="12"
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
      </Jumbotron>
    </div>
  );
}
