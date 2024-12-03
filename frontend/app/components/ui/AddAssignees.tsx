"use client";

import React, { useState } from "react";
import Image from "next/image";
import SelectedAssignees from "./SelectedAssignees";

// Icon imports
import xIcon from "@/app/public/x-icon.svg";
import searchIcon from "@/app/public/searchIcon.svg";
import userIcon2 from "@/app/public/user-icons/userIcon2.svg";
import userIcon3 from "@/app/public/user-icons/userIcon3.svg";
import inviteUserIcon from "@/app/public/inviteUserIcon.svg";

export default function AddAssignees() {
  const [selectedAssignees, setSelectedAssignees] = useState<
    { id: number; name: string; icon: string | null }[]
  >([]);

  // Recently used assignees (mock data)
  const recentlyUsed = [
    { id: 1, name: "Maria Pepita Flores", icon: userIcon3 },
    { id: 2, name: "Berta Fernandez", icon: userIcon2 },
    { id: 3, name: "Somebody", icon: null },
  ];

  // Handle click on a recently used assignee
  const handleAddAssignee = (user: {
    id: number;
    name: string;
    icon: string | null;
  }) => {
    if (!selectedAssignees.some((assignee) => assignee.id === user.id)) {
      setSelectedAssignees([...selectedAssignees, user]);
    }
  };

  return (
    <div
      className="flex flex-col bg-gray-50 min-w-[280px] max-w-[360px] sm:w-[360px] min-h-[526px]
      rounded-[23px] gap-3 shadow-left-heavy px-6 py-6 mb-3 "
    >
      <div className="flex justify-center items-center ">
        <h1 className="mx-auto text-2xl font-bold">Add assignees</h1>
        <Image src={xIcon} alt="x icon" className="cursor-pointer" />
      </div>

      {/* <SelectedAssignees /> */}

      {/* Search bar */}
      <div className="flex justify-center mt-5 relative">
        <input
          placeholder="Search for assig..."
          className="border-2 rounded-lg border-black pl-10 h-[40px] w-full sm:w-[328px]"
          type="text"
        />
        <Image
          src={searchIcon}
          alt="search icon"
          className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* Task Assignees */}
      <div className="mt-4">
        <p className="font-bold text-xl">Task assignees:</p>

        {/* Render selected assignees */}
        <div className="mt-2 flex flex-col gap-1">
          {selectedAssignees.map((assignee) => (
            <div
              key={assignee.id}
              className="flex items-center justify-between border border-black p-1 px-2 rounded-full w-full   cursor-pointer hover:bg-[#E2E2E2]"
            >
              <div className="flex items-center">
                {assignee.icon ? (
                  <Image src={assignee.icon} alt="user icon" />
                ) : (
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#DEDBD8] flex items-center justify-center">
                    <span className="text-[#181615] font-bold text-sm">SM</span>
                  </div>
                )}
                <p className="text-lg font-semibold pl-3 text-[#181615]">
                  {assignee.name}
                </p>
              </div>

              {/* Remove button */}
              <Image
                src={xIcon}
                alt="x icon"
                className="cursor-pointer"
                onClick={() =>
                  setSelectedAssignees((prev) =>
                    prev.filter((current) => current.id !== assignee.id)
                  )
                }
              />
            </div>
          ))}
        </div>

        <p className="text-[#C5C1BB] font-semibold text-base ml-3 mt-2">
          Recently used
        </p>
      </div>

      <hr />

      {/* Recently used assignees */}
      <div className="flex flex-col gap-1">
        {recentlyUsed.map((user) => (
          <div
            key={user.id}
            onClick={() => handleAddAssignee(user)}
            className="flex items-center justify-between border p-1 px-2 rounded-full cursor-pointer hover:bg-[#E2E2E2] hover:border-[#B055CC]"
          >
            <div className="flex items-center">
              {user.icon ? (
                <Image src={user.icon} alt="user icon" />
              ) : (
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#DEDBD8] flex items-center justify-center">
                  <span className="text-[#181615] font-bold text-sm">SM</span>
                </div>
              )}
              <p className="text-lg font-semibold pl-3 text-[#181615]">
                {user.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Save button */}
      <div className="flex justify-end">
        <button
          className="bg-[#B7B1AA] text-black
         rounded-xl py-1 px-4 h-[37px] w-[77px]"
        >
          Save
        </button>
      </div>

      {/* Invite button */}
      <button className="flex items-center  border border-black rounded-lg py-1 px-4 mt-1 gap-3 hover:bg-[#E2E2E2]">
        <Image src={inviteUserIcon} alt="invite user icon" />
        <p className="text-lg font-semibold">Invite new team members</p>
      </button>
    </div>
  );
}
