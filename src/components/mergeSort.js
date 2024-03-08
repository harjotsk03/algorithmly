import React, { useState, useEffect } from 'react';
import resetIcon from '../images/resetBtn.webp';

export const MergeSort = () => {
    const [array, setArray] = useState([]);
    const [animationSpeed, setAnimationSpeed] = useState(100);
    const [isSorted, setIsSorted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
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

    const mergeSort = async (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        const merge = async (left, right) => {
            let result = [];
            let i = 0, j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
                setArray([...result, ...left.slice(i), ...right.slice(j)]);
                await new Promise(resolve => setTimeout(resolve, animationSpeed)); // Delay for visualization
                setCurrentIndex(i + j); // Highlight the current index being compared
            }

            return [...result, ...left.slice(i), ...right.slice(j)];
        };

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(await mergeSort(left), await mergeSort(right));
    };

    const handleSort = async () => {
        let sortedArray = await mergeSort(array);
        setArray(sortedArray);
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
                    <button className='btnGo text-sm flex flex-row items-center gap-2 mr-4' onClick={handleSort}>Sort</button>
                    <button className='btnReset text-sm flex flex-row items-center gap-2 mr-20' onClick={generateRandomArray}><img src={resetIcon} alt="Reset Button" /></button>
                </div>
            </div>
            <div className="scrollable-content mt-8" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
                <div className='sortContainer ml-20 rounded-lg w-10/12 p-12 bgColor2'>
                    {array.map((number, index) => (
                        <div key={index} className={`sortElement ${index === currentIndex ? 'flash' : ''} ${isSorted ? 'flash2' : ''}`} style={{ height: `${number * 4}px`,width: `${100 / array.length}%` , backgroundColor: index < array.length / 2 ? '#5a5a5a' : '#929292' }}></div>
                    ))}
                </div>
                <div className='explainBox w-10/12 flex flex-row items-center h-auto rounded-lg ml-20 mt-4 mb-0 py-4 px-6'>
                    <div className='w-8/12'>
                        <p className='explainContent secondary text-white text-md tracking-wider'>
                            Merge sort is an efficient, stable, comparison-based sorting algorithm that divides the unsorted list into n sublists, each containing one element, then repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining. (Best use case: when memory usage is not a constraint and when a stable sorting algorithm is required.)
                        </p>
                    </div>
                    <div className='text-end w-4/12 flex flex-col gap-2'>
                        <p className='explainContentTitle secondary text-white text-sm tracking-wider'>Time Complexity</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Best Case:</span> O(n log n)</p>
                        <p className='explainContent secondary text-white text-md tracking-wider'><span className='text-sm'>Worst Case:</span> O(n log n)</p>
                    </div>
                </div>
                <div className='sudoBox w-10/12 flex flex-row items-center h-auto rounded-lg ml-20 mt-4 mb-0 py-4 px-6'>
                    <div>
                        <h1 className='bold text-lg mb-1 text-white'>Pseudocode</h1>
                        <pre className='sudoContent secondary text-md tracking-wider'>
                            function <span className='bold'>mergeSort(array: List of sortable items)</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>if low {'<'} high</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pi = partition(array, low, high<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(array, low, pi - 1)<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(array, pi + 1, high)<br /><br></br>

                            function <span className='bold'>partition(array: List of sortable items, low: Int, high: Int)</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pivot = array[high]<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = low - 1<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>for j = low to high - 1</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if array[i] {'<'} pivot <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(array, i, j<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bold'>swap(arr, i + 1, high</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return i + 1<br /> <br></br>

                            function <span className='bold'>swap(array: List of sortable items, low: Int, high: Int)</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = array[i] <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[i] = array[j] <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[j] = temp <br />
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};
