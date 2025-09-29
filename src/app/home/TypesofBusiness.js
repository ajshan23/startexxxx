"use client"
import Image from 'next/image';
import React from 'react'
import Logo1 from "../../../public/assets/images/home/l-1.svg";
import Card from "../../../public/assets/images/home/license-card.png";
import ResCard from "../../../public/assets/images/home/card-res.png";
import Asset1 from "../../../public/assets/images/home/card-asset.svg";
import Asset2 from "../../../public/assets/images/home/card-asset2.svg";
import consultantFav from '../../../public/assets/images/home/fav-i.png';
import Image1 from '../../../public/assets/images/licensing/b.webp';
import LicenseModal from '../components/LicenseModal';

export const licenses = [
  {
    name: "Logistics License",
    icon: "/assets/icons/truck.svg",
    image: Image1,
    description:
     ' "A Logistics License in Dubai is essential for businesses involved in supply chain management, freight forwarding, cargo transport, warehousing, and distribution. It enables streamlined movement of goods across borders and supports regional and international trade. Ideal for courier companies, transportation services, and warehouse operators."'
  },
  {
    name: "Restaurant License",
    icon: "/assets/icons/restaurant.svg",
    image: "/assets/images/home/license-types/restaurant-license.webp",
    description:
      "A Restaurant License allows entrepreneurs to open and operate cafes, fast-food joints, or fine dining restaurants in the UAE. It ensures you comply with food safety regulations and zoning approvals while serving dine-in, takeout, or delivery services. This license is crucial for anyone entering the UAE's vibrant food and beverage sector."
  },
  {
    name: "Medical Clinic License",
    icon: "/assets/icons/clinic-medical.svg",
    image: "/assets/images/home/license-types/medical-clinic.webp",
    description:
      "A Medical Clinic License is required to open private clinics, dental practices, diagnostic labs, or specialized medical centers in the UAE. This license ensures that your healthcare facility complies with Dubai Health Authority (DHA) or Ministry of Health (MOH) regulations, supporting ethical, high-quality patient care."
  },
  {
    name: "Gold Trading License",
    icon: "/assets/icons/gold.svg",
    image: "/assets/images/home/license-types/gold-trade.webp",
    description:
      "This license allows you to trade in gold and precious metals within the UAE's booming gold market. Ideal for jewelers, bullion traders, and wholesalers, it supports import/export, retail, and investment activities. It's crucial for those looking to tap into the global demand for gold in a tax-friendly, high-security environment."
  },
  {
    name: "Delivery Services License",
    icon: "/assets/icons/delivery.svg",
    image: "/assets/images/home/license-types/delivery-service.webp",
    description:
      "This license permits businesses to provide last-mile delivery services, including food, e-commerce products, groceries, and parcels. It covers both logistics and courier businesses operating independently or partnering with platforms like Talabat, Deliveroo, or Amazon UAE."
  },
  {
    name: "Consultancy License",
    icon: "/assets/icons/work.svg",
    image: "/assets/images/home/license-types/consultancy.webp",
    description:
      "A Consultancy License is designed for professionals offering expert advice in areas such as business, marketing, HR, education, and IT. This license suits freelance consultants, agencies, and specialized firms aiming to support businesses in strategy, planning, and growth."
  },
  {
    name: "Education License",
    icon: "/assets/icons/graduation-hat.svg",
    image: "/assets/images/home/license-types/education.webp",
    description:
      "With an Education License, you can establish schools, training centers, or e-learning platforms. This license is necessary for academic institutions, vocational institutes, language schools, and coaching centers aiming to deliver quality education in the UAE."
  },
  {
    name: "Industrial Trade License",
    icon: "/assets/icons/industrial-scales.svg",
    image: "/assets/images/home/license-types/industrial-trade.webp",
    description:
      "An Industrial License allows for the manufacturing and industrial processing of goods. Ideal for factories and plants producing food, furniture, textiles, and chemicals, this license helps build a solid foundation for industrial ventures in designated economic zones."
  },
  {
    name: "E-commerce License",
    icon: "/assets/icons/E-commerce.svg",
    image: "/assets/images/home/license-types/ecommerce.webp",
    description:
      "This license enables you to legally operate an online store or platform in the UAE. Perfect for entrepreneurs selling products or services via websites, social media, or marketplaces like Amazon and Noon. It provides digital businesses with a compliant, scalable presence."
  },
  {
    name: "Trade License ",
    icon: "/assets/icons/trending-up.svg",
    image: "/assets/images/home/license-types/trade.webp",
    description:
      "A Trade License is the most common license in the UAE and covers buying and selling of goods within local and international markets. Whether you're importing electronics, exporting fabrics, or distributing consumer goods, this license enables general or specialized trading operations."
  },
  {
    name: "Advertising License",
    icon: "/assets/icons/adversal.svg",
    image: "/assets/images/home/license-types/adverticement.webp",
    description:
      "This license is required for companies engaged in media production, digital marketing, outdoor ads, public relations, and branding. It allows you to run marketing campaigns, produce promotional materials, and collaborate with media outlets while adhering to UAE's content and ad regulations."
  },
  {
    name: "Tourism License",
    icon: "/assets/icons/travel.svg",
    image: "/assets/images/home/license-types/tourism.webp",
    description:
      "A Tourism License is a must-have for operating travel agencies, tour guides, and inbound/outbound tourism services. It allows you to organize packages, hotel bookings, desert safaris, and excursions while catering to the UAE's growing tourist population."
  },
  {
    name: "Regulatory License",
    icon: "/assets/icons/control.svg",
    image: "/assets/images/home/license-types/regulatory.webp",
    description:
      "A Regulatory License is required for businesses dealing with compliance, certifications, auditing, or legal approvals. It supports firms operating in regulated industries like pharmaceuticals, healthcare, environment, and financial advisory."
  },
  {
    name: "Construction Business License",
    icon: "/assets/icons/construct-outline.svg",
    image: "/assets/images/home/license-types/construction.webp",
    description:
      "This license permits firms to engage in building residential, commercial, or infrastructure projects. It's ideal for civil engineering companies, contractors, and real estate developers involved in UAE's ever-growing skyline and construction sector."
  },
  {
    name: "IT Business License",
    icon: "/assets/icons/memory.svg",
    image: "/assets/images/home/license-types/information.webp",
    description:
      "The IT Business License allows you to launch tech startups, software development firms, app design companies, or IT support services. Perfect for digital innovators aiming to contribute to UAE's Smart City and tech-forward initiatives."
  },
  {
    name: "Transportation License",
    icon: "/assets/icons/transport.svg",
    image: "/assets/images/home/license-types/transport.webp",
    description:
      "This license is for companies offering public transport, rental car fleets, school bus services, or private chauffeur operations. It ensures compliance with road safety, RTA regulations, and fleet management standards in the UAE."
  },
  {
    name: "Crypto Trading License",
    icon: "/assets/icons/bitcoin-convert.svg",
    image: "/assets/images/home/license-types/crypto.webp",
    description:
      "This license allows firms to operate within the blockchain and cryptocurrency sectors legally. Businesses can offer crypto exchanges, wallets, NFT marketplaces, or DeFi platforms under strict regulatory oversight from Dubai's Virtual Assets Regulatory Authority (VARA)."
  },
  {
    name: "Holding License",
    icon: "/assets/icons/hand-holding-usd-solid.svg",
    image: "/assets/images/home/license-types/holdings.webp",
    description:
      "A Holding License allows investors to establish a holding company that manages and controls other companies, real estate assets, or intellectual properties. It's used for asset protection, portfolio management, and long-term investment structuring."
  },
  {
    name: "Real Estate License",
    icon: "/assets/icons/home.svg",
    image: "/assets/images/home/license-types/real-estate.webp",
    description:
      "This license is essential for buying, selling, leasing, or managing properties in Dubai or other emirates. Ideal for agents, brokers, or real estate firms operating in residential, commercial, or industrial property markets."
  },
  {
    name: "Accounting License",
    icon: "/assets/icons/Stat.svg",
    image: "/assets/images/home/license-types/accounting.webp",
    description:
      "An Accounting License enables individuals or firms to offer bookkeeping, auditing, financial analysis, and tax filing services. It's suitable for professionals helping businesses remain compliant and financially organized."
  },
  {
    name: "Brokerage License",
    icon: "/assets/icons/permissions.svg",
    image: "/assets/images/home/license-types/brokerage.webp",
    description:
      "This license authorizes companies to act as intermediaries in sectors like insurance, real estate, commodities, or financial markets. It suits firms facilitating transactions between buyers and sellers across a wide range of industries."
  },
  {
    name: "Used Car Trading License",
    icon: "/assets/icons/car.svg",
    image: "/assets/images/home/license-types/car.webp",
    description:
      "A Used Car Trading License is required to buy, sell, or export pre-owned vehicles in the UAE. It's ideal for showrooms, dealers, or exporters looking to tap into the region's large used vehicle market with flexible business operations."
  }
];

function TypesofBusiness() {
    const [selectedLicense, setSelectedLicense] = React.useState(null);

    return (
        <div className='md:px-8 lg:px-[90px] px-4 md:py-20 py-10 animate-fade-in-up-scroll' id='business-activities'>
            <div className='relative pt-8 pb-8'>
                <h3 className='md:text-[50px] text-[25px] font-[4000] text-white ps-5'>Types of Business Activities</h3>
                <p className='md:w-[70%] md:text-[18px] text-[16px] font-[300] pt-5 ps-5 text-white'>Considering your business segment is crucial during the license registration process in Dubai. With Startex expert team boasting years of experience, we ensure precise selection from the comprehensive category list.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6 md:pb-5 pb-0 relative z-10">
                    {licenses.map((license, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedLicense(license)}
                            className="flex items-center gap-5 md:rounded-xl rounded-md px-3 md:px-4 py-1 md:py-3 xl:py-5 l-box transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                        >
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                <Image
                                    src={license.icon}
                                    alt={license.name}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-white text-base font-[300]">{license.name}</span>
                        </div>
                    ))}
                </div>

                <div className='absolute top-0 left-0 w-full h-full rounded-xl border-3 border-amber-600'>
                    <Image
                        src={'/mask.webp'}
                        alt="License Card"
                        layout='fill'
                        className="object-cover z-[-1]"
                    />
                </div>

                <div className='absolute bottom-[40px] md:right-[-80px] w-[170px] z-[-5] h-full'>
                    <Image
                        src={Asset1}
                        alt="License Card"
                        width={500}
                        height={500}
                        className=" w-full h-full asset1"
                    />
                </div>

                <div className='absolute bottom-[40px] left-[-80px] w-[170px] z-[-5] h-[170px]'>
                    <Image
                        src={Asset2}
                        alt="License Card"
                        width={500}
                        height={500}
                        className=" w-full h-full asset1"
                    />
                </div>

                <div className='absolute top-0 right-[80px] w-[220px] z-[-5] h-[170px] opacity-45'>
                    <Image
                        src={consultantFav}
                        alt="Consultantfav"
                        width={500}
                        height={500}
                        className=" w-full h-full "
                    />
                </div>
            </div>
       
            {selectedLicense && (
                <LicenseModal
                    license={selectedLicense}
                    onClose={() => setSelectedLicense(null)}
                />
            )}
        </div>
    )
}

export default TypesofBusiness