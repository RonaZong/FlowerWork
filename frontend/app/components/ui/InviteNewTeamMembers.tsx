"use client";

import React, { useState } from "react";
import Image from "next/image";
import copyLinkIcon from "@/app/public/copyLink.svg";
import xIcon from "@/app/public/x-icon.svg";

export default function InviteNewTeamMembers() {
  const [emailOrName, setEmailOrName] = useState("");
  const [permission, setPermission] = useState("Can edit");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSendInvite = () => {
    console.log(
      `Invite sent to: ${emailOrName} with permission: ${permission}`
    );
    setEmailOrName(""); // Clear the input field
  };

  return (
    <div className="bg-white min-h-[201px] max-w-[768px] p-5 rounded-[22px] shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Invite new team members</h1>

        <div className="flex gap-3 items-center">
          <div>
            <Image src={copyLinkIcon} alt="copy link icon" />
          </div>

          <button className="text-[#181615] hover:text-gray-700 font-semibold mr-2">
            Copy link
          </button>

          <button className="text-gray-500 hover:text-gray-700">
            <Image src={xIcon} alt="x icon" />
          </button>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm mb-4">
        New members will gain access to your workspace. Decide whether they can
        edit or just view.
      </p>

      <hr className="mb-6 -mt-3 border-[1px]" />

      {/* Form */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Invite members by name or mail..."
          value={emailOrName}
          onChange={(e) => setEmailOrName(e.target.value)}
          className="flex-grow border-black border-[2px] rounded-lg px-3 py-2 text-sm"
        />

        {/* Custom Dropdown */}
        <div className="relative w-36">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full rounded-lg px-2 py-2 text-sm border-black border-[2px] flex justify-between items-center"
          >
            {permission}
            <span className="ml-2">&#9662;</span> {/* Down arrow */}
          </button>

          {isDropdownOpen && (
            <ul className="absolute top-full left-0 w-full bg-purple-300 border-black border-[2px] rounded-b-lg mt-1 z-10">
              <li
                className="px-2 py-1 hover:bg-purple-400 cursor-pointer "
                onClick={() => {
                  setPermission("Can edit");
                  setIsDropdownOpen(false);
                }}
              >
                Can edit
              </li>
              <li
                className="px-2 py-1 hover:bg-purple-400 cursor-pointer"
                onClick={() => {
                  setPermission("Can view");
                  setIsDropdownOpen(false);
                }}
              >
                Can view
              </li>
            </ul>
          )}
        </div>

        <button
          onClick={handleSendInvite}
          className="bg-[#BD71D4] text-white rounded-lg px-4 py-2 hover:bg-[#a864bd]"
        >
          Send invite
        </button>
      </div>
    </div>
  );
}
