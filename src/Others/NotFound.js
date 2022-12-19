import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from '../Images/not-found.jpg';

const NotFound = () => {
  return (
      <section className="flex items-center h-full bg-gray-900 text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <img className="mix-blend-multiply md:w-2/3 mx-auto" src={notFoundImg} alt="" />
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              className="px-5 py-3 font-semibold rounded bg-violet-400 text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
  );
};

export default NotFound;
