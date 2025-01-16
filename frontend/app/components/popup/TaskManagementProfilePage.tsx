"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import userIcon from "@/app/public/user-icons/userIcon3Large.svg";
import arrowDownIcon from "@/app/public/arrowDownIcon.svg";
import arrowUpIcon from "@/app/public/arrowUpIcon.svg";
import activeIcon from "@/app/public/activeIcon.svg";
import email from "@/app/public/activeIcon.svg"
import copyIcon from "@/app/public/copyIconWhite.svg";
import TaskManagementProfileSettings from "./TaskManagementProfileSettings";


interface StatusOption {
  value: string;
  label: string;
  icon: any;
}

const TaskManagementProfilePage = () => {
  // Status dropdown state
  const [status, setStatus] = useState({
    label: "Update my status",
    icon: null,
  });
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const toggleStatus = () => setIsStatusOpen(!isStatusOpen);
  const options = [
    { value: 'Active', label: 'Active', icon: activeIcon },
    { value: 'Busy', label: 'Busy', icon: activeIcon },
    { value: 'On a call', label: 'On a call', icon: activeIcon },
    { value: 'In a meeting', label: 'In a meeting', icon: activeIcon },
    { value: 'Out for lunch', label: 'Out for lunch', icon: activeIcon },
  ];
  const statusOption = (option: StatusOption) => {
    setStatus(option);
    setIsStatusOpen(false);
  };

  // Popup visibility state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); 
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <div className="w-80 bg-white rounded-lg shadow-lg font-sans overflow-hidden">
      {/* Header with Gradient Purple Background */}
      <div className="h-28 bg-gradient-to-t from-[#9F61B1] to-[#181615] relative flex justify-center items-center">
        <div className="absolute top-8">
          <Image
            src={userIcon}
            alt="Profile Avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="h-126 p-6">
        {/* Profile Information */}
        <div className="text-left mt-14 mb-4">
          <h2 className="Montserrat text-2xl font-bold">User Name</h2>
          <p className="open-sans text-xl">Team - Job title</p>
        </div>

        <hr style={{ border: '1px solid lightgray', margin: '20px 0' }}/>

        {/* Update Status Section */}
        <div className="relative mt-4 mb-6">
          {/* Dropdown Status Header */}
          <button 
            className="w-full flex items-center justify-between Montserrat text-xl font-medium"
            onClick={toggleStatus}
          > 
            <span>
              {status.icon && (
                <Image 
                  src={status.icon} 
                  alt={status.label} 
                  width={20} 
                  height={20} 
                  className="inline mr-2"
                />
              )}
              {status.label}
            </span>
            {isStatusOpen ? 
              <Image src={arrowUpIcon} alt="Arrow up" /> : 
              <Image src={arrowDownIcon} alt="Arrow down" />
            }
          </button>

          {/* Dropdown Status Options */}
          {isStatusOpen && (
            <ul className="w-full mt-1 rounded-md bg-white shadow-sm Montserrat text-lg font-medium">
              {options.map((option) => (
                <li
                  key={option.value}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => statusOption(option)}
                >
                  <Image src={option.icon} alt={option.label} width={20} height={20} className="inline mr-2"/>
                  <span className="ml-2">{option.label}</span>
                </li>
              ))}
            </ul>
            )
          }

          {/* Current local time */}
          <p className="text-base text-gray-500 mt-2">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} local time</p>
        </div>

        {/* Contact Information Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold Montserrat mb-3">Contact Information</h3>
          <div className="flex items-center gap-4">
            <Image 
              src={email} 
              alt="Email icon" 
              width={20} 
              height={20}
            />
            <div>
              <p className="text-base flex items-center gap-2">E-mail</p>
              <div className="flex items-center">
                <a
                  href="mailto:username@gmail.com"
                  className="text-purple-500 font-semibold open-sans italic hover:underline"
                >
                  username@gmail.com
                </a>
                <Image
                  src={copyIcon}
                  alt="Copy Icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Image 
              src={email} 
              alt="Email icon" 
              width={20} 
              height={20}
            />
            <div>
              <p className="text-base flex items-center gap-2">Phone Number</p>
              <div className="flex items-center">
                <a
                  href="tel:01231234532"
                  className="text-purple-500 font-semibold open-sans italic hover:underline"
                >
                  01231234532
                </a>
                <Image
                  src={copyIcon}
                  alt="Copy Icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: '1px solid lightgray', margin: '20px 0' }}/>

        {/* Settings and Logout Section */}
        <div className="flex flex-col items-start gap-3">
          {/* Settings Popup */}
          <button onClick={toggleSettings} className="text-xl font-medium font-mono hover:underline">
            Settings
          </button>
          {isSettingsOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <TaskManagementProfileSettings closeSettings={toggleSettings}/>
            </div>
          )}

          <Link href="/logout" legacyBehavior>
            <a className="text-xl font-medium font-mono hover:underline">
              Log out of FlowerWorker
            </a>
          </Link>
        </div>
      </div>

      

      
    </div>
  );
};

export default TaskManagementProfilePage;