import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessmentContext } from '../context/AssessmentContext';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import Navigation from '../components/Navigation';
import Review from '../components/Review';
import Success from '../components/Success';

const Assessment = () => {
    const navigate = useNavigate();
    const { isReviewMode, isSubmitted } = useAssessmentContext();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            <div className="max-w-4xl w-full mx-auto relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-5 md:p-6 backdrop-blur-lg bg-opacity-95">
                    {isSubmitted ? (
                        <Success navigateToHome={navigateToHome} />
                    ) : (
                        <>
                            {!isReviewMode && <ProgressBar />}
                            
                            <div className="min-h-[300px]">
                                {isReviewMode ? (
                                    <Review />
                                ) : (
                                    <>
                                        <QuestionCard />
                                        <Navigation />
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Assessment;
