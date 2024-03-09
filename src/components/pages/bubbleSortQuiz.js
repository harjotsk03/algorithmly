import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import certificateImg from '../../images/bubbleSortCert.png'

export const BubbleSortQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [result, setResult] = useState(null);
    const [answered, setAnswered] = useState(false); // State to track if the question is answered
    const [score, setScore] = useState(0);
    const [quizOver, setQuizOver] = useState(false);
    const navigate = useNavigate();

    const quizName = "bubbleSort"; // Set the quiz name here

    const bubbleSortQuestions = [
        {
            id: 1,
            question: 'What is the main principle behind the bubble sort algorithm?',
            answer1: 'Sorting elements based on their frequency.',
            answer2: 'Comparing adjacent elements and swapping them if they are in the wrong order.',
            answer3: 'Dividing the array into smaller subarrays and sorting them individually.',
            answer4: 'Rearranging elements randomly until they are sorted.',
            correctAnswer: 'Comparing adjacent elements and swapping them if they are in the wrong order.',
        },
        {
            id: 2,
            question: 'What is the time complexity of the bubble sort algorithm in the worst-case scenario?',
            answer1: 'O(n)',
            answer2: 'O(log n)',
            answer3: 'O(n^2)',
            answer4: 'O(n log n)',
            correctAnswer: 'O(n^2)'
        },
        {
            id: 3,
            question: 'In a bubble sort, what happens during each pass through the array?',
            answer1: 'The largest element is moved to its correct position.',
            answer2: 'The smallest element is moved to its correct position.',
            answer3: 'Elements are compared in pairs and swapped if they are in the wrong order.',
            answer4: 'Elements are sorted based on their frequency.',
            correctAnswer: 'Elements are compared in pairs and swapped if they are in the wrong order.'
        },
        {
            id: 4,
            question: 'What is the best-case scenario for the bubble sort algorithm?',
            answer1: 'When the array is already sorted.',
            answer2: 'When the array is sorted in descending order.',
            answer3: 'When the array contains only one element.',
            answer4: 'When the array is sorted in random order.',
            correctAnswer: 'When the array is already sorted.'
        },
        {
            id: 5,
            question: 'What is the space complexity of the bubble sort algorithm?',
            answer1: 'O(n)',
            answer2: 'O(log n)',
            answer3: 'O(n^2)',
            answer4: 'O(1)',
            correctAnswer: 'O(1)'
        }
    ];

    useEffect(() => {
        const storedQuestion = localStorage.getItem(`${quizName}_currentQuestion`);
        if (storedQuestion !== null) {
            setCurrentQuestion(parseInt(storedQuestion));
        }

        const storedScore = localStorage.getItem(`${quizName}_score`);
        if (storedScore !== null) {
            setScore(parseInt(storedScore));
        }
    }, []);

    const submitAnswer = () => {
        const correctAnswer = bubbleSortQuestions[currentQuestion].correctAnswer;
        const isCorrect = selectedAnswer === correctAnswer;
        setResult(isCorrect ? "Correct!" : "Incorrect!");
        setScore(isCorrect ? score + 1 : score);
        setAnswered(true); // Mark the question as answered
    }

    const nextQuestion = () => {
        setResult(null);
        setSelectedAnswer(null);
        setAnswered(false); // Reset answered state
        const nextQuestionIndex = currentQuestion + 1;
        localStorage.setItem(`${quizName}_currentQuestion`, nextQuestionIndex);
        localStorage.setItem(`${quizName}_score`, score);
        setCurrentQuestion(nextQuestionIndex);
    }

    useEffect(() => {
        if (currentQuestion >= bubbleSortQuestions.length) {
            setQuizOver(true);
        } else {
            setQuizOver(false);
        }
    }, [currentQuestion, bubbleSortQuestions.length]);
    
    const resetQuiz = () => {
        localStorage.setItem(`${quizName}_currentQuestion`, 0);
        localStorage.setItem(`${quizName}_score`, 0);
        window.location.reload();
    }

    const backHome = () => {
        localStorage.setItem(`${quizName}_currentQuestion`, 0);
        localStorage.setItem(`${quizName}_score`, 0);

        navigate("/");
    }

    const backHomeMid = () => {
        navigate("/");
    }

    return (
        <div className="bgColor h-screen py-16 px-20 flex flex-col items-center">
            <div className='flex flex-col items-start w-3/4'>
                <div className='flex flex-col gap-4 w-full border-white'>
                
                    {currentQuestion < bubbleSortQuestions.length && !quizOver && (
                        <>
                        <div className=" flex flex-row items-center justify-between">
                            <h1 className='text-white third text-5xl tracking-wide mb-12'>Bubble Sort Quiz</h1>
                            <button className="text-white btnRestart mb-12" onClick={backHomeMid}>Back Home</button>
                        </div>
                            <div className="flex flex-row w-full justify-between">
                                <h3 className="bold text-3xl text-white">Question {currentQuestion + 1}</h3>
                                <h3 className="text-white bold text-3xl">Score: {score}/{bubbleSortQuestions.length}</h3>
                            </div>
                            <h1 className="text-white third text-2xl questionContainer">{bubbleSortQuestions[currentQuestion].question}</h1>
                            <div className="flex flex-col">
                                <label className={`text-white radio-container  ${answered ? 'disabled' : ''}`}>
                                    <input
                                        type="radio"
                                        name="bubbleSortAnswer"
                                        value={bubbleSortQuestions[currentQuestion].answer1}
                                        checked={selectedAnswer === bubbleSortQuestions[currentQuestion].answer1}
                                        onChange={() => setSelectedAnswer(bubbleSortQuestions[currentQuestion].answer1)}
                                        disabled={answered} // Disable if already answered
                                    />
                                    <span className="radio-label">{bubbleSortQuestions[currentQuestion].answer1}</span>
                                </label>
                                <label className={`text-white radio-container ${answered ? 'disabled' : ''}`}>
                                    <input
                                        type="radio"
                                        name="bubbleSortAnswer"
                                        value={bubbleSortQuestions[currentQuestion].answer2}
                                        checked={selectedAnswer === bubbleSortQuestions[currentQuestion].answer2}
                                        onChange={() => setSelectedAnswer(bubbleSortQuestions[currentQuestion].answer2)}
                                        disabled={answered} // Disable if already answered
                                    />
                                    <span className="radio-label">{bubbleSortQuestions[currentQuestion].answer2}</span>
                                </label>
                                <label className={`text-white radio-container ${answered ? 'disabled' : ''}`}>
                                    <input
                                        type="radio"
                                        name="bubbleSortAnswer"
                                        value={bubbleSortQuestions[currentQuestion].answer3}
                                        checked={selectedAnswer === bubbleSortQuestions[currentQuestion].answer3}
                                        onChange={() => setSelectedAnswer(bubbleSortQuestions[currentQuestion].answer3)}
                                        disabled={answered} // Disable if already answered
                                    />
                                    <span className="radio-label">{bubbleSortQuestions[currentQuestion].answer3}</span>
                                </label>
                                <label className={`text-white radio-container ${answered ? 'disabled' : ''}`}>
                                    <input
                                        type="radio"
                                        name="bubbleSortAnswer"
                                        value={bubbleSortQuestions[currentQuestion].answer4}
                                        checked={selectedAnswer === bubbleSortQuestions[currentQuestion].answer4}
                                        onChange={() => setSelectedAnswer(bubbleSortQuestions[currentQuestion].answer4)}
                                        disabled={answered} // Disable if already answered
                                    />
                                    <span className="radio-label">{bubbleSortQuestions[currentQuestion].answer4}</span>
                                </label>
                            </div>
                            {selectedAnswer != null && result == null ? (
                                <button className="text-white submitBtn" onClick={submitAnswer}>Submit</button>
                            ) : null}

                            {result != null ? (
                                <>
                                    {currentQuestion === bubbleSortQuestions.length - 1 ? (
                                        <button className="text-white border-2 border-white submitBtn" onClick={nextQuestion}>Finish Quiz</button>
                                    ) : (
                                        <button className="text-white border-2 border-white submitBtn" onClick={nextQuestion}>Next Question</button>
                                    )}
                                    <p className="resultStyle" style={{ fontWeight: 'bold', color: result === 'Correct!' ? '#186041' : '#B22222' }}>{result}</p>
                                </>
                            ) : null}
                        </>
                    )}
                    {quizOver && (
                        <div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row items-center justify-between">
                                    <h1 className='text-white third text-5xl tracking-wide mb-4'>Bubble Sort Quiz Complete</h1>
                                </div>
                                <h4 className="text-white third text-2xl mb-4">Score: {score}/{bubbleSortQuestions.length}</h4>
                                <img className="w-2/3" src={certificateImg}></img>
                                <div className="mt-6 gap-4 flex"> 
                                    <button className="text-white btnRestart" onClick={backHome}>Back Home</button>
                                    <button className="text-white btnRestart" onClick={resetQuiz}>Restart Quiz</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}