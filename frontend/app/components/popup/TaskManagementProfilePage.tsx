"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import userIcon from "@/app/public/user-icons/userIcon3.svg";
import TaskManagementProfileSettings from "./TaskManagementProfileSettings";

const TaskManagementProfilePage = () => {
  const [status, setStatus] = useState("Update my status");
  // Popup visibility state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); 

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    // <div className="w-80 bg-white rounded-lg shadow-lg font-sans overflow-hidden">
    <div className="w-80 p-6 rounded-lg shadow-lg bg-white font-sans">

      {/* Header with Purple Background */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-24 flex justify-center items-center">
        <Image
          src={userIcon}
          alt="Profile Avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      <div className="p-6">
        {/* Profile Information */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold">User Name</h2>
          <p className="text-sm text-gray-600">Team - Job title</p>
        </div>

        <hr></hr>

        {/* Update Status Section */}
        <div className="mb-6">
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            style={{
              background: 'none',
              border: 'none',
              paddingRight: '2rem',
            }}
          >
            <option value="Active">Available</option>
            <option value="Busy">Busy</option>
            <option value="On a call">On a call</option>
            <option value="In a meeting">In a meeting</option>
            <option value="Out for lunch">Out for lunch</option>

          </select>
          <p className="text-xs text-gray-500 mt-2">3:54 pm local time</p>
        </div>

        {/* Contact Information Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Contact Information</h3>
          <p className="text-sm mb-2 flex items-center gap-2">
            E-mail
            <a
              href="mailto:username@gmail.com"
              className="text-purple-500 hover:underline"
            >
              username@gmail.com
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            Phone Number
            <a
              href="tel:01231234532"
              className="text-purple-500 hover:underline"
            >
              01231234532
            </a>
          </p>
        </div>

        {/* Settings and Logout Section */}
        <div className="flex flex-col gap-3">
          <button onClick={toggleSettings} className="text-sm hover:underline">
            Settings
          </button>
          <Link href="/logout" legacyBehavior>
            <a className="text-sm hover:underline">
              Log out of FlowerWorker
            </a>
          </Link>
        </div>
      </div>

      {/* Settings Popup */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <TaskManagementProfileSettings />

            {/* <button
              onClick={toggleSettings}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button> */}
        </div>
      )}
    </div>
  );
};

export default TaskManagementProfilePage;