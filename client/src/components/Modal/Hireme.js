import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";
import { mailService } from "../../utils/mailConfig";

export default function HireMe({ visible, onClose }) {
  const form = useRef();
  const initialValues = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSumbit, setIsSummit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value || "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    sendEmail(e);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        mailService.SERVICE_KEY,
        mailService.TEMPLATE_KEY,
        form.current,
        mailService.API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSummit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function handleonClose() {
    onClose();
    setFormValues(initialValues);
    setIsSummit(false);
    setFormErrors({});
  }

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!validateEmail(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }

    return errors;
  };

  const msgIsSummited = (
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
              Confirmation
            </h3>
            <div className="w-fullborder max-w-[680px] border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className=" px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <div>
                  <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <p>Your message was send. I will contact you sortly.</p>{" "}
                    <br />
                    <br />
                    Thank you so much.
                  </label>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-3 justify-end">
                    <div className="flex justify-end items-end">
                      <button
                        className="w-[130px] mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleonClose}
                      >
                        Close
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

  const msgMessage = (
    <form ref={form} onSubmit={sendEmail}>
      <div
        data-modal-toggle="authentication-modal"
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="relative m-[10px] bg-white rounded-lg shadow dark:bg-gray-700 w-[680px] -z-50">
          <button
            type="button"
            className="absolute top-[10px] right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
              Get In Touch
            </h3>
            <div className="w-fullborder max-w-[680px] border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className=" px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <div>
                  <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Your name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-xs text-red-500 pb-2 pl-3">
                  {formErrors.name}
                </div>
                <div>
                  <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="E-mail address"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <div className="text-xs text-red-500 pb-2 pl-3">
                    {formErrors.email}
                  </div>
                </div>
                <div>
                  <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="9"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Need a quote for your project? Drop me a message."
                    value={formValues.message}
                    onChange={handleChange}
                  />
                  <div className="text-xs text-red-500 pb-2 pl-3">
                    {formErrors.message}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-3 justify-end">
                    <div className="flex justify-end items-end">
                      <button
                        name="cancel"
                        className="w-[130px] mt-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleonClose}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="flex justify-end items-end">
                      <button
                        className="w-[130px] mt-3 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleSubmit}
                      >
                        {" "}
                        Send{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  if (!visible) return null;

  return isSumbit ? msgIsSummited : msgMessage;
}
