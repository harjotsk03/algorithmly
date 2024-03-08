import React, { useState, useEffect } from 'react';
import resetIcon from '../images/resetBtn.webp';

export const BinarySearch = () => {
    const [array, setArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [targetIndex, setTargetIndex] = useState(null);
    const [animationSpeed, setAnimationSpeed] = useState(100);
    const [isSorted, setIsSorted] = useState(false);
    const [arrayLen, setArrayLen] = useState(70);
    const [targetNumber, setTargetNumber] = useState('');
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        generateRandomArray();
    }, []);

    const generateRandomArray = () => {
        let numbersUsed = new Set();
        let newArray = [];
        while (newArray.length < arrayLen) {
            let num = Math.floor(Math.random() * 101);

            if (!numbersUsed.has(num)) {
                newArray.push(num);
                numbersUsed.add(num);
            }
        }
        setArray(newArray.sort((a, b) => a - b)); // Sort the array
        setIsSorted(true);
        setCurrentIndex(null); // Reset currentIndex
        setTargetIndex(null); // Reset targetIndex
    };

    const binarySearch = async () => {
        setSearching(true);
        setTargetIndex(null);
        setCurrentIndex(null);

        const target = parseInt(targetNumber);
        if (!isNaN(target)) {
            let low = 0;
            let high = array.length - 1;

            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                setCurrentIndex(mid); // Highlight the current mid element

                if (array[mid] === target) {
                    setTargetIndex(mid); // Highlight the target element
                    setSearching(false);
                    return mid; // Element found
                } else if (array[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }

                await new Promise(resolve => setTimeout(resolve, animationSpeed)); // Delay for visualization
            }
            setSearching(false);
            return -1; // Element not found
        } else {
            alert('Please enter a valid number to search for.');
            setSearching(false);
        }
    };

    const handleSpeedChange = (event) => {
        setAnimationSpeed(event.target.value);
    };

    return (
        <div>
            <div className='flex flex-row items-center ml-20 mt-6 gap-4'>
                <div className='flex flex-row gap-2 items-center'>
                    <h5 className='text-white secondary text-sm'>Faster</h5>
                    <div className='slider-container'>
                        <input
                            type="range"
                            min="10"
                            max="500"
                            value={animationSpeed}
                            onChange={handleSpeedChange}
                            className='slider mt-5'
                        />
                    </div>
                    <h5 className='text-white secondary text-sm mr-6'>Slower</h5>
                    <h5 className='text-white secondary text-sm'>Array Length:</h5>
                    <div className='slider-container'>
                        <input
                            type="range"
                            min="5"
                            max="100"
                            value={arrayLen}
                            onChange={(e) => setArrayLen(e.target.value)}
                            className='slider mt-5'
                        />
                    </div>
                    <h5 className='text-white secondary text-sm'>Target Number:</h5>
                    <input
                        type="number"
                        value={targetNumber}
                        onChange={(e) => setTargetNumber(e.target.value)}
                        className='input-field'
                    />
                </div>
                <div className='flex flex-row gap-0'>
                    <button
                        className='btnGo text-sm flex flex-row items-center gap-2 mr-4'
                        onClick={binarySearch}
                        disabled={searching}
                    >
                        {searching ? 'Searching...' : 'Search'}
                    </button>
                    <button className='btnReset text-sm flex flex-row items-center gap-2 mr-20' onClick={generateRandomArray}><img src={resetIcon} alt="Reset Button" /></button>
                </div>
            </div>
            <div className="scrollable-content mt-8" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
                <div className='sortContainer ml-20 rounded-lg w-10/12 p-12 bgColor2'>
                    {array.map((number, index) => (
                        <div key={index} className={`sortElement ${index === currentIndex ? 'flash' : ''} ${index === targetIndex ? 'flash2' : ''}`} style={{ height: `${number * 4}px`, width: `${100 / array.length}%` }}></div>
                    ))}
                </div>
                <div className='explainBox w-10/12 flex flex-row items-center h-auto rounded-lg ml-20 mt-4 mb-0 py-4 px-6'>
                    <div className='w-8/12'>
                        <p className='explainContent secondary text-white text-md tracking-wider'>
                        Binary search is suitable for large sorted lists or arrays, providing efficient search times by repeatedly dividing the search interval in half. However, binary search requires that the list be sorted beforehand.
<br></br><br></br>
- Best use case: When searching large sorted lists or arrays where the target element is expected to be located near the middle.
<br></br> - Worst use case: When searching unsorted lists or arrays or when the target element is not present in the list.</p>
                    </div>
                    <div className='text-end w-4/12 flex flex-col gap-2'>
                    <p className='explainContentTitle secondary text-white text-sm tracking-wider'>Time Complexity</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Best Case:</span> O(1)</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Worst Case:</span> O(log n)</p>
                    </div>
                </div>
                <div className='sudoBox w-10/12 flex flex-row items-center h-auto rounded-lg ml-20 mt-4 mb-0 py-4 px-6'>
                    <div>
                        <h1 className='bold text-lg mb-1 text-white'>Pseudocode</h1>
                        <pre className='sudoContent secondary text-md tracking-wider'>
                            function <span className='bold'>binarySearch(array: List of sorted items, targe: Elements to search for)</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;low = 0 <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;high = length(array) - 1<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>while low {'<='} high</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mid = (low + high) / 2<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>if array[mid] {'='} target</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return mid<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>else if array[mid] {'<'} target</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;low = mid + 1<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>else</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;high = mid - 1<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1 // target not found<br />
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};
