import React, { useState, useEffect } from 'react';
import resetIcon from '../images/resetBtn.webp';

export const SelectionSort = () => {
    const [array, setArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [animationSpeed, setAnimationSpeed] = useState(100);
    const [isSorted, setIsSorted] = useState(false);
    const [arrayLen, setArrayLen] = useState(70);

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
    };

    const selectionSort = async () => {
        let newArray = [...array];
        let n = newArray.length;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (newArray[j] < newArray[minIndex]) {
                    minIndex = j;
                }
            }
            setCurrentIndex(minIndex); // Highlight the current index being moved
            // Swap elements
            let temp = newArray[minIndex];
            newArray[minIndex] = newArray[i];
            newArray[i] = temp;

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, animationSpeed));

            setArray([...newArray]);
            setCurrentIndex(null); // Remove highlight after moving
        }
        setIsSorted(true);
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
                </div>
                <div className='flex flex-row gap-0'>
                    <button className='btnGo text-sm flex flex-row items-center gap-2 mr-4' onClick={selectionSort}>Sort</button>
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
                        <p className='explainContent secondary text-white text-md tracking-wider'>Selection sort is suitable for small lists or scenarios where memory usage needs to be minimized due to its in-place nature. However, for larger lists or performance-critical applications, more efficient sorting algorithms like merge sort or quicksort are preferred.</p>
                    </div>
                    <div className='text-end w-4/12 flex flex-col gap-2'>
                    <p className='explainContentTitle secondary text-white text-sm tracking-wider'>Time Complexity</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Best Case:</span> O(n)²</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Worst Case:</span> O(n)²</p>
                    </div>
                </div>
                <div className='sudoBox w-10/12 flex flex-row items-center h-auto rounded-lg ml-20 mt-4 mb-0 py-4 px-6'>
                    <div>
                        <h1 className='bold text-lg mb-1 text-white'>Pseudocode</h1>
                        <pre className='sudoContent secondary text-md tracking-wider'>
                            function <span className='bold'>selectionSort(array: List of sortable items)</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n = length(array) <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>for i from 0 to n - 1</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minIndex = i<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>for j from i + 1 to n - 1</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if array[j] {'<'} array[minIndex] <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minIndex = j<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(array[minIndex], array[i])<br />
                        </pre>
                    </div>
                </div>
            </div> 
        </div>
    );
};
