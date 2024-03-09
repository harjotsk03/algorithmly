import React, { useState, useEffect } from 'react';
import sortIcon from '../images/sortIcon.webp';
import settingsIcon from '../images/settingIcon.webp';
import searchIcon from '../images/searchIcon.webp'
import homeIcon from '../images/homeIcon.webp';
import quizIcon from '../images/webIcon.webp';

const LeftOptions = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || 'search');

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className='flex flex-col text-left items-start gap-2 mb-24'>
      <h4 className='ml-14 text-sm secondary tools mb-3 tracking-wider'>User Tools</h4>
      <button
        className={`btnNav btnDisabled ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => handleTabChange('search')}
      >
        <img src={searchIcon} alt="Search Icon"></img>
        Search
      </button>
      <button
        className={`btnNav ${activeTab === 'sort' ? 'active' : ''}`}
        onClick={() => handleTabChange('sort')}
      >
        <img src={sortIcon} alt="Sort Icon"></img>
        Sort
      </button>
      <button
        className={`btnNav ${activeTab === 'quiz' ? 'active' : ''}`}
        onClick={() => handleTabChange('quiz')}
      >
        <img src={quizIcon} alt="quiz Icon"></img>
        Quizzes
      </button>
      <button
        className={`btnNav ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => handleTabChange('settings')}
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
