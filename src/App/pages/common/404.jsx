import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
        <div className="py-4 px-10 h-100 rounded-md shadow-xl bg-white">
          <h2 className="text-lg text-center text-red-500">
            404 PAGE NOT FOUND
            <Link
              className="ml-6 bg-blue-400 text-white py-1 px-3 rounded"
              to="/"
            >
              Go to home
            </Link>
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page404;
