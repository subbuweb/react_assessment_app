import React, { useState, useEffect } from 'react';
import { useAssessmentContext } from '../context/AssessmentContext';
import { questions } from '../data/questions';
import { AlertCircle, CheckCircle } from 'lucide-react';

const Review = () => {
    const { answers, goToQuestion, submitAssessment } = useAssessmentContext();
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        if (showWarning) {
            const timer = setTimeout(() => setShowWarning(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showWarning]);

    const handleSubmit = () => {
        const isValid = submitAssessment();
        if (!isValid) {
            setShowWarning(true);
        }
    };

    return (
        <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Your Answers</h2>
            <p className="text-gray-600 mb-8">Click on any question to go back and change your answer.</p>

            {showWarning && (
                <div className="fixed inset-0 flex items-end justify-center pb-8 z-50 pointer-events-none">
                    <div className="animate-in slide-in-from-bottom-4 fade-in duration-300">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm shadow-2xl rounded-2xl px-8 py-5 border border-amber-200 flex items-center gap-4 max-w-lg">
                            <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                                <AlertCircle className="h-6 w-6 text-amber-600" strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="font-bold text-amber-900 text-base">
                                    Complete Your Assessment
                                </p>
                                <p className="text-sm font-medium text-amber-700 mt-1">
                                    Please answer at least 5 questions before submitting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
                {questions.map((q, index) => {
                    const answer = answers[index];
                    const isAnswered = answer !== null;
                    
                    return (
                        <div 
                            key={q.id}
                            onClick={() => goToQuestion(index)}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 cursor-pointer hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-blue-400 to-indigo-500"></div>
                            
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-gray-700">Question {index + 1}</span>
                                {isAnswered ? (
                                    <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Answered</span>
                                ) : (
                                    <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">Pending</span>
                                )}
                            </div>
                            
                            <p className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">{q.question}</p>
                            
                            <div className="mt-2 pt-2 border-t border-gray-50">
                                <p className="text-xs text-gray-500 mb-1">Your answer:</p>
                                <p className={`text-sm font-semibold truncate ${isAnswered ? 'text-indigo-600' : 'text-gray-400'}`}>
                                    {isAnswered ? answer : "-"}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center border-t border-gray-200 pt-8 pb-4">
                <button
                    onClick={handleSubmit}
                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto"
                >
                    Submit Assessment
                </button>
            </div>
        </div>
    );
};

export default Review;
