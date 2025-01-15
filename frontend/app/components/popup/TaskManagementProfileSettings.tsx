"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import userIcon from "@/app/public/user-icons/userIcon3.svg";

const TaskManagementProfileSettings = () => {
    const [activeTab, setActiveTab] = useState("account-settings");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b">
          <div className="bg-white shadow-md rounded-lg p-8 w-[90%] max-w-4xl">
              {/* Tabs */}
              <div className="flex justify-between border-b pb-2 mb-6">
              <button
                  className={`text-sm font-semibold ${
                  activeTab === "account-settings" ? "text-purple-500" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("account-settings")}
              >
                  Account settings
              </button>
              <button
                  className={`text-sm font-semibold ${
                  activeTab === "notifications" ? "text-purple-500" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("notifications")}
              >
                  Notifications
              </button>
              <button
                  className={`text-sm font-semibold ${
                  activeTab === "time-zone" ? "text-purple-500" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("time-zone")}
              >
                  Time zone
              </button>
              </div>
      
              {/* Content */}
              {activeTab === "account-settings" && (
              <div>
                  {/* Account settings content */}

                  {/* Avatar Section */}
                  <div className="flex items-center mb-8">
                  <div className="relative">
                      <img
                      src="/path-to-avatar.jpg" // Replace with the correct path
                      alt="User Avatar"
                      className="w-24 h-24 rounded-full object-cover"
                      />
                      <button className="absolute bottom-0 right-0 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                      Upload Photo
                      </button>
                  </div>
                  <button className="text-sm text-red-500 ml-4">Remove Photo</button>
                  </div>

                  {/* Form */}
                  <form className="grid grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div>
                      <label className="block text-sm font-semibold mb-1">Full name</label>
                      <input
                      type="text"
                      placeholder="Enter your e-mail..."
                      className="w-full border p-2 rounded-md focus:ring-2 focus:ring-purple-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                      Your name may appear around FlowerWork where you contribute or are mentioned. You can change it at any time.
                      </p>
                  </div>

                  <div>
                      <label className="block text-sm font-semibold mb-1">Job title</label>
                      <input
                      type="text"
                      placeholder="Enter your job title..."
                      className="w-full border p-2 rounded-md focus:ring-2 focus:ring-purple-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                      Your job title may appear around FlowerWork where you contribute. You can change it at any time.
                      </p>
                  </div>

                  {/* Second Row */}
                  <div>
                      <label className="block text-sm font-semibold mb-1">Email</label>
                      <div className="relative">
                      <input
                          type="email"
                          value="Pepitapalotes@gmail.com"
                          readOnly
                          className="w-full border p-2 rounded-md bg-gray-100 text-gray-500"
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
                      <label className="block text-sm font-semibold mb-1">Department or team</label>
                      <input
                      type="text"
                      placeholder="Enter your Department or team..."
                      className="w-full border p-2 rounded-md focus:ring-2 focus:ring-purple-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                      Your Department or team may appear around FlowerWork where you contribute.
                      </p>
                  </div>

                  {/* Third Row */}
                  <div>
                      <label className="block text-sm font-semibold mb-1">Phone number</label>
                      <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full border p-2 rounded-md focus:ring-2 focus:ring-purple-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                      We will contact you regarding any updates with the projects you are a part of. Your phone number will be visible for your team members.
                      </p>
                  </div>
                  </form>

                  {/* Buttons */}
                  <div className="flex justify-end mt-6 gap-4">
                  <button
                      type="button"
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                      Cancel
                  </button>
                  <button
                      type="submit"
                      className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                  >
                      Update Profile
                  </button>
                  </div>
              </div>
              )}
      
              {activeTab === "notifications" && (
              <div>
                  <h2 className="text-lg font-semibold mb-4">Notifications</h2>
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