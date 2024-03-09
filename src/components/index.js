import SortPage from './sortPage';
import SearchPage from './searchPage';
import LeftOptions from './leftOptions';
import { Home } from './home';
import { Settings } from './settings';
import { Quizes } from './quizes';
import { useState, useEffect } from 'react';

export const Index = () => {
    const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || 'search');

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

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
                ) : activeTab === 'quiz' ? (
                    <div>
                        <Quizes />
                    </div>
                ) : (
                    <div>
                        <p>Error</p>
                    </div>
                )}
            </div>
        </div>
    );
}
