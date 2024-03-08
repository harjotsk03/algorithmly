import React, { useState } from 'react';
import searchArrow from '../images/searchArrow.webp';
import { BinarySearch } from './binarySearch';
import { LinearSearch } from './linearSearch';

const SearchPage = () => {
    const [activeMethodSearch, setActiveMethodSearch] = useState('Binary');

    return (
        <div className='fixed'>
            <h1 className='text-white third text-3xl ml-20 mt-16 tracking-wide mb-6'>Search Algorithms</h1>
            <div className='flex flex-row items-center justify-between'>
              <div className='ml-20 flex flex-row gap-4'>
                <button className={`btnSort text-sm tracking-wide ${activeMethodSearch === 'Binary' ? 'active' : ''}`}
                  onClick={() => setActiveMethodSearch('Binary')}
                >Binary Search</button>
                <button className={`btnSort text-sm tracking-wide ${activeMethodSearch === 'Linear' ? 'active' : ''}`}
                  onClick={() => setActiveMethodSearch('Linear')}
                >Linear Search</button>
              </div>
            </div>
            <div>
                {activeMethodSearch === 'Binary' ? (
                    <div>
                        <BinarySearch />
                    </div>
                ): activeMethodSearch === 'Linear' ?(
                    <div>
                      <LinearSearch />
                    </div>
                ):(
                    <div>
                        <p className='text-white'>Error</p>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default SearchPage;
