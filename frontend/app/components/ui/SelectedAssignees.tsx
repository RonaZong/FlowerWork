"use client";

import React from "react";
import Image from "next/image";
import closeIcon from "@/app/public/x-icon.svg";
import userIcon2Large from "@/app/public/user-icons/userIcon2Large.svg";
import videoCallIcon from "@/app/public/videoCallIcon.svg";
import sendMessageIcon from "@/app/public/sendMessageIcon.svg";
import micIcon from "@/app/public/micIcon.svg";

export default function SelectedAssignees() {
  return (
    <div
      className="flex flex-col bg-[#FFFFFF] w-[324px] min-h-[237px] sm:w-[371px] 
             rounded-[20px] py-5 gap-3 px-4 mb-3 border border-black relative"
    >
      {/* Top part  */}
      <div className="flex items-center justify-between bg-[#DEDBD8] rounded-t-[20px] -mx-4 -mt-5 px-4 pb-14">
        <div
          className="w-[100px] h-[100px] sm:w-28 sm:h-28  rounded-full  flex items-center
                     justify-center absolute bottom-[165px] left-8  "
        >
          <Image src={userIcon2Large} alt="user icon2" />

          <div className="absolute right-[5px] top-[85px] w-[20px] h-[20px] rounded-full bg-green-400 border border-black"></div>
        </div>

        <div className="ml-32 sm:ml-[150px] mt-8 -mb-8 flex-grow">
          <p className="text-lg sm:text-xl font-bold break-words">
            Maria Pepita Flores
          </p>
          <p className="text-[#171929] truncate mt-3 font-semibold">
            Frontend developer
          </p>
        </div>

        <button className="ml-2 flex-shrink-0">
          <Image src={closeIcon} alt="Close" />
        </button>
      </div>

      {/* Bottom part  */}
      <div className="flex flex-col flex-1 justify-start gap-3 mt-10">
        <p>E-mail</p>

        <div>
          <p>username@gmail.com</p>
        </div>

        <div>
          <p>Local time</p>
          <span>12:00</span>
        </div>

        <button className="font-bold flex items-start text-left">
          Edit profile info
        </button>

        <button className="font-bold flex items-start text-left">
          Remove from task
        </button>

        <hr />

        {/* Bottome icons  */}

        <div>
          <Image src={videoCallIcon} alt="video call icon" />
          <Image src={sendMessageIcon} alt="send message" />
          <Image src={micIcon} alt="mic icon" />
        </div>
      </div>
    </div>
  );
}
