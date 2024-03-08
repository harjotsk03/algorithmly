import React, { useState } from 'react';
import './App.css';

import { BubbleSort } from './components/bubbleSort';
import SortPage from './components/sortPage';
import SearchPage from './components/searchPage';
import LeftOptions from './components/leftOptions'; // Changed import statement
import { Home } from './components/home';
import { Settings } from './components/settings';

function App() {
  const [activeTab, setActiveTab] = useState('search');

  // Callback function to update active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-row">
      <div className='sortApplicationLeft w-1/6 h-screen flex flex-col items-center justify-center fixed'>
        <LeftOptions activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <div className='sortApplication w-5/6 ml-auto'>
        {activeTab === 'search' ? (
          <SearchPage />
        ) : activeTab === 'sort' ? (
          <div>
            <SortPage />
          </div>
        ) : activeTab === 'settings' ? (
          <div>
            <Settings />
          </div>
        ) : activeTab === 'home' ? (
          <div>
            <Home />
          </div>
          ):(
          <div>
            <p>Error</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
