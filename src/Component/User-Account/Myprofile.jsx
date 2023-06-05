import React from "react";
import {
  FaBell,
  FaClone,
  FaExchangeAlt,
  FaExclamationCircle,
  FaHeadphonesAlt,
  FaHome,
  FaRegAddressBook,
  FaRegListAlt,
  FaShieldAlt,
  FaShoppingCart,
  FaTruckPickup,
  FaUnlock,
  FaWallet,
  FaWpforms,
  FaWrench,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Myprofile = () => {
  return (
    <>
      <div className="container mx-20 grid md:grid-cols-5 md:gap-2">
        <NavLink to={"/"}>
          <div className="max-w-sm p-6 mt-24 w-32 h-20 bg-white border border-light_gray hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaHome className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm  text-darkgray dark:text-gray-400">
              Home
            </p>
          </div>
        </NavLink>

        <NavLink to={"/mycart"}>
          <div className="max-w-sm p-6 mt-24 w-32 h-20 border border-light_gray hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaShoppingCart className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-darkgray dark:text-gray-400">
              Cart
            </p>
          </div>
        </NavLink>

        <NavLink>
          <div className="max-w-sm p-6 mt-24 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaBell className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Notification
            </p>
          </div>
        </NavLink>
        <NavLink>
          <div className="max-w-sm p-6 mt-24 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaTruckPickup className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Your Order
            </p>
          </div>
        </NavLink>

        <NavLink>
          {" "}
          <div className="max-w-sm p-6 mt-24 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaWallet className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Wallet
            </p>
          </div>
        </NavLink>

        <NavLink>
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaExchangeAlt className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Transaction
            </p>
          </div>
        </NavLink>

        <NavLink>
          {" "}
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaUnlock className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="mb-3 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Change Password
            </p>
          </div>
        </NavLink>

        <NavLink>
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaWrench className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="mb-3 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Manage Address
            </p>
          </div>
        </NavLink>

        <NavLink>
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaHeadphonesAlt className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Support
            </p>
          </div>
        </NavLink>
      </div>

      <hr className="mt-10 md:w-[1200px] md:ml-[50px] text-light_gray" />

      <div className="grid md:grid-cols-6 mx-20">
        <NavLink>
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaWpforms className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Blog
            </p>
          </div>
        </NavLink>

        <NavLink>
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaRegAddressBook className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              Contact Us
            </p>
          </div>
        </NavLink>

        <NavLink>
          {" "}
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaExclamationCircle className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
              About Us
            </p>
          </div>
        </NavLink>

        <NavLink>
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaRegListAlt className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="mb-3 font-normal text-sm text-center text-gray-700 dark:text-gray-400">
              Tearm and Conditons
            </p>
          </div>
        </NavLink>

        <NavLink>
          {" "}
          <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaShieldAlt className="text-2xl mt-[-10px] ml-[25px]" />
            <p className="m-1 font-normal text-sm text-center text-gray-700 dark:text-gray-400">
              FAQ
            </p>
          </div>
        </NavLink>

        <div className="max-w-sm p-6 md:mt-10 w-32 h-20 border border-light_gray  hover:border-light_green rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <FaShieldAlt className="text-2xl mt-[-10px] ml-[25px]" />
          <p className="m-1 font-normal text-center text-sm text-gray-700 dark:text-gray-400">
            Logout
          </p>
        </div>
      </div>
    </>
  );
};
