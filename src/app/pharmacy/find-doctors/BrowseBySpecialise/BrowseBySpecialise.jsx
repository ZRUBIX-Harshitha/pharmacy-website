"use client";
import React from 'react';

const specialties = [
    { name: "General Physician", image: "https://images.apollo247.in/specialty/615ebc75-4172-4f46-9ba0-b3688c053fcc-1721716587044.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Dermatology", image: "https://images.apollo247.in/specialty/73dae7a6-ec1f-45c4-98bd-0c8acb6e4eca-1718393652685.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Obstetrics & Gynaecology", image: "https://images.apollo247.in/specialty/d67d4978-a14a-46c8-8af8-697823bfcadf-1718394471977.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Orthopaedics", image: "https://images.apollo247.in/specialty/07337088-ca54-4e67-8c53-6a5c03b07a7f-1718517850079.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "ENT", image: "https://images.apollo247.in/specialty/f325ede7-8710-49a6-b0ea-32ddc06f2b4c-1718393325515.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" }, // Swapped manually to likely match ENT based on list position if needed, or just assigning sequential ID.
    { name: "Neurology", image: "https://images.apollo247.in/specialties/ic_neurology.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Cardiology", image: "https://images.apollo247.in/specialty/d188a910-996b-4478-b014-72a8ec54312e-1718395128194.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Urology", image: "https://images.apollo247.in/specialty/789b2a65-1d81-4023-92c8-39959ca8a7ed-1718393945815.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Gastroenterology", image: "https://images.apollo247.in/specialty/f00cc642-2034-4cd2-a9e7-22029fc5c8e2-1718394667647.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Psychiatry", image: "https://images.apollo247.in/specialty/4447e53c-081e-499d-8fff-ce6594bd491e-1718394721289.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" }, // Swapped to match likely list
    { name: "Paediatrics", image: "https://images.apollo247.in/specialties/ic_paediatrics.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Pulmonology", image: "https://images.apollo247.in/specialty/5372cb1b-85f4-4054-9880-879460f715cd-1721716756413.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Endocrinology", image: "https://images.apollo247.in/specialty/bab64064-cb6a-473f-8dad-e55eaebbef30-1721717859816.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Nephrology", image: "https://images.apollo247.in/specialty/7cedbc2f-1c04-46cb-8fc8-bcd2eca77802-1718362077372.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Neurosurgery", image: "https://images.apollo247.in/specialty/6e8e535f-2df3-46f8-967e-1a04306c35a4-1718394797424.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Rheumatology", image: "https://images.apollo247.in/specialty/4da153f2-a7b3-46ac-8d61-7f5661ab9904-1718394497597.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Ophthalmology", image: "https://images.apollo247.in/specialty/f3dcf81b-e39d-4844-a5f0-ed7192d94b1a-1718361900653.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Surgical Gastro", image: "https://images.apollo247.in/specialty/cbc11a69-397f-4478-b526-ba9820f3d652-1718394144943.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Infectious Disease", image: "https://images.apollo247.in/specialty/8845cfb0-7f3b-49fe-81ed-0f639c97ba23-1718393972666.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "General Surgery", image: "https://images.apollo247.in/specialty/6147312b-0e6b-4b2e-a20c-991243a85625-1718394692716.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Psychology", image: "https://images.apollo247.in/specialty/8ab7711b-cf37-41f8-b610-a1a4afdc49c9-1718394299540.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Medical Oncology", image: "https://images.apollo247.in/specialty/556c709b-bde6-4b81-becd-3e809ec2d682-1718393677886.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Diabetology", image: "https://images.apollo247.in/specialty/4ce59e16-e22b-4059-9cae-365408e34b8c-1718393604945.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Dentist", image: "https://images.apollo247.in/specialties/ic_dentist.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" } // Assuming last one is dentist if available or reusing generic/missing from list.
];
// NOTE: I manually adjusted the list to try and align 'ic_' names. For the last one 'Dentist', I don't see an explicit 'ic_dentist' in the user list, so I will use the last URL provided by user which is '...4059...'.
// Let's re-verify the last item.
// User list item 24: ...4059-9cae... 
// My list above ends with ...4059... for Diabetology.
// Wait, I might have missed one or user provided 23?
// User provided 23 lines?
// Let's count user lines:
// 1. 615...
// 2. 73dae...
// 3. d67...
// 4. 073...
// 5. ic_neurology (used for neuro)
// 6. f325... (used for ENT)
// 7. d188... (used for Cardio)
// 8. 789b... (used for Uro)
// 9. f00c... (used for Gastro)
// 10. ic_paediatrics (used for Paed)
// 11. 4447... (used for Psych) - Swapped with Paed
// 12. 5372... (Pulmo)
// 13. bab6... (Endo)
// 14. 7ced... (Nephro)
// 15. 6e8e... (Neurosur)
// 16. 4da1... (Rheuma)
// 17. f3dc... (Ophthal)
// 18. cbc1... (Surgical Gastro)
// 19. 8845... (Infectious)
// 20. 6147... (Gen Surgery)
// 21. 8ab7... (Psychology)
// 22. 556c... (Onco)
// 23. 4ce5... (Diabetology? Or Dentist?)
// User sent 23 URLs. Screenshot has 24 items.
// I will reuse the first one or a placeholder for the last one "Dentist" if missing, or maybe one URL was double?
// I'll stick to 23 items or duplicate one for the 24th to complete the grid.

// Updated array for Code Content:
const specialtiesFinal = [
    { name: "General Physician", image: "https://images.apollo247.in/specialty/615ebc75-4172-4f46-9ba0-b3688c053fcc-1721716587044.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Dermatology", image: "https://images.apollo247.in/specialty/73dae7a6-ec1f-45c4-98bd-0c8acb6e4eca-1718393652685.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Obstetrics & Gynaecology", image: "https://images.apollo247.in/specialty/d67d4978-a14a-46c8-8af8-697823bfcadf-1718394471977.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Orthopaedics", image: "https://images.apollo247.in/specialty/07337088-ca54-4e67-8c53-6a5c03b07a7f-1718517850079.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "ENT", image: "https://images.apollo247.in/specialty/f325ede7-8710-49a6-b0ea-32ddc06f2b4c-1718393325515.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Neurology", image: "https://images.apollo247.in/specialties/ic_neurology.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Cardiology", image: "https://images.apollo247.in/specialty/d188a910-996b-4478-b014-72a8ec54312e-1718395128194.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Urology", image: "https://images.apollo247.in/specialty/789b2a65-1d81-4023-92c8-39959ca8a7ed-1718393945815.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Gastroenterology", image: "https://images.apollo247.in/specialty/f00cc642-2034-4cd2-a9e7-22029fc5c8e2-1718394667647.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Psychiatry", image: "https://images.apollo247.in/specialty/4447e53c-081e-499d-8fff-ce6594bd491e-1718394721289.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Paediatrics", image: "https://images.apollo247.in/specialties/ic_paediatrics.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" },
    { name: "Pulmonology", image: "https://images.apollo247.in/specialty/5372cb1b-85f4-4054-9880-879460f715cd-1721716756413.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Endocrinology", image: "https://images.apollo247.in/specialty/bab64064-cb6a-473f-8dad-e55eaebbef30-1721717859816.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Nephrology", image: "https://images.apollo247.in/specialty/7cedbc2f-1c04-46cb-8fc8-bcd2eca77802-1718362077372.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Neurosurgery", image: "https://images.apollo247.in/specialty/6e8e535f-2df3-46f8-967e-1a04306c35a4-1718394797424.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Rheumatology", image: "https://images.apollo247.in/specialty/4da153f2-a7b3-46ac-8d61-7f5661ab9904-1718394497597.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Ophthalmology", image: "https://images.apollo247.in/specialty/f3dcf81b-e39d-4844-a5f0-ed7192d94b1a-1718361900653.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Surgical Gastro", image: "https://images.apollo247.in/specialty/cbc11a69-397f-4478-b526-ba9820f3d652-1718394144943.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Infectious Disease", image: "https://images.apollo247.in/specialty/8845cfb0-7f3b-49fe-81ed-0f639c97ba23-1718393972666.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "General Surgery", image: "https://images.apollo247.in/specialty/6147312b-0e6b-4b2e-a20c-991243a85625-1718394692716.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Psychology", image: "https://images.apollo247.in/specialty/8ab7711b-cf37-41f8-b610-a1a4afdc49c9-1718394299540.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Medical Oncology", image: "https://images.apollo247.in/specialty/556c709b-bde6-4b81-becd-3e809ec2d682-1718393677886.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Diabetology", image: "https://images.apollo247.in/specialty/4ce59e16-e22b-4059-9cae-365408e34b8c-1718393604945.png?tr=q-80,f-webp,w-50,dpr-2,c-at_max" },
    { name: "Dentist", image: "https://images.apollo247.in/specialty/615ebc75-4172-4f46-9ba0-b3688c053fcc-1721716587044.png?tr=q-80,f-webp,w-100,dpr-2,c-at_max" } // Reused first one for dentist since missing
];

export default function BrowseBySpecialise() {
    return (
        <div className="w-full pt-10 pb-16">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Browse by Specialties</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 xl:gap-7">
                    {specialtiesFinal.map((item, index) => (
                        <div key={index} className="bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 cursor-pointer group hover:-translate-y-1 duration-300 h-full">
                            <div className="w-[80px] h-[80px] bg-[#f0f3f6] rounded-[20px] flex items-center justify-center shrink-0 group-hover:bg-[#fcebf5] transition-colors">
                                <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                            </div>
                            <span className="flex-1 text-[15px] font-bold text-[#1c1c1c] group-hover:text-[#a7358d] transition-colors leading-tight word-break">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
