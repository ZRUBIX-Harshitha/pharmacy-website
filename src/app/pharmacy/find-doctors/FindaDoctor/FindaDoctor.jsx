"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaSearch, FaMapPin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const doctorsData = [
    {
        id: 1,
        name: "Dr. Anjan Das",
        role: "Ayurvedic Practitioner",
        exp: "8 YRS",
        degree: "AYURVEDACHARYA ( B.A.M.S)",
        location: "Dumdum",
        clinic: "Vedhive Ayurveda Clinic, Dumdum",
        fee: "₹700",
        image: "https://images.apollo247.in/doctors/f1cc3c78-1885-4697-bcd1-599dee7b6b21-1767593025267.jpeg?tr=q-80,f-webp,w-50,dpr-2,c-at_max",
        availableTime: "3 mins",
        type: "hospital"
    },
    {
        id: 2,
        name: "Dr. Rik Sadhukhan",
        role: "Ayurvedic Practitioner",
        exp: "8 YRS",
        degree: "BAMS",
        location: "Kolkata",
        clinic: "Vedhive Ayurveda, Ballygunge, Kolka...",
        fee: "₹500",
        image: "https://images.apollo247.in/doctors/e546278f-d311-49d5-85f3-b2cbd58160e4-1756284808485.jpg?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
        availableTime: "3 mins",
        type: "hospital"
    },
    {
        id: 3,
        name: "Dr. Shiv Prakash Singh",
        role: "Ayurvedic Practitioner",
        exp: "19 YRS",
        degree: "BAMS",
        location: "Kolkata",
        clinic: "Vedhive Ayurveda College Street, Ko...",
        fee: "₹500",
        image: "https://images.apollo247.in/doctors/3e2d733f-1d89-43c7-b8e6-d01173136681-1753975960256.jpg?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
        availableTime: "3 mins",
        type: "hospital"
    },
    {
        id: 4,
        name: "Dr. Veerendra H S",
        role: "Urology",
        exp: "16 YRS",
        degree: "MBBS, MS, DNB(UROLOGY)",
        location: "Bengaluru",
        clinic: "Apollo Hospitals Sheshadripuram, B...",
        fee: "₹800",
        image: "https://images.apollo247.in/doctors/a46d52cb-0869-48f8-8043-6b2462737a6d-1738827490885.jpg?tr=q-80,f-webp,w-100,dpr-2,c-at_max",
        availableTime: "13 mins",
        type: "hospital"
    },
    {
        id: 5,
        name: "Dr. Gaurab Dasgupta",
        role: "Urology",
        exp: "14 YRS",
        degree: "MBBS, MS GENERAL SURGERY",
        location: "Kolkata",
        clinic: "MCR SUPER SPECIALITY POLY CLINI...",
        fee: "₹1000",
        image: "https://images.apollo247.in/doctors/-1763481893339.jpg?tr=q-80,f-webp,w-50,dpr-2,c-at_max",
        availableTime: "3 mins",
        type: "online"
    },
    {
        id: 6,
        name: "Dr. Sreeparna Roy",
        role: "Obstetrics & Gynaecology",
        exp: "8 YRS",
        degree: "MBBS, MS (OBSTETRICS & ...",
        location: "Kolkata",
        clinic: "Dr Utsa Basu Clinic, Kolkata",
        fee: "₹500",
        image: "https://images.apollo247.in/doctors/1644f0ec-001d-4e1a-832e-6dab619c1901-1742974032084.jpg?tr=q-80,f-webp,w-50,dpr-2,c-at_max",
        availableTime: "3 mins",
        type: "online"
    }
];

const specialityList = [
    "Allergist and Clinical Immunology", "Anaesthesia", "Andrology",
    "Ayurveda Dermatology", "Ayurvedic Toxicology", "Bariatrics",
    "Breast surgery", "Cardiology", "Dermatology", "Endocrinology", "ENT",
    "Gastroenterology", "General Physician", "General Surgery"
];

const locationList = [
    "Thiruvannamalai, Tamil Nadu", "Thiruvananthapuram, Kerala",
    "Thiruchendur, Tamil Nadu", "Salem, Tamil Nadu",
    "Kolkata, West Bengal", "Bengaluru, Karnataka", "Chennai, Tamil Nadu"
];

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export default function FindaDoctor() {
    const [showResults, setShowResults] = useState(false);
    const [activeTab, setActiveTab] = useState('hospital');
    const [speciality, setSpeciality] = useState('');
    const [selectedDate, setSelectedDate] = useState(null); // stores actual Date object
    const [location, setLocation] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date()); // for calendar navigation

    // Dropdown States
    const [showSpecDropdown, setShowSpecDropdown] = useState(false);
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [showLocDropdown, setShowLocDropdown] = useState(false);

    // Refs for outside click
    const specRef = useRef(null);
    const dateRef = useRef(null);
    const locRef = useRef(null);

    // Search filters
    const [specSearch, setSpecSearch] = useState('');
    const filteredSpecs = specialityList.filter(s => s.toLowerCase().includes(specSearch.toLowerCase()));

    const [locSearch, setLocSearch] = useState('');
    const filteredLocs = locationList.filter(l => l.toLowerCase().includes(locSearch.toLowerCase()));

    // Click Outside Handling
    useEffect(() => {
        function handleClickOutside(event) {
            if (specRef.current && !specRef.current.contains(event.target)) setShowSpecDropdown(false);
            if (dateRef.current && !dateRef.current.contains(event.target)) setShowDateDropdown(false);
            if (locRef.current && !locRef.current.contains(event.target)) setShowLocDropdown(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Calendar Logic
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        // 0 = Sun, 1 = Mon ... 6 = Sat
        // We want 0 = Mon, 1 = Tue ... 6 = Sun
        const day = new Date(year, month, 1).getDay();
        return (day === 0 ? 6 : day - 1);
    };

    const handleNextMonth = (e) => {
        e.stopPropagation();
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handlePrevMonth = (e) => {
        e.stopPropagation();
        // Prevent going back past today if needed, but for now simple nav is fine
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleDateClick = (day) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(newDate);
        setShowDateDropdown(false);
    };

    const formatDate = (date) => {
        if (!date) return 'Select Date';
        // Format: "Sat, 20 Jan"
        const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };

    // Filter displayed doctors
    const displayDoctors = doctorsData.filter(doc => doc.type === activeTab);

    // Calendar Grid Gen
    const daysInCurrentMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const startDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const calendarDays = [];
    // Empty slots
    for (let i = 0; i < startDay; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }
    // Days
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
        const isSelected = selectedDate &&
            dateToCheck.getDate() === selectedDate.getDate() &&
            dateToCheck.getMonth() === selectedDate.getMonth() &&
            dateToCheck.getFullYear() === selectedDate.getFullYear();

        const isToday = new Date().toDateString() === dateToCheck.toDateString();

        calendarDays.push(
            <button
                key={i}
                onClick={(e) => { e.stopPropagation(); handleDateClick(i); }}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all
                    ${isSelected ? 'bg-[#a7358d] text-white shadow-md' : 'text-gray-700 hover:bg-[#fcebf5] hover:text-[#a7358d]'}
                    ${isToday && !isSelected ? 'border border-[#a7358d] text-[#a7358d]' : ''}
                `}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="w-full bg-[#f4f6f8] pb-7 font-sans">
            {/* Styling Wrapper for global neatness if needed */}
            <div className="w-full max-w-[1550px] pt-12 mx-auto px-4 lg:px-8">

                {/* Search Section */}
                <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100/80">
                    <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8 tracking-tight">Find a Doctor in 3 easy steps</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">

                        {/* Speciality Dropdown */}
                        <div className="flex flex-col gap-2 relative z-30" ref={specRef}>
                            <label className="text-xs font-bold text-[#4a4a4a] uppercase tracking-wider">Select Speciality<span className="text-red-500">*</span></label>
                            <div
                                className={`relative w-full border rounded-xl px-4 py-3.5 cursor-pointer bg-white flex items-center justify-between transition-all ${showSpecDropdown ? 'border-[#a7358d] ring-2 ring-[#a7358d]/10' : 'border-gray-200 hover:border-gray-300'}`}
                                onClick={() => setShowSpecDropdown(!showSpecDropdown)}
                            >
                                <span className={`text-[15px] font-medium ${speciality ? "text-gray-900" : "text-gray-400"}`}>
                                    {speciality || "Enter Speciality"}
                                </span>
                                <FaChevronDown className={`text-gray-400 text-xs transition-transform duration-200 ${showSpecDropdown ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Dropdown Content */}
                            {showSpecDropdown && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-2 max-h-[320px] flex flex-col animate-in fade-in zoom-in-95 duration-200">
                                    <div className="relative mb-2 px-1">
                                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                        <input
                                            type="text"
                                            placeholder="Search speciality..."
                                            className="w-full bg-gray-50 border-none rounded-lg pl-10 pr-3 py-2.5 text-sm text-gray-800 outline-none focus:ring-1 focus:ring-[#a7358d]"
                                            value={specSearch}
                                            onChange={(e) => setSpecSearch(e.target.value)}
                                            autoFocus
                                        />
                                    </div>
                                    <div className="overflow-y-auto flex-1 custom-scrollbar px-1">
                                        {filteredSpecs.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex justify-between items-center py-2.5 px-3 hover:bg-[#fcebf5] hover:text-[#a7358d] cursor-pointer rounded-lg group transition-colors"
                                                onClick={() => {
                                                    setSpeciality(item);
                                                    setShowSpecDropdown(false);
                                                }}
                                            >
                                                <span className="text-sm font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Date Picker Dropdown */}
                        <div className="flex flex-col gap-2 relative z-20" ref={dateRef}>
                            <label className="text-xs font-bold text-[#4a4a4a] uppercase tracking-wider">Select Date<span className="text-red-500">*</span></label>
                            <div
                                className={`relative w-full border rounded-xl px-4 py-3.5 cursor-pointer bg-white flex items-center justify-between transition-all ${showDateDropdown ? 'border-[#a7358d] ring-2 ring-[#a7358d]/10' : 'border-gray-200 hover:border-gray-300'}`}
                                onClick={() => setShowDateDropdown(!showDateDropdown)}
                            >
                                <span className={`text-[15px] font-medium ${selectedDate ? "text-gray-900" : "text-gray-400"}`}>
                                    {formatDate(selectedDate)}
                                </span>
                                <FaCalendarAlt className="text-gray-400" />
                            </div>

                            {/* Custom Calendar UI */}
                            {showDateDropdown && (
                                <div className="absolute top-full left-0 w-[320px] mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 p-5 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="flex justify-between items-center mb-5">
                                        <button
                                            onClick={handlePrevMonth}
                                            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#fcebf5] hover:text-[#a7358d] transition-colors"
                                        >
                                            <FaChevronLeft className="text-xs" />
                                        </button>
                                        <span className="font-bold text-gray-800 text-[15px]">
                                            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                        </span>
                                        <button
                                            onClick={handleNextMonth}
                                            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#fcebf5] hover:text-[#a7358d] transition-colors"
                                        >
                                            <FaChevronRight className="text-xs" />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-7 mb-3 text-center">
                                        {daysOfWeek.map(d => (
                                            <span key={d} className="text-[11px] text-gray-400 font-bold tracking-wider">{d}</span>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-7 gap-y-2 gap-x-1 justify-items-center">
                                        {calendarDays}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Location Dropdown */}
                        <div className="flex flex-col gap-2 relative z-10" ref={locRef}>
                            <label className="text-xs font-bold text-[#4a4a4a] uppercase tracking-wider">Preferred Location<span className="text-red-500">*</span></label>
                            <div className="relative group">
                                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-[#a7358d] transition-colors" />
                                <input
                                    type="text"
                                    value={locSearch || location}
                                    placeholder="Search location"
                                    onChange={(e) => {
                                        setLocSearch(e.target.value);
                                        setShowLocDropdown(true);
                                    }}
                                    onFocus={() => setShowLocDropdown(true)}
                                    className={`w-full border rounded-xl pl-12 pr-10 py-3.5 text-[15px] font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 ${showLocDropdown ? 'border-[#a7358d] ring-2 ring-[#a7358d]/10' : 'border-gray-200 hover:border-gray-300'}`}
                                />
                                {location && !locSearch && (
                                    <button
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        onClick={() => { setLocation(''); setLocSearch(''); }}
                                    >
                                        ×
                                    </button>
                                )}
                            </div>

                            {/* Location Suggestions */}
                            {showLocDropdown && (locSearch || location) && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2 max-h-[300px] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                                    {(filteredLocs.length > 0 ? filteredLocs : locationList).map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-[#fcebf5] cursor-pointer border-b border-gray-50 last:border-none group transition-colors"
                                            onClick={() => {
                                                setLocation(item);
                                                setLocSearch('');
                                                setShowLocDropdown(false);
                                            }}
                                        >
                                            <FaMapMarkerAlt className="text-gray-400 group-hover:text-[#a7358d] shrink-0 transition-colors" />
                                            <span className="text-sm text-gray-800 font-medium group-hover:text-[#a7358d] transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pb-0.5">
                            <button
                                onClick={() => setShowResults(true)}
                                className="w-full bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg transform active:scale-[0.98] text-[15px]"
                            >
                                Search Doctors
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                {showResults && (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        {/* Tabs */}
                        <div className="flex justify-center md:justify-start gap-4 mb-8">
                            <button
                                onClick={() => setActiveTab('hospital')}
                                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${activeTab === 'hospital'
                                    ? 'bg-[#a7358d] text-white shadow-md transform scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                Hospital Visit
                            </button>
                            <button
                                onClick={() => setActiveTab('online')}
                                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${activeTab === 'online'
                                    ? 'bg-[#a7358d] text-white shadow-md transform scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                Consult Online
                            </button>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-[#1a1a1a]">Best matching doctors</h3>
                            <span className="text-sm text-gray-500">{displayDoctors.length} results found</span>
                        </div>

                        {/* Doctors Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayDoctors.map((doc) => (
                                <div key={doc.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
                                    <div className="p-5 flex gap-5">
                                        {/* Image */}
                                        <div className="shrink-0">
                                            <div className="w-[100px] h-[100px] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div className="flex flex-col gap-1.5 w-full">
                                            <h4 className="text-[17px] font-bold text-[#1a1a1a] leading-tight group-hover:text-[#a7358d] transition-colors">{doc.name}</h4>
                                            <p className="text-[#666] text-sm font-medium">{doc.role}</p>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <span className="bg-[#fcebf5] text-[#a7358d] px-2 py-0.5 rounded font-bold">{doc.exp}</span>
                                                <span>•</span>
                                                <span className="truncate max-w-[140px]" title={doc.degree}>{doc.degree}</span>
                                            </div>

                                            <div className="mt-2 flex items-center gap-1.5 text-[#4a4a4a] text-sm">
                                                <FaMapMarkerAlt className="text-gray-300 text-xs" />
                                                <span className="truncate">{doc.location}</span>
                                            </div>
                                            <p className="text-[#888] text-xs line-clamp-1 pl-4">{doc.clinic}</p>
                                        </div>
                                    </div>

                                    <div className="px-5 pb-4 flex justify-between items-center border-t border-gray-50 pt-3">
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Consultation Fee</p>
                                            <p className="text-[#1a1a1a] font-bold text-lg">{doc.fee}</p>
                                        </div>
                                        <button className="bg-white border border-[#a7358d] text-[#a7358d] hover:bg-[#a7358d] hover:text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">
                                            Book Now
                                        </button>
                                    </div>

                                    {/* Action Strip */}
                                    <div className="bg-[#f9fafb] py-2.5 px-5 flex justify-between items-center border-t border-gray-100 group-hover:bg-[#fcebf5] transition-colors">
                                        <span className="text-xs font-bold text-gray-600 group-hover:text-[#a7358d]">
                                            {activeTab === 'hospital' ? 'Clinic Visit' : 'Video Consult'}
                                        </span>
                                        <span className="text-[11px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                            Available in {doc.availableTime}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
