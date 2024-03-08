import React, { useState, useEffect } from 'react';
import resetIcon from '../images/resetBtn.webp';

export const LinearSearch = () => {
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
        setArray(newArray);
        setIsSorted(false);
        setCurrentIndex(null); // Reset currentIndex
        setTargetIndex(null); // Reset targetIndex
    };

    const linearSearch = async () => {
        setSearching(true);
        setTargetIndex(null);
        setCurrentIndex(null);

        const target = parseInt(targetNumber);
        if (!isNaN(target)) {
            for (let i = 0; i < array.length; i++) {
                setCurrentIndex(i); // Highlight the current index

                if (array[i] === target) {
                    setTargetIndex(i); // Highlight the target element
                    setSearching(false);
                    return i; // Element found
                }

                await new Promise(resolve => setTimeout(resolve, animationSpeed)); // Delay for visualization
            }
            setSearching(false);
            alert('Number not found')
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
                        onClick={linearSearch}
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
                        <div key={index} className={`sortElement ${index === currentIndex ? 'flash' : ''} ${isSorted ? 'flash2' : ''}`} style={{ height: `${number * 4}px`,width: `${100 / array.length}%` }}></div>
                    ))}
                </div>
                <div className='explainBox w-10/12 flex flex-row items-center h-auto rounded-lg ml-20 mt-4 mb-0 py-4 px-6'>
                    <div className='w-8/12'>
                        <p className='explainContent secondary text-white text-md tracking-wider'>
                        Linear search is suitable for small lists or when the target element is expected to be near the beginning of the list. However, for large lists or scenarios requiring faster search times, binary search or hash-based data structures are preferred.
<br></br><br></br>

- Best use case: When the target element is located near the beginning of the list. <br></br>

- Worst use case: When the target element is located at the end of the list or is not present in the list.</p>
                    </div>
                    <div className='text-end w-4/12 flex flex-col gap-2'>
                    <p className='explainContentTitle secondary text-white text-sm tracking-wider'>Time Complexity</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Best Case:</span> O(1)</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Worst Case:</span> O(n)</p>
                    </div>
                </div>
                <div className='sudoBox w-10/12 flex flex-row items-center h-auto rounded-lg ml-20 mt-4 mb-0 py-4 px-6'>
                    <div>
                        <h1 className='bold text-lg mb-1 text-white'>Pseudocode</h1>
                        <pre className='sudoContent secondary text-md tracking-wider'>
                            function <span className='bold'>linearSearch(array: List of sortable items, target: Element to search for)</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>for each item in array</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if item {'='} target<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return index of item<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1 // target not found<br />
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};
