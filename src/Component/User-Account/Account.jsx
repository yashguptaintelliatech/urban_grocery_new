import React from "react";
import {  FaBell, FaClone, FaExchangeAlt, FaExclamationCircle, FaHeadphonesAlt, FaHome, FaRegAddressBook, FaRegListAlt, FaShieldAlt, FaShoppingCart, FaTruckPickup, FaUnlock, FaWallet, FaWpforms, FaWrench } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Account = () => {
  return (
    <>
      <div className="relative">
        <aside
          id="separator-sidebar"
          className="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="font-medium">
              <li>
              <NavLink to={"/"} >
                <a
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaHome className="text-darkgray text-lg"/>
                  <span className="ml-3 text-lightgray font-normal">Home</span>
                </a>
                </NavLink> 
              </li>
              <li>
                <NavLink to={"/mycart"}>
                <a
                  to=""
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <FaShoppingCart className="text-darkgray text-lg" />
                  <span className="flex-1 ml-3 text-lightgray font-normal">Cart</span>
                </a>
                </NavLink>
                
              </li>
              <li>
                <a
                  to="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <FaBell className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Notification</span>
                </a>
              </li>
              <li>
                <a
                  to="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <FaTruckPickup className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Your Orders</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <FaWallet className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Wallet History</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <FaExchangeAlt className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3 text-lightgray font-normal">Transaction History</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <FaUnlock className="text-darkgray text-lg" />
                  <span className="flex-1 ml-3  text-lightgray font-normal">Change Password</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                <FaWrench className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Manage Password</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <FaHeadphonesAlt className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Support</span>
                </a>
              </li>
        
            </ul>
            <ul className="pt-4 mt-4  font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <FaWpforms className="text-darkgray text-lg"/>
                  <span className="ml-4  text-lightgray font-normal">Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                 <FaRegAddressBook className="text-darkgray text-lg"/>
                  <span className="ml-3  text-lightgray font-normal">Contact-Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
         
               <FaExclamationCircle className="text-darkgray text-lg"/>
                  <span className="ml-3  text-lightgray font-normal">About Us</span>
                </a>
              </li>
             
              <li>
                <a
                  to="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaClone className="text-darkgray text-lg" />
                  <span className="flex-1 ml-3  text-lightgray font-normal">FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                <FaRegListAlt className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Tearm and Conditons</span>
                </a>
              </li>
              <li>
                <a
                  to="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                <FaShieldAlt className="text-darkgray text-lg"/>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3  text-lightgray font-normal">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};
