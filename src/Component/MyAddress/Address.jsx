import React, { useState } from "react";
import DropdownMenu from "../AccountDropdown/DropdownMenu";
import { Form, NavLink } from "react-router-dom";
import {
  FaBell,
  FaHome,
  FaMapMarked,
  FaPlus,
  FaRegAddressBook,
  FaWallet,
} from "react-icons/fa";
import { AddressForm } from "./AddressForm";

export const Address = ({ isOpen, setIsOpen }) => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <div className="flex xs:w-20 sm:mr-3 md:w-24 h-[30px] rounded-lg md:px-2 md:mt-[-22px] bg-white">
        <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="md:flex md:flex-row">
        <div className="xs:w-72 xs:py-20 xs:px-1 md:h-full md:w-1/4 md:px-12 md:py-36 md:mt-10">
          <ul className="font-medium xs:invisible md:visible md:fixed">
            <li className="border border-light_gray mb-2 shadow-lg">
              <NavLink to={"/address"}>
                <a
                  to="/address"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaHome className="text-darkgray text-lg" />
                  <span className="ml-3 text-light_gray xs:text-xs font-light">
                    My Address
                  </span>
                </a>
              </NavLink> 
            </li>
            <li className="border border-light_gray mb-2 shadow-lg ">
              <NavLink to={"/myorder"}>
                <a
                  to="/myorder"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaRegAddressBook className="text-darkgray text-lg" />
                  <span className="flex-1 ml-3 text-lightgray xs:text-xs font-thin">
                    My Order
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="border border-light_gray mb-2 shadow-lg">
              <NavLink to={"/wallet"}>
                <a
                  to="/wallet"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaWallet className="text-darkgray text-lg" />
                  <span className="flex-1 ml-3  text-lightgray xs:text-xs font-normal">
                    My Wallet
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="border border-light_gray mb-2 shadow-lg">
              <NavLink to={"/"}>
                <a
                  to="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaBell className="text-darkgray text-lg" />
                  <span className="flex-1 ml-3  text-lightgray xs:text-xs font-normal">
                    Logout
                  </span>
                </a>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="md:w-3/4 xs:w-full md:mt-[-30px] xs:mt-[-270px]">
          <div className="mt-40">
            <div
              className="flex flex-row border border-light_gray py-3 px-3 w-[800px]"
              onClick={() => setFormOpen(!formOpen)}
            >
              <span className="cursor-pointer rounded-full border-2 border-lime text-lime py-1 px-1 text-xs">
                <FaPlus />
              </span>
              <button className="ml-6 mt-[-4px] text-lime">
                {" "}
                Add New Address
              </button>
            </div>
            <div className="border border-light_gray w-[800px] px-3 mt-2"> 
              <div className="flex flex-row mt-6 ">
                <span className="cursor-pointer">
                  <FaMapMarked />
                </span>
                <button className="ml-6 mt-[-4px]"> Work</button>
              </div>
              <div>
                <div className="flex flex-row gap-48">
                  <div className="">
                    <span className="ml-10 gap-2">Name</span>
                    <span className="ml-4 gap-2">Address</span>
                    <span className="ml-4 gap-2">City</span>
                    <span className="ml-4 gap-2">State</span>
                  </div>
                  <div>
                    <button>edit</button>
                    <button>delete</button>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div>{formOpen && <AddressForm />}</div>
    </>
  );
};
