import React, { useState } from "react";
import coverImage from "../../assets/cover/aboutme.jpg";
import HireMe from "../Modal/Hireme";
import SocialLink from "../SocialLink";

function About() {
  const [hireMe, setHireMe] = useState(false);

  const handleOnClose = () => {
    setHireMe(false);
  };

  return (
    <>
      <HireMe onClose={handleOnClose} visible={hireMe} />

      <section className="bg-white dark:bg-gray-900 mt-10 sm:ml-[20px] sm:mr-[20px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="flex flex-col mb-[20px] mt-[20px]">
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <img
                  src={coverImage}
                  className=" p-1 w-[130px] h-[140px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  alt="cover"
                />
              </div>
              <div className="font-light text-bold lg:text-2xl mt-[10px] mb-[10px]">
                <h1 id="about">CHANNCHEALY SEK</h1>
              </div>
              <div className="font-light text-bold lg:text-xl">
                <h3 id="about">FULL STACK DEVELOPER</h3>
              </div>
              <div className="mt-[10px] mb-[30px] text-gray-700 border p-2 border-emerald-700 w-[140px] text-lg hover:bg-green-700 hover:text-white cursor-pointer align-middle text-center">
                <button
                  className="ml-2"
                  onClick={() => {
                    setHireMe(true);
                  }}
                >
                  HIRE ME
                </button>
              </div>
              <div>
                <SocialLink
                  linkGitHub="https://github.com/channchealysek"
                  linkLinkedin="https://www.linkedin.com/in/channchealysek"
                  linkTwitter="https://twitter.com/channchealy_sek"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="font-light text-justify">
              <p>
                <span className="font-light text-bold lg:text-lg text-orange-400">
                  I'm a programmer, a graphics and user interface designer, and
                  a huge fan of photography. &nbsp;
                </span>
                Thanks to my studies as Coding BootCamp at Rice University -
                Susanne M. Glasscock School of Continuing Studies (Texas, US)
                and Computer Science at the National University of Management
                (Phnom Penh, Cambodia). I have acquired the knowledge to be able
                to appreciate a complete computing and graphical system. I have
                experience in HTML, CSS, JavaScript, JQuery, Responsive, design,
                React, Bootstrap TailwindCSS, APIs, Nodejs, Express, MySQL,
                Sequelize MongoDB, Mongoose, RESTAPI, GraphQL, Context API,
                Redux, and and some other cool libraries, and very comfortable
                with both front and back end development. I work primarily with
                modern MVC frameworks such as React. I typically automate my
                local development with build system like webpack, and regularly
                deploy my projects using docker. A lot of my work involves
                integration from designing database architecture to deploy a
                responsive web application to a production server fully
                automated, and test with best practice CD/CI architech to AWS.
              </p>
              <p><br />
                Now I am full-stack development to a web service and mobile
                device Node JS and React Native.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
