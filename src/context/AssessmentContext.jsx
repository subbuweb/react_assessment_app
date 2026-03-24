import React, { createContext, useContext, useState } from 'react';
import { questions } from '../data/questions';

const AssessmentContext = createContext();

export const useAssessmentContext = () => {
    return useContext(AssessmentContext);
};

export const AssessmentProvider = ({ children }) => {
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const selectAnswer = (questionIndex, selectedOption) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = selectedOption;
        setAnswers(newAnswers);
        
        // Auto-advance
        if (questionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestion(questionIndex + 1);
            }, 300); // Small delay for animation
        }
    };

    const goToQuestion = (index) => {
        setCurrentQuestion(index);
        setIsReviewMode(false);
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const toggleReview = () => {
        setIsReviewMode(true);
    };

    const submitAssessment = () => {
        const answeredCount = answers.filter(a => a !== null).length;
        if (answeredCount >= 5) {
            setIsSubmitted(true);
            return true;
        }
        return false;
    };

    const resetAssessment = () => {
        setAnswers(new Array(questions.length).fill(null));
        setCurrentQuestion(0);
        setIsReviewMode(false);
        setIsSubmitted(false);
    };

    const clearProgressData = () => {
        setAnswers(new Array(questions.length).fill(null));
        setCurrentQuestion(0);
        setIsReviewMode(false);
    };

    const value = {
        answers,
        currentQuestion,
        isReviewMode,
        isSubmitted,
        selectAnswer,
        goToQuestion,
        nextQuestion,
        prevQuestion,
        toggleReview,
        submitAssessment,
        resetAssessment,
        clearProgressData,
        totalQuestions: questions.length
    };

    return (
        <AssessmentContext.Provider value={value}>
            {children}
        </AssessmentContext.Provider>
    );
};
