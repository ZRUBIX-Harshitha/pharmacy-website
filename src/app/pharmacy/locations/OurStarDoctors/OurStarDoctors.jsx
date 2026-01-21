"use client";
import React from 'react';

const doctors = [
    {
        name: "Dr. Naseem Pervin",
        role: "Obstetrician and Gynaecologist",
        qualification: "MBBS, DNB (Obs & Gyn), MRCOG (UK), FMAS",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/61b9e03e1bc8e49308fa6d9a_Dr.%20Naseem%20Pervin%20%20-%20Obstetrics%20%26%20Gynecology%20-%20OMR%20-%20Cloudnine%20Hospitals.JPG"
    },
    {
        name: "Dr. Rijaphin R",
        role: "Obstetrician and Gynaecologist",
        qualification: "MBBS, MD (Obs & Gyn)",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/61b9e1402cea69790fe9af3e_Dr.%20Rijaphin%20-%20Obstetrics%20%26%20Gynecology%20-%20OMR%20-%20Chennai%20-%20Cloudnine%20Hospitals.JPG"
    },
    {
        name: "Dr. Kavitha D",
        role: "Obstetrician and Gynaecologist",
        qualification: "MBBS, DGO, MRCOG",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a87f2e4340f64a80b148de_Dr.%20Kavitha%20D%20-%20Obstetrician%20%26%20Gynecologist%20-%20OMR-%20Chennai%20-%20Cloudnine%20Hospitals.jpg"
    },
    {
        name: "Dr. Sathiya S",
        role: "Obstetrician and Gynaecologist",
        qualification: "MBBS, MD - Obstetrics & Gynaecology, Dip. in Advance",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/63765809007adcbd5b10055c_Dr%20Sathiya%20S.jpg"
    },
    {
        name: "Dr. Aravind Ravichandran",
        role: "Fertility & IVF Specialist",
        qualification: "MBBS, MD(OBGYN), DNB, MCE (Australia), Post-doctoral",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6862af0aa6203c041f822317_Dr%20Aravind%20R.png"
    },
    {
        name: "Dr. Dhilip Kumar S",
        role: "Paediatrician and Neonatologist",
        qualification: "MBBS, MD, PAEDIATRICS & NNF",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6666af48f010a2e94efe66b8_Dr%20Dhilip.jpg"
    },
    {
        name: "Dr. P M Deviprasad",
        role: "Paediatrician and Neonatologist",
        qualification: "MBBS, MD(Paediatrics), DM(Neonatology), DrNB",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/676e921f81cfd2c172400ca5_Dr%20Deviprasad.JPG"
    },
    {
        name: "Dr. Varsha Nair",
        role: "Paediatrician & Neonatologist",
        qualification: "MBBS, MD Paediatrics, Fellowship in Neonatology",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6826fb9497dc3565ff166f60_Dr%20Varsha%20Nair.JPG"
    },
    {
        name: "Dr. Mohanapriya S (PT)",
        role: "Physiotherapist",
        qualification: "BPT, MIAP, DAMS, ISSA(USA), MBA(Hospital Management)",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/619f6e72b6289e62e0f4c5f4_Mohanapriya%20-%20Physiotherapist%20-%20OMR%20-%20Chennai%20-%20Cloudnine%20Hospitals.jpg"
    },
    {
        name: "Ms. B Ramya",
        role: "Dietitian and Nutritionist",
        qualification: "BSc in Nutrition, Food Service Management & Dietetics & MSc in",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6450e443e81928622e7aba15_Dr%20Ramya%20B.jpg"
    },
    {
        name: "Ms. Angel Deepa Nathiya",
        role: "Lactation Consultant",
        qualification: "BSc - Nursing",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6655ce2f08a59a91bac5f2c5_Ms%20Angel%20Deepa.PNG"
    },
    {
        name: "Dr. Rahul Anand Yadav",
        role: "Paediatrician and Neonatologist",
        qualification: "MBBS, DM Neonatology, MD Paediatrics",
        location: "T Nagar", // This one says T Nagar in the image? Or OMR? The image is small but looks like T Nagar or OMR.
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6937ffb8a844cd2e89564215_Dr%20Rahul%20Yadav.bmp"
    }
];

export default function OurStarDoctors() {
    return (
        <div className="w-full pb-16">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">

                <h2 className="text-3xl font-bold mb-6 mt-10" style={{ color: '#a7358d' }}>Our Star Doctors</h2>

                {/* Filter Bar */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">

                        {/* Search */}
                        <div className="relative w-full lg:w-1/3">
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#a7358d] text-gray-600"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>

                        {/* Gender */}
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center"></span>
                                <span className="text-gray-600">Female</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center"></span>
                                <span className="text-gray-600">Male</span>
                            </label>
                            <button className="text-gray-400 underline text-sm hover:text-gray-600">Reset</button>
                        </div>

                        {/* Speciality */}
                        <div className="flex items-center gap-4 w-full lg:w-auto ml-auto">
                            <div className="relative w-full lg:w-[300px]">
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-600 appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-[#a7358d]">
                                    <option>Speciality</option>
                                    <option>Obstetrics & Gynaecology</option>
                                    <option>Paediatrics</option>
                                    <option>Physiotherapy</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <button className="text-gray-400 underline text-sm hover:text-gray-600">Reset</button>
                        </div>
                    </div>
                </div>

                {/* Filtering By Label (Placeholder from image) */}
                <div className="w-full h-12 border border-gray-200 rounded-xl bg-white mb-8 flex items-center px-4 text-gray-500 text-sm">
                    Filtering by:
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100 flex flex-col items-center gap-6 hover:-translate-y-1">
                            <div className="flex gap-6 w-full items-start text-left">
                                <div className="w-[120px] h-[140px] shrink-0 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
                                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center min-h-[140px]">
                                    <h3 className="text-[#a7358d] font-bold text-[20px] leading-tight mb-2">{doctor.name}</h3>
                                    <p className="text-gray-900 text-[15px] font-semibold mb-3 leading-snug">{doctor.role}</p>

                                    <div className="flex items-start gap-2 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 mt-0.5 shrink-0">
                                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a2.25 2.25 0 0 1-2.29 2.29c-5.145 0-10.29-.314-15.12-1.222a.75.75 0 0 1-.6-1.393c4.803.904 9.916 1.16 14.998 1.16.29 0 .58-.002.868-.006H3.375C2.616 9.55 2 8.934 2 8.175c0-.414.336-.75.75-.75.258 0 .506.077.718.216l.128-.088A60.407 60.407 0 0 1 11.7 2.805Z" />
                                            <path d="M13.06 5.42a.75.75 0 0 0-.27-.96 66.863 66.863 0 0 0-2.43-1.09.75.75 0 0 0-.57 1.4c.78.34 1.54.71 2.28 1.1a.75.75 0 0 0 .99-.45Z" />
                                            <path d="M2.57 16.48a.75.75 0 0 1 .63-1.36c.92.42 1.86.81 2.82 1.17a.75.75 0 1 1-.53 1.41 57.17 57.17 0 0 1-2.92-1.22Z" />
                                            <path d="M16.5 14.25a.75.75 0 0 1 .15-1.48c.18.02.35.05.53.08a.75.75 0 0 1-.22 1.48c-.15-.03-.31-.05-.46-.08Z" />
                                            <path d="M11.96 17.25c.01.21.01.42.02.64 0 1.25.12 2.47.37 3.65a.75.75 0 1 1-1.47.3 19.33 19.33 0 0 1-.37-3.72c0-.3.003-.59.01-.87H3.375a.75.75 0 0 1 0-1.5h16.208c.51 0 .991.134 1.41.37a2.25 2.25 0 0 1 1.08 1.94c0 .324-.055.632-.15.93a.75.75 0 1 1-1.43-.46.756.756 0 0 0 .08-.34c0-.414-.336-.75-.75-.75H12.04Z" />
                                        </svg>
                                        <p className="text-gray-500 text-[13px] leading-tight line-clamp-2">{doctor.qualification}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
                                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-gray-500 text-[13px] font-medium">{doctor.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 w-full mt-auto pt-4">
                                <button className="flex-1 py-3.5 rounded-xl border border-gray-900 text-[14px] font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                                    View Full Profile
                                </button>
                                <button className="flex-1 py-3.5 rounded-xl border border-[#a7358d] text-[14px] font-bold transition-all bg-white text-[#a7358d] hover:bg-[#a7358d] hover:text-white shadow-sm hover:shadow-md">
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
