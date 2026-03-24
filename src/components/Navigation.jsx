import React from 'react';
import { useAssessmentContext } from '../context/AssessmentContext';

const Navigation = () => {
    const { 
        currentQuestion, 
        totalQuestions, 
        nextQuestion, 
        prevQuestion, 
        toggleReview 
    } = useAssessmentContext();

    return (
        <div className="flex justify-between items-center mt-4">
            <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentQuestion === 0 
                    ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md shadow-sm border border-gray-200'
                }`}
            >
                Previous
            </button>
            
            {currentQuestion === totalQuestions - 1 ? (
                <button
                    onClick={toggleReview}
                    className="px-6 py-2 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    Review
                </button>
            ) : (
                <button
                    onClick={nextQuestion}
                    className="px-6 py-2 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transition-all duration-300"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Navigation;
