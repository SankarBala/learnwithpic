import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from 'react-icons/all';

const Breadcrumb = (props) => {

  const link = props.link || useLocation().pathname;

  return (
    <nav className="flex justify-between py-3 px-5 text-gray-900 bg-gray-200" aria-label="Breadcrumb">
      <div classname="text-black">{props.pageName}</div>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {link
          .replace(/^\/+|\/+$/g, "")
          .split("/")
          .map((item, index, arr) => {
            if (index < link.replace(/^\/+|\/+$/g, "").split("/").length - 1) {
              return (
                <li key={index}>
                  <div className="flex items-center">
                    <Link to={`/${arr.slice(0, index + 1).join("/")}`}
                      className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      {item}
                    </Link>
                    <span className="ml-2 mt-1">
                      <HiOutlineChevronDoubleRight />
                    </span>
                  </div>
                </li>
              );
            } else {
              return (
                <li aria-current="page" key={index}>
                  <div className="flex items-center">
                    <span className="text-gray-500 dark:text-gray-500">{item}</span>
                  </div>
                </li>
              );
            }
          })}
      </ol>
    </nav>
  );
};


export default Breadcrumb;





