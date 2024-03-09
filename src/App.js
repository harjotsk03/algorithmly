import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Index, Quiz } from './components'; // Assuming you have a Quiz component
import { BubbleSort } from './components/bubbleSort';
import { BubbleSortQuiz } from './components/pages/bubbleSortQuiz';
import { InsertionSortQuiz } from './components/pages/insertionSortQuiz';
import { SelectionSortQuiz } from './components/pages/selectionSortQuiz';
import { MergeSortQuiz } from './components/pages/mergeSortQuiz';
import { QuickSortQuiz } from './components/pages/quickSortQuiz';
import { BinarySearchQuiz } from './components/pages/binarySearchQuiz';
import { LinearSearchQuiz } from './components/pages/linearSearchQuiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bubbleSortQuiz" element={<BubbleSortQuiz />}/>
        <Route path="/selectionSortQuiz" element={<SelectionSortQuiz />}/>
        <Route path="/insertionSortQuiz" element={<InsertionSortQuiz />}/>
        <Route path="/mergeSortQuiz" element={<MergeSortQuiz />}/>
        <Route path="/quickSortQuiz" element={<QuickSortQuiz />}/>
        <Route path="/binarySearchQuiz" element={<BinarySearchQuiz />}/>
        <Route path="/linearSearchQuiz" element={<LinearSearchQuiz />}/>
      </Routes>
    </Router>
  );
}

export default App;
