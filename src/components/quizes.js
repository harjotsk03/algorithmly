import { useState } from "react";
import { Link } from 'react-router-dom';

export const Quizes = () => {
    const [activeQuiz, setActiveQuiz] = useState('all');

    const quiz = [
        {id: 1,
            type: 'sort',
            quizName: 'Bubble Sort',
            questions: 5,
            bestScore: 0,
            link: 'bubbleSortQuiz',
            localStorageName: 'bubbleSort'
        },
        {id: 2,
            type: 'sort',
            quizName: 'Selection Sort',
            questions: 5,
            bestScore: 0,
            link: 'selectionSortQuiz',
            localStorageName: 'selectionSort'
        },
        // {id: 3,
        //     type: 'sort',
        //     quizName: 'Insertion Sort',
        //     questions: 5,
        //     bestScore: 0,
        //     link: 'insertionSortQuiz'
        // },
        // {id: 4,
        //     type: 'sort',
        //     quizName: 'Merge Sort',
        //     questions: 5,
        //     bestScore: 0,
        //     link: 'mergeSortQuiz'
        // },
        // {id: 5,
        //     type: 'sort',
        //     quizName: 'Quick Sort',
        //     questions: 5,
        //     bestScore: 0,
        //     link: 'quickSortQuiz'
        // },
        // {id: 6,
        //     type: 'search',
        //     quizName: 'Binary Search',
        //     questions: 5,
        //     bestScore: 0,
        //     link: 'binarySearchQuiz'
        // },
        // {id: 7,
        //     type: 'search',
        //     quizName: 'Linear Search',
        //     questions: 5,
        //     bestScore: 0,
        //     link: 'linearSearchQuiz'
        // },
    ]

    const filteredQuizzes = activeQuiz === 'all' ? quiz : quiz.filter(item => item.type === activeQuiz);

    const isQuizStarted = (quizName) => {
        return localStorage.getItem(`${quizName}_currentQuestion`) > 0;
    };

    return (
        <div className='top-0 bgColor h-auto z-10 pb-6'>
            <div>
                <div  className="fixed bgColor w-full z-30">
                    <h1 className='text-white third text-3xl ml-20 mt-16 tracking-wide mb-6'>Quizzes</h1>
                    <div className='flex flex-col justify-center'>
                    <div className='ml-20 flex flex-row gap-4 mb-6'>
                        <button 
                            className={`btnFilter text-sm tracking-wide ${activeQuiz === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveQuiz('all')}
                        >All</button>
                        <button 
                            className={`btnFilter text-sm tracking-wide ${activeQuiz === 'sort' ? 'active' : ''}`}
                            onClick={() => setActiveQuiz('sort')}
                        >Sort Quizzes</button>
                        <button 
                            className={`btnFilter text-sm tracking-wide ${activeQuiz === 'search' ? 'active' : ''}`}
                            onClick={() => setActiveQuiz('search')}
                        >Search Quizzes</button>
                    </div>
                </div>
            </div>
            <div className="pt-48">
            <h2 className="bold text-white text-2xl ml-20 mb-10">MORE QUIZES COMING SOON</h2>
                <div className="flex flex-wrap gap-6 ml-20">
                    {filteredQuizzes.map(quiz => (
                        <Link key={quiz.id} to={`/${quiz.link}`} className="quizTab">
                            <h1 className="text-white third text-3xl mb-4 tracking-wide">{quiz.quizName}</h1>
                            <h3 className="text-white secondary text-lg mb-2 tracking-wide">Questions: {quiz.questions}</h3>
                            <h3 className="text-white secondary text-sm mb-2 tracking-wide">Best Score: {quiz.bestScore}</h3>
                            {isQuizStarted(quiz.localStorageName) && <p className="text-xs secondary startedQuiz text-white">Resume Quiz</p>}
                        </Link>
                    ))}       
                </div>
            </div>
            </div>
        </div>
    );
};