"use client";
import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="w-full  pt-4 pb-10">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">



                {/* Banner */}
                <div className="w-full rounded-[30px] overflow-hidden">
                    <img
                        src="https://images.apollo247.in/images/askApolloV3/images/web-banner.svg?tr=q-80,w-1300,dpr-2,c-at_max"
                        alt="Doctor Consultation"
                        className="w-full h-auto object-cover"
                    />
                </div>

            </div>
        </div>
    );
}
