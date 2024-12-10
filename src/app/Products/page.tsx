'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  IconBrandReact,
  IconBuildingBank,
  IconCreditCard,
  IconGift,
  IconCash,
  IconShieldCheck,
  IconHeartbeat,
  IconUserCheck,
  IconCurrencyDollar,
  IconWallet,
  IconLink,
  IconFileInvoice,
  IconBarcode,
  IconId,
  IconBuilding,
  IconChartLine,
  IconMapPin,
  IconRobot,
} from '@tabler/icons-react';

type Item = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

type Section = {
  title: string;
  icon: React.ReactNode;
  items: Item[];
};

const sections: Section[] = [
  {
    title: 'Banking',
    icon: <IconBuildingBank />,
    items: [
      { name: 'Connected Banking', description: 'All current accounts in one place', icon: <IconWallet /> },
      { name: 'Expense Card', description: 'Manage corporate expenses', icon: <IconCreditCard /> },
      { name: 'Gift Card', description: 'Thoughtful gifts for every occasion', icon: <IconGift /> },
      { name: 'Working Capital', description: 'Unsecured corporate loans', icon: <IconCash /> },
    ],
  },
  {
    title: 'Insurance',
    icon: <IconShieldCheck />,
    items: [
      { name: 'General Insurance', description: 'Safeguard all corporate assets', icon: <IconShieldCheck /> },
      { name: 'Health Insurance', description: 'All-inclusive health coverage', icon: <IconHeartbeat /> },
      { name: 'Life Insurance', description: 'Protect workforce with life coverage', icon: <IconUserCheck /> },
      { name: 'Become POSP Agent', description: 'Start earning as an insurance advisor', icon: <IconCurrencyDollar /> },
    ],
  },
  {
    title: 'Payments',
    icon: <IconCurrencyDollar />,
    items: [
      { name: 'Single Payouts', description: 'Payment Disbursal Simplified', icon: <IconWallet /> },
      { name: 'Bulk Payouts', description: 'Large-scale payments in a single click', icon: <IconCash /> },
      { name: 'Payout Links', description: 'Pay without bank details via links', icon: <IconLink /> },
      { name: 'Utility Bill Payments', description: 'Pay bills anywhere, anytime', icon: <IconFileInvoice /> },
      { name: 'POS', description: 'Contactless point-of-sale transactions', icon: <IconBarcode /> },
      { name: 'Static QR', description: 'Scan to access funds', icon: <IconBarcode /> },
    ],
  },
  {
    title: 'Verification',
    icon: <IconId />,
    items: [
      { name: 'Individual Verification', description: 'Get user verified in minutes', icon: <IconId /> },
      { name: 'Business Verification', description: 'Verify business partners', icon: <IconBuilding /> },
      { name: 'Financial Verification', description: 'Assess financial credibility', icon: <IconChartLine /> },
      { name: 'Geo Intelligence', description: 'Location-based insights', icon: <IconMapPin /> },
    ],
  },
  {
    title: 'AI/ML',
    icon: <IconRobot />,
    items: [
      { name: 'AI/ML', description: 'Automate operations with AI solutions', icon: <IconRobot /> },
    ],
  },
];

const ProductSection: React.FC<Section> = ({ title, icon, items }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`border rounded-lg shadow-lg p-6 bg-white transition-all duration-200 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-2xl font-semibold text-blue-700 flex items-center mb-4 tracking-wide">
        {icon} {title}
      </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center py-4 border-b last:border-none">
            <span className="text-blue-600 text-xl mr-3">{item.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center px-4 py-8">
      <header className="text-center pt-14">
        <IconBrandReact className="text-blue-700 text-6xl mx-auto animate-spin-slow" size={50} />
        <h1 className="text-5xl font-extrabold text-blue-700 mt-4 tracking-wide">Our Products</h1>
        <p className="mt-2 text-gray-600 text-lg font-medium">
          Discover our tailored services to boost your business efficiency and growth.
        </p>
      </header>
     
      {/* Product Sections */}
      <section className="w-full max-w-7xl mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transform transition-all duration-200 hover:scale-105 hover:bg-gradient-to-t from-white to-gray-50"
          >
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center mb-4 tracking-wide font-['Merriweather', serif]">
              {section.icon} {section.title}
            </h2>
            <ul>
              {/* items section with hover effect */}
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center py-4 border-b last:border-none hover:bg-blue-100 hover:shadow-md transition-all duration-200 rounded-lg p-3 cursor-pointer"
                >
                  <span className="text-blue-600 text-xl mr-3 transition-transform duration-300 transform hover:rotate-12">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 tracking-tight font-['Poppins', sans-serif]">{item.name}</h3>
                    <p className="text-gray-600 text-sm font-light font-['Nunito', sans-serif]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
