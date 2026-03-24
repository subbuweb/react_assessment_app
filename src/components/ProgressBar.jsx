import React from 'react';
import { useAssessmentContext } from '../context/AssessmentContext';

const ProgressBar = () => {
    const { currentQuestion, totalQuestions } = useAssessmentContext();
    const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

    return (
        <div className="w-full mb-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-600">
                    Question {currentQuestion + 1} / {totalQuestions}
                </span>
                <span className="text-sm font-semibold text-blue-600">
                    {Math.round(progressPercentage)}%
                </span>
            </div>
            <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
