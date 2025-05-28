// components/FilterTabs.js
import React from 'react';

export default function FilterTabs({ onFilterChange, activeFilter }) {
  const tabs = ['Industries', 'Services', 'Regions'];

  const filterOptions = {
    'Industries': [
      'Show All',
      'FoodTech',
      'eCommerce & Retail',
      'Healthcare',
      'FinTech',
      'Social Media',
      'EdTech',
      'Mobility',
      'Real Estate'
    ],
    'Services': [
      'Show All',
      'Mobile Development',
      'Web Development',
      'IoT Solutions',
      'Cloud Services',
      'AI & Machine Learning',
      'UI/UX Design',
      'DevOps',
      'QA Automation'
    ],
    'Regions': [
      'Show All',
      'APAC',
      'EMEA',
      'LATAM',
      'NA',
    ]
  };

  const handleTabChange = (tab) => {
    onFilterChange({ type: tab, value: 'Show All' });
  };

  const handleFilterChange = (e) => {
    onFilterChange({ type: activeFilter.type, value: e.target.value });
  };

  return (
    <>
      {/* Tab Navigation */}
      <div className="border-b border-gray-800 mb-6 overflow-x-auto">
        <div className="flex space-x-6 sm:space-x-8 min-w-max px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-lg sm:text-xl whitespace-nowrap font-medium ${
                activeFilter.type === tab
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400'
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dropdown for Filter Options */}
      <div className="mb-10 px-2">
      <select
  value={activeFilter.value}
  onChange={handleFilterChange}
  className="bg-black border border-gray-600 text-white text-base sm:text-lg px-4 py-2 rounded-md w-full max-w-[250px] sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-white mt-2"
>

          {filterOptions[activeFilter.type].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
