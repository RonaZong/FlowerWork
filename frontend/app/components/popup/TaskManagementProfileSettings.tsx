"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import userIcon from "@/app/public/user-icons/userIcon3Large.svg";

interface ProfileSettingsProps {
  closeSettings: () => void;
}

const TaskManagementProfileSettings: React.FC<ProfileSettingsProps> = ({ closeSettings }) => {
    const [activeTab, setActiveTab] = useState("account-settings");
    const [activeNotification, setActiveNotification] = useState("account-notifications")

    return (
        <div className="w-[60%] h-[60%] items-center justify-center">
            <div className="w-full bg-white rounded-lg overflow-hidden">
                {/* Tabs */}
                <div className="w-full h-40 flex justify-center items-center space-x-10 bg-gradient-to-t from-[#B86ECE] to-[#1E191C]">
                    <button
                        className={`text-xl text-white font-montserrat ${
                        activeTab === "account-settings" ? "font-bold border-b-2 border-white" : "font-medium"
                        }`}
                        onClick={() => setActiveTab("account-settings")}
                    >
                        Account settings
                    </button>
                    <button
                        className={`text-xl text-white font-montserrat ${
                        activeTab === "notifications" ? "font-bold border-b-2 border-white" : "font-medium"
                        }`}
                        onClick={() => setActiveTab("notifications")}
                    >
                        Notifications
                    </button>
                    <button
                        className={`text-xl text-white font-montserrat ${
                        activeTab === "time-zone" ? "font-bold border-b-2 border-white" : "font-medium"
                        }`}
                        onClick={() => setActiveTab("time-zone")}
                    >
                        Time zone
                    </button>
                </div>
      
                {/* Account settings content */}
                {activeTab === "account-settings" && (
                <div className="relative flex flex-col items-start p-8">
                    {/* Avatar Section */}
                    <div className="w-56 relative flex items-start justify-center">
                        <div className="absolute left-0 -top-24">
                            <Image
                                src={userIcon}
                                alt="Profile Avatar"
                                width={120}
                                height={120}
                                className="rounded-full"
                            />
                        </div>
                        <div className="absolute -bottom-10 right-0 flex flex-col items-center mb-4">
                            <button className="bg-[#BD71D4] text-white text-xs px-2 py-1 rounded">
                                Upload Photo
                            </button>
                            <button className="text-xs text-black font-semibold italic border-b-2 border-black">Remove Photo</button>
                        </div>
                    </div>
                    

                    {/* Form */}
                    <form className="grid grid-cols-2 gap-6 p-10">
                        <div>
                            <label className="block text-xl font-medium font-montserrat mb-1">Full name</label>
                            <input
                                type="text"
                                placeholder="Enter your e-mail..."
                                className="w-full border px-4 py-2 rounded-md italic"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                            Your name may appear around FlowerWork where you contribute or are mentioned. You can change it at any time.
                            </p>
                        </div>

                        <div>
                            <label className="block text-xl font-medium font-montserrat mb-1">Job title</label>
                            <input
                            type="text"
                            placeholder="Enter your job title..."
                            className="w-full border px-4 py-2 rounded-md italic"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                            Your job title may appear around FlowerWork where you contribute. You can change it at any time.
                            </p>
                        </div>

                        <div>
                            <label className="block text-xl font-medium font-montserrat mb-1">Email</label>
                            <div className="relative">
                            <input
                                type="email"
                                value="Pepitapalotes@gmail.com"
                                readOnly
                                className="w-full border px-4 py-2 rounded-md bg-gray-100 text-gray-500"
                            />
                            <button className="absolute right-2 top-2 text-purple-500">
                                ✏️
                            </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                            All our notifications will be sent to this email.
                            </p>
                        </div>

                        <div>
                            <label className="block text-xl font-medium font-montserrat mb-1">Department or team</label>
                            <input
                            type="text"
                            placeholder="Enter your Department or team..."
                            className="w-full border px-4 py-2 rounded-md italic"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                            Your Department or team may appear around FlowerWork where you contribute.
                            </p>
                        </div>

                        <div>
                            <label className="block text-xl font-medium font-montserrat mb-1">Phone number</label>
                            <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full border px-4 py-2 rounded-md italic"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                            We will contact you regarding any updates with the projects you are a part of. Your phone number will be visible for your team members.
                            </p>
                        </div>
                    </form>

                    {/* Buttons */}
                    <div className="w-full flex justify-end mt-6 gap-4">
                        <button
                            onClick={closeSettings}
                            type="button"
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={closeSettings}
                            type="submit"
                            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
                )}
    
                {activeTab === "notifications" && (
                    <div className="relative flex flex-row items-start p-8">
                        <div>
                            <button
                                className={`text-lg font-semibold mb-4 ${
                                activeNotification === "account-notifications" ? "font-bold" : "font-medium"
                                }`}
                                onClick={() => setActiveNotification("account-notifications")}
                            >
                                Account notifications
                            </button>
                            <button
                                className={`text-lg font-semibold mb-4 ${
                                activeNotification === "sounds-and-appearance" ? "font-bold" : "font-medium"
                                }`}
                                onClick={() => setActiveNotification("sounds-and-appearance")}
                            >
                                Sounds and appearance
                            </button>
                            <button
                                className={`text-lg font-semibold mb-4 ${
                                activeNotification === "email-notification" ? "font-bold " : "font-medium"
                                }`}
                                onClick={() => setActiveNotification("email-notification")}
                            >
                                Email notification
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                        <div>
                            <h3 className="font-semibold text-sm">Notify me about</h3>
                            <div className="mt-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span>All new messages</span>
                            </label>
                            <label className="flex items-center space-x-2 mt-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span>Direct messages and mentions</span>
                            </label>
                            <label className="flex items-center space-x-2 mt-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span>Notify me about replies to threads I'm following</span>
                            </label>
                            </div>
                        </div>
            
                        <div>
                            <h3 className="font-semibold text-sm">Notification schedule</h3>
                            <p className="text-xs text-gray-500">
                            You'll only receive notifications in the hours you choose. Outside of those
                            times, notifications will be paused.
                            </p>
                            <div className="mt-2">
                            <label className="block text-sm">Allow notifications:</label>
                            <select className="border rounded-md p-2 w-full mt-1">
                                <option>Every day</option>
                                <option>Weekdays only</option>
                                <option>Custom schedule</option>
                            </select>
                            <div className="flex gap-2 mt-2">
                                <select className="border rounded-md p-2 flex-1">
                                <option>8:00 AM</option>
                                <option>9:00 AM</option>
                                </select>
                                <select className="border rounded-md p-2 flex-1">
                                <option>5:00 PM</option>
                                <option>6:00 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
            
                        <div>
                            <h3 className="font-semibold text-sm">Set a default time for remind notifications</h3>
                            <select className="border rounded-md p-2 w-full mt-1">
                            <option>8:00 AM</option>
                            <option>9:00 AM</option>
                            </select>
                        </div>
            
                        <div>
                            <h3 className="font-semibold text-sm">When I'm not active on desktop</h3>
                            <label className="block text-sm mt-2">Send notifications to my mobile devices:</label>
                            <select className="border rounded-md p-2 w-full mt-1">
                            <option>Every day</option>
                            <option>Weekdays only</option>
                            </select>
                        </div>
            
                        <div>
                            <label className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>Mute all message sounds from FlowerWorker</span>
                            </label>
                        </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end mt-6 gap-4">
                            <button
                                onClick={closeSettings}
                                type="button"
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                )}
    
                {activeTab === "time-zone" && (
                <div>
                    {/* Time zone content */}
                    <p>Time zone content goes here...</p>

                    {/* Buttons */}
                    <div className="flex justify-end mt-6 gap-4">
                        <button
                        onClick={closeSettings}
                            type="button"
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default TaskManagementProfileSettings;