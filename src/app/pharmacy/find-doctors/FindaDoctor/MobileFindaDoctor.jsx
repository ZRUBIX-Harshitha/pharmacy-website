"use client";
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function MobileFindaDoctor() {
    const [speciality, setSpeciality] = useState('');
    const [location, setLocation] = useState('');

    return (
        <div className="bg-white px-4 py-6 border-b border-gray-50">
            <h2 className="text-[#30363c] text-[16px] font-bold mb-4">Book an Appointment</h2>

            <div className="flex flex-col gap-3">
                {/* Speciality Input */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#fcebf5] flex items-center justify-center text-[#a7358d]">
                        <FaSearch className="text-xs" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Doctor, Speciality... "
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl pl-14 pr-4 py-3.5 text-[13px] font-medium outline-none focus:border-[#a7358d] focus:shadow-[0_0_0_3px_#fcebf5] transition-all placeholder:text-gray-400"
                    />
                </div>

                {/* Location Input */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                        <FaMapMarkerAlt className="text-xs" />
                    </div>
                    <input
                        type="text"
                        placeholder="Select Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl pl-14 pr-4 py-3.5 text-[13px] font-medium outline-none focus:border-[#a7358d] focus:shadow-[0_0_0_3px_#fcebf5] transition-all placeholder:text-gray-400"
                    />
                </div>

                {/* Date Input (Fake) */}
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                        <FaCalendarAlt className="text-xs" />
                    </div>
                    <div className="w-full bg-white border border-gray-200 rounded-xl pl-14 pr-4 py-3.5 text-[13px] font-medium text-gray-700">
                        Today, {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                    </div>
                </div>

                <button className="w-full bg-[#a7358d] text-white font-bold py-3.5 rounded-xl mt-3 shadow-lg shadow-[#a7358d]/20 active:scale-[0.98] transition-all hover:bg-[#8e2d78] text-sm">
                    Find Doctors
                </button>
            </div>
        </div>
    );
}
