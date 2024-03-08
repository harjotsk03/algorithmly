import React from 'react';
import sortIcon from '../images/sortIcon.webp';
import settingsIcon from '../images/settingIcon.webp';
import searchIcon from '../images/searchIcon.webp'
import homeIcon from '../images/homeIcon.webp';

const LeftOptions = ({ activeTab, onTabChange }) => {
  return (
    <div className='flex flex-col text-left items-start gap-2 mb-24'>
      <h4 className='ml-14 text-sm secondary tools mb-3 tracking-wider'>User Tools</h4>
      {/* <button
        className={`btnNav btnDisabled ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => onTabChange('home')} // Call onTabChange with 'search' when clicked
      >
        <img src={homeIcon} alt="Search Icon"></img>
        Home
      </button> */}
      <button
        className={`btnNav btnDisabled ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => onTabChange('search')} // Call onTabChange with 'search' when clicked
      >
        <img src={searchIcon} alt="Search Icon"></img>
        Search
      </button>
      <button
        className={`btnNav ${activeTab === 'sort' ? 'active' : ''}`}
        onClick={() => onTabChange('sort')} // Call onTabChange with 'sort' when clicked
      >
        <img src={sortIcon} alt="Sort Icon"></img>
        Sort
      </button>
      <button
        className={`btnNav ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => onTabChange('settings')} // Call onTabChange with 'settings' when clicked
        disabled
      >
        <img src={settingsIcon} alt="Settings Icon"></img>
        Settings
      </button>
      <a target='_blank' href="https://harjotsinghkooner.com">
            <p className='fixed text-white secondary opacity-20 bottom-2 left-3'>Created by Harjot Singh</p>
      </a>
    </div>
  );
};

export default LeftOptions;
