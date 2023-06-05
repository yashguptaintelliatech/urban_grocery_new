import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaMicrosoft,
  FaPhoneAlt, 
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  return (
    <div>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 opacity-90 rounded shadow-sm bg-light_green" >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="p-5 border-b border-light_gray rounded-sm-y">
              <h3 className="text-2xl font-semibold text-center">Register</h3>
            </div>
            <div className="relative p-6 flex-auto">
              <form className="bg-white md:rounded px-8 pt-2 pb-4">
               
                <div className="mb-6 items-center flex ml-20 xs:ml-[12px]">
                  <FaPhoneAlt className="mr-2 mt-[-15px]" />
                  <input
                    className=" appearance-none border border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="num"
                    type="num"
                    placeholder="Enter Your Number"
                  />
                </div>
                <div className="items-center flex flex-row ml-20 xs:ml-4 justify-evenly">
                  <button className="rounded-full bg-lime xs:rounded-lg xs:text-xs  xs:h-8 md:w-full xs:w-full md:h-10 md:text-base md:font-medium inline-block hover:bg-orange font-medium ...">
                    Sign Up
                  </button>
                </div>

                <h2 className="text-center text-xl font-semibold md:mt-2 xs:mt-2">Or</h2>
                <div className="md:mt-4 xs:mt-2">
                  <ul className="font-medium">
                    <li className="border border-light_gray mb-2 shadow-lg">
                      <NavLink to={"/"}>
                        <a
                          to="/"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FaGithub className="text-darkgray text-lg" />
                          <span className="ml-3 text-light_gray xs:text-xs font-light">
                           Continue With Github
                          </span>
                        </a>
                      </NavLink>
                    </li>
                    <li className="border border-light_gray mb-2 shadow-lg">
                      <NavLink to={"/"}>
                        <a
                          to="/"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FaEnvelope className="text-darkgray text-lg" />
                          <span className="ml-3 text-light_gray xs:text-xs font-light">
                          Continue With Google
                          </span>
                        </a>
                      </NavLink>
                    </li>
                    <li className="border border-light_gray mb-2 shadow-lg">
                      <NavLink to={"/"}>
                        <a
                          to="/"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FaMicrosoft className="text-darkgray text-lg" />
                          <span className="ml-3 text-light_gray xs:text-xs font-light">
                          Continue With Microsoft
                          </span>
                        </a>
                      </NavLink>
                    </li>  
                  </ul>
                </div>
                <div className="flex border-t border-solid border-light_gray rounded-b"></div>
              </form>
            </div>
            
          </div>
        </div>

        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </div>
  );
};
