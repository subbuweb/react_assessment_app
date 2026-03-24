import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400 opacity-20 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500 opacity-20 blur-[120px]"></div>
            </div>
            
            <div className="max-w-3xl w-full z-10 text-center">
                <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 backdrop-blur-xl bg-opacity-90">
                    <div className="mb-6 inline-block">
                        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase shadow-sm">
                            Knowledge Check
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 mb-6 tracking-tight leading-tight">
                        Explore your Finance Knowledge
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Explore your finance knowledge to take one assessment test. Discover your strengths in budgeting, investing, and more.
                    </p>
                    
                    <button
                        onClick={() => navigate('/assessment')}
                        className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative text-xl font-bold flex items-center">
                            Start Assessment
                            <svg className="w-6 h-6 ml-3 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </button>
                    
                    <div className="mt-14 grid grid-cols-3 gap-6 text-gray-500 border-t border-gray-100 pt-10">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-gray-800 mb-1">20</span>
                            <span className="text-sm font-medium uppercase tracking-wider">Questions</span>
                        </div>
                        <div className="flex flex-col items-center border-l border-r border-gray-100">
                            <span className="text-3xl font-black text-gray-800 mb-1">MCQ</span>
                            <span className="text-sm font-medium uppercase tracking-wider">Format</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-gray-800 mb-1">10</span>
                            <span className="text-sm font-medium uppercase tracking-wider">Topics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
