import React, { useState } from 'react';
import { BubbleSort } from './bubbleSort';
import { InsertionSort } from './insertionSort';
import { MergeSort } from './mergeSort';
import { QuickSort } from './quickSort';
import { SelectionSort } from './selectionSort';

const SortPage = () => {
    const [activeMethodSort, setActiveMethodSort] = useState('Bubble');

    return (
        <div className='fixed top-0 w-3/4 bgColor z-10 pb-6'>
            <h1 className='text-white third text-3xl ml-20 mt-16 tracking-wide mb-6'>Sort Algorithms</h1>
            <div className='flex flex-row items-center justify-between'>
                <div className='ml-20 flex flex-row gap-4'>
                    <button
                        className={`btnSort text-sm tracking-wide ${activeMethodSort === 'Bubble' ? 'active' : ''}`}
                        onClick={() => setActiveMethodSort('Bubble')}
                    >
                        Bubble Sort
                    </button>
                    <button className={`btnSort text-sm tracking-wide ${activeMethodSort === 'Selection' ? 'active' : ''}`}
                        onClick={() => setActiveMethodSort('Selection')}
                    >
                        Selection Sort
                    </button>
                    <button className={`btnSort text-sm tracking-wide ${activeMethodSort === 'Insertion' ? 'active' : ''}`}
                        onClick={() => setActiveMethodSort('Insertion')}
                    >
                        Insertion Sort
                    </button>
                    <button className={`btnSort text-sm tracking-wide ${activeMethodSort === 'Merge' ? 'active' : ''}`}
                        onClick={() => setActiveMethodSort('Merge')}
                    >
                        Merge Sort
                    </button>
                    <button className={`btnSort text-sm tracking-wide ${activeMethodSort === 'Quick' ? 'active' : ''}`}
                        onClick={() => setActiveMethodSort('Quick')}
                    >
                        Quick Sort
                    </button>
                </div>
            </div>
            <div>
                {activeMethodSort === 'Bubble' ? (
                    <div>
                        <BubbleSort />
                    </div>
                ): activeMethodSort === 'Selection' ?(
                    <div>
                        <SelectionSort />
                    </div>
                ): activeMethodSort === 'Insertion' ?(
                    <div>
                        <InsertionSort />
                    </div>
                ): activeMethodSort === 'Merge' ? (
                   <div>
                        <MergeSort />
                   </div> 
                ): activeMethodSort === 'Quick' ? (
                    <div>
                        <QuickSort />
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

export default SortPage;
