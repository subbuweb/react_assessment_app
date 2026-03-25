import React from 'react';
import { useAssessmentContext } from '../context/AssessmentContext';
import { questions } from '../data/questions';

const QuestionCard = () => {
    const { currentQuestion, answers, selectAnswer } = useAssessmentContext();
    const question = questions[currentQuestion];
    const selectedOption = answers[currentQuestion];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-5 mb-4 border border-gray-100 transition-all duration-300 transform hover:shadow-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
                {question.question}
            </h2>
            <div className="flex flex-col gap-2.5">
                {question.options.map((option, index) => {
                    const isSelected = selectedOption === option;
                    return (
                        <label 
                            key={index} 
                            className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                                isSelected 
                                ? 'border-blue-500 bg-blue-50 shadow-md' 
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                        >
                           <div> <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${
                                isSelected ? 'border-blue-500' : 'border-gray-300 group-hover:border-blue-300'
                            }`}>
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>}
                            </div>
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option}
                                checked={isSelected}
                                onChange={() => selectAnswer(currentQuestion, option)}
                                className="hidden"
                            /></div>
                            <div><span className={`text-base font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700 group-hover:text-gray-900'}`}>{option}</span></div>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionCard;
