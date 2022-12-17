import { useState} from "react";
import HireMe from "../Modal/Hireme";

function ContactForm() {

  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

  return (
    <section className="bg-white dark:bg-gray-900 mt-10 m-[10px]">
      <div className="">
        <div className="grid grid-rows justify-center">
          <div className="bg-white flex flex-row justify-center items-center h-[560px]">
            <div className="bg-blue-800 p-[30px] rounded-md">
              <div className="flex justify-between">
                <h2 className="text-white text-xl">Contact Information</h2>

              </div>
              <div className="mt-6 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-200 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-slate-200 text-xs">Name:</h2>
                  <p className="text-white text-xs">SEK, Channchealy</p>
                </div>
              </div>

              <div className="mt-4 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-200 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-slate-200 text-xs">Email:</h2>
                  <p className="text-white text-xs">
                    sek.channchealy@yahoo.com
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-200 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-slate-200 text-xs">Phone:</h2>
                  <p className="text-white text-xs">(713) 355 4501</p>
                </div>
              </div>

              <div className="mt-5 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-200 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-slate-200 text-xs">Address:</h2>
                  <p className="text-white text-xs">
                    Houston, TX 77064.
                  </p>
                </div>
              </div>
              <div>
              <input
                    type="submit"
                    onClick={() => setShowModal(true)}
                    value="Send message"
                    className="text-sm font-medium text-center  
                    rounded-lg sm:w-fit focus:ring-4 mt-[30px] hover:text-lg
                    focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                    py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800  transition duration-300"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HireMe
        onClose={handleOnClose}
        visible={showModal}
      />
    </section>
  );
}

export default ContactForm;
