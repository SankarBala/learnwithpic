import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPhoneSquareAlt,
  FaEnvelope,
} from "react-icons/all";
import "./Home.scss";
import Splash from "./../../assets/images/splash.svg";
import AppDevelop from "./../../assets/images/mobileapp.jpg";
import WebDesign from "./../../assets/images/web.svg";
import { nav } from "./../../nav";

const Home = () => {
  useEffect(() => {
    const animateScreen = document.getElementsByClassName("animateScreen")[0];
    const blocks = document.getElementsByClassName("blocks");
    for (let i = 0; i < 100; i++) {
      animateScreen.innerHTML +=
        "<div class='blocks relative block w-10 h-10'></div>";
      blocks[i].style.animationDuration = Math.random() * 1 + "s";
      blocks[i].style.animationDelay = Math.random() + "s";
    }
  }, []);

  const [userEmail, setUserEmail] = useState("");

  const inputHandler = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="home-screen w-screen min-h-screen relative">
        <div className="animateScreen absolute top-0 left-0 w-full flex flex-wrap h-screen"></div>
        <div className="splash-screen w-full min-h-screen relative p-4">
          <header className="w-full h-auto md:flex justify-center">
            <div className="md:w-2/5 w-screen mb-2 p-4">
              <div className="w-max m-auto text-center md:text-left">
                <div className="text-5xl brand-name "> Sankar Bala</div>
                <div className="text-md  text-white font-mono ">
                  Proffessional FullStack Web Developer
                </div>
              </div>
            </div>
            <div className="md:w-3/5 w-screen flex justify-center items-center">
              <nav className="mainNav">
                <ul className="text-sm sm:text-xl md:2xl text-white">
                  {nav.map((item) => {
                    return (
                      <li key={item.name} className="inline p-0">
                        <NavLink
                          activeClassName="text-black"
                          className="cursor-pointer px-1 py-2 lg:px-3 hover:text-black"
                          to={item.to}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </header>

          <div className="w-full h-auto flex flex-wrap justify-center">
            <div className="md:w-2/5 w-screen">
              <img
                id="splashImage"
                src={Splash}
                alt="Web Design"
                className="w-72 sm:w-96 md:w-auto m-auto"
              />
            </div>
            <div className="md:w-3/5 w-screen h-max flex justify-center items-center p-3">
              <div className="w-max text-lg font-serif mb-3">
                <p className="text-white font-sans mb-1">
                  Welcome to my portfolio
                </p>
                <h2 className="text-white text-4xl">
                  Let's be familiar, I am Sankar
                </h2>
                <p className="text-white mb-5 text-md">
                  A Proffessional FullStack Web Developer
                </p>
                <p className="text-white font-sans">
                  My target is client's satisfaction and my satisfaction is to
                  fulfill client's target.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-auto pt-5 p-0 lg:px-10 text-center">
        <h1 className="p-10 text-center text-6xl text-green-600">Services</h1>
        <div className="flex flex-wrap">
          <div className="p-2 h-auto w-full sm:w-1/2 md:w-1/3 ">
            <div className="w-full h-full bg-gray-100 p-5 text-center">
              <img src={WebDesign} alt="web disign photo" className="h-96 mb-4 m-auto w-full" />
              <h2 className="text-2xl text-black">
                Web Design and Development
              </h2>
              <p className="text-gray-600 text-md mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Enim,
                dolorum.
              </p>
              <Link
                to="/"
                className="bg-green-800 px-5 py-1 my-4 text-center rounded-full hover:bg-purple-800 text-white"
              >
                Details
              </Link>
            </div>
          </div>
        
          <div className="p-2 h-auto w-full sm:w-1/2 md:w-1/3 ">
            <div className="w-full h-full bg-gray-100 p-5 text-center">
              <img src={AppDevelop} alt="app" className="h-96 mb-4 m-auto w-full" />
              <h2 className="text-2xl text-black">
                Mobile App Development
              </h2>
              <p className="text-gray-600 text-md mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Enim,
                dolorum.
              </p>
              <Link
                to="/"
                className="bg-green-800 px-5 py-1 my-4 text-center rounded-full hover:bg-purple-800 text-white"
              >
                Details
              </Link>
            </div>
          </div>

          <div className="p-2 h-auto w-full sm:w-1/2 md:w-1/3 ">
            <div className="w-full h-full bg-gray-100 p-5 text-center">
              <img src={AppDevelop} alt="app" className="h-96 mb-4 m-auto w-full" />
              <h2 className="text-2xl text-black">
                Search Engine Optimization
              </h2>
              <p className="text-gray-600 text-md mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Enim,
                dolorum.
              </p>
              <Link
                to="/"
                className="bg-green-800 px-5 py-1 my-4 text-center rounded-full hover:bg-purple-800 text-white"
              >
                Details
              </Link>
            </div>
          </div>


          <div className="p-2 h-auto w-full sm:w-1/2 md:w-1/3 ">
            <div className="w-full h-full bg-gray-100 p-5 text-center">
              <img src={AppDevelop} alt="app" className="h-96 mb-4 m-auto w-full" />
              <h2 className="text-2xl text-black">
                Digital Marketing
              </h2>
              <p className="text-gray-600 text-md mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Enim,
                dolorum.
              </p>
              <Link
                to="/"
                className="bg-green-800 px-5 py-1 my-4 text-center rounded-full hover:bg-purple-800 text-white"
              >
                Details
              </Link>
            </div>
          </div>


          <div className="p-2 h-auto w-full sm:w-1/2 md:w-1/3 ">
            <div className="w-full h-full bg-gray-100 p-5 text-center">
              <img src={AppDevelop} alt="app" className="h-96 mb-4 m-auto w-full" />
              <h2 className="text-2xl text-black">
                Wordpress Theme & Plugin Development
              </h2>
              <p className="text-gray-600 text-md mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Enim,
                dolorum.
              </p>
              <Link
                to="/"
                className="bg-green-800 px-5 py-1 my-4 text-center rounded-full hover:bg-purple-800 text-white"
              >
                Details
              </Link>
            </div>
          </div>



        </div>




        <h3 className="text-black text-center w-full text-md m-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          excepturi voluptates assumenda?
        </h3>
        <Link
          to="/"
          className="bg-green-800 px-2 py-1 my-4 text-center rounded hover:bg-purple-800"
        >
          Details
        </Link>
        <hr className="bg-gray-400 w-full my-8 h-1" />
      </div>

      <div className="bg-purple-900 p-4 text-white text-center md:text-left">
        <div className="container m-auto pt-5 p-0 md:p-5 block md:flex ">
          <div className="w-full h-full md:w-4/12 py-4 px-2">
            <h1 className="text-4xl mb-3">Sankar Bala</h1>
            <p className="text-md my-1">Full Stack web developer</p>
            <p className="text-sm my-5">
              Fill free to contact me. Just e-mail or message me I will reply
              soon. Thanks to visit my portfolio.
            </p>

            <ul className="text-yellow-600">
              <li className="inline-block mr-1 hover:text-white">
                <a
                  href="https://facebook.com/iamsankarbala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare className="text-3xl" />
                </a>
              </li>
              <li className="inline-block mr-1 hover:text-white">
                <a
                  href="https://twitter.com/sankar__bala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitterSquare className="text-3xl" />
                </a>
              </li>
              <li className="inline-block mr-1 hover:text-white">
                <a
                  href="https://www.youtube.com/channel/UCGuyXPC_QKNCMxXYwLvvwBA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutubeSquare className="text-3xl" />
                </a>
              </li>
              <li className="inline-block mr-1 hover:text-white">
                <a href="https://" target="_blank" rel="noreferrer">
                  <FaLinkedin className="text-3xl" />
                </a>
              </li>
              <li className="inline-block mr-1 hover:text-white">
                <a href="https://" target="_blank" rel="noreferrer">
                  <FaInstagramSquare className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full h-full md:w-3/12 py-4 px-2">
            <h1 className="text-4xl mb-4">Services</h1>
            <ul className="md:list-disc list-inside">
              <li className="py-1">Web Design</li>
              <li className="py-1">Web Development</li>
              <li className="py-1">UI/UX Design</li>
              <li className="py-1">Graphics Design</li>
              <li className="py-1">SEO</li>
              <li className="py-1">Digital Marketing</li>
            </ul>
          </div>

          <div className="w-full h-full md:w-5/12 py-4 px-2">
            <h1 className="text-4xl mb-4">Contact</h1>
            <ul className="">
              <li className="py-1 text-lg">
                <FaPhoneSquareAlt className="inline mb-1" /> 01742725606
              </li>
              <li className="py-1 pb-5 text-lg">
                <FaEnvelope className="inline" /> sankarbala232@gmail.com
              </li>
            </ul>
            <div className="h-8">
              <input
                className="outline-none text-green-500 font-bold  h-full  px-2 rounded-l-sm"
                type="text"
                onChange={inputHandler}
                value={userEmail}
              />
              <input
                className="text-black bg-green-600 h-full mt-2  px-2  font-semibold border-2 border-white cursor-pointer rounded-r-sm"
                type="button"
                value="Reply me"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black p-2">
        <div className="container text-center">
          <span className="text-white">
            Copyrighted &copy; and Developed by Sankar Bala
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
