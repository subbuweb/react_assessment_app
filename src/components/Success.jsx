import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { useAssessmentContext } from '../context/AssessmentContext';
import { CheckCircle } from 'lucide-react';

const Success = ({ navigateToHome }) => {
    const { resetAssessment, clearProgressData } = useAssessmentContext();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        // Trigger confetti
        var duration = 2 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 40,
                spread: 50,
                origin: { x: 0 },
                colors: ['#3b82f6', '#10b981', '#f59e0b']
            });
            confetti({
                particleCount: 3,
                angle: 140,
                spread: 50,
                origin: { x: 1 },
                colors: ['#3b82f6', '#10b981', '#f59e0b']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Clear Assessment Context progress immediately
        clearProgressData();

        // Countdown timer
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    resetAssessment();
                    navigateToHome();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] py-8 px-4 animate-fade-in text-center relative z-10">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>

            <div className="relative mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(16,185,129,0.7)] animate-bounce-short transform rotate-[4deg] hover:rotate-12 transition-transform duration-500 cursor-default">
                    <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
                </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-4 tracking-tight">
                Assessment Complete!
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
                Excellent work. Your finance knowledge has been successfully recorded and processed.
            </p>
            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 mb-10 w-full max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center text-gray-700 font-semibold mb-6 text-lg">
                        You’ll be redirected in 
                        <span className="ml-3 w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-xl text-xl font-black shadow-lg transform transition-transform group-hover:scale-110">
                            {countdown}
                        </span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner flex">
                        <div 
                            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-linear relative"
                            style={{ width: `${(countdown / 10) * 100}%` }}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[shimmer_1s_linear_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={() => {
                    resetAssessment();
                    navigateToHome();
                }}
                className="group relative px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                <span className="relative z-10 flex items-center">
                    Return Home Now
                    <svg className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </span>
            </button>
        </div>
    );
};

export default Success;
