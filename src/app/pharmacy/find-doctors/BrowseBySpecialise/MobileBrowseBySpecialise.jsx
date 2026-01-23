"use client";
import React from 'react';

const specialties = [
    { name: "Gen Physician", image: "https://images.apollo247.in/specialty/615ebc75-4172-4f46-9ba0-b3688c053fcc-1721716587044.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Dermatology", image: "https://images.apollo247.in/specialty/73dae7a6-ec1f-45c4-98bd-0c8acb6e4eca-1718393652685.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Gynaecology", image: "https://images.apollo247.in/specialty/d67d4978-a14a-46c8-8af8-697823bfcadf-1718394471977.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Paediatrics", image: "https://images.apollo247.in/specialties/ic_paediatrics.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Orthopaedics", image: "https://images.apollo247.in/specialty/07337088-ca54-4e67-8c53-6a5c03b07a7f-1718517850079.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Dentist", image: "https://images.apollo247.in/specialties/ic_dentist.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" }
];

export default function MobileBrowseBySpecialise() {
    return (
        <div className="bg-white py-6 border-b border-gray-50">
            <div className="px-4 mb-5 flex justify-between items-center">
                <h2 className="text-[#30363c] text-[16px] font-bold">Specialties</h2>
                <button className="text-[11px] font-bold text-[#a7358d] bg-[#f8f9fa] border border-gray-100 px-3 py-1.5 rounded-full">View All</button>
            </div>

            <div className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide no-scrollbar">
                {specialties.map((item, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[72px] group cursor-pointer">
                        <div className="w-[72px] h-[72px] bg-[#fdf4fb] rounded-full flex items-center justify-center mb-2 border border-transparent group-hover:border-[#a7358d]/30 transition-all shadow-sm">
                            <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
                        </div>
                        <span className="text-[11px] font-medium text-center text-gray-700 leading-tight w-full truncate px-1 group-hover:text-[#a7358d]">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
