/** @format */

import React, { useEffect, useState, useCallback } from 'react';
import { ChevronDown, Github, Linkedin, ArrowRight } from 'lucide-react';
import photo from '../../assets/photo.webp';

const words = ['Front-End Developer', 'React Enthusiast', 'UI/UX Lover', 'Problem Solver'];

const TypeWriter: React.FC = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');

    const tick = useCallback(() => {
        const currentWord = words[wordIndex];

        if (phase === 'typing') {
            if (displayText.length < currentWord.length) {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
            } else {
                setPhase('pause');
            }
        } else if (phase === 'pause') {
            // handled by separate timeout
        } else if (phase === 'deleting') {
            if (displayText.length > 0) {
                setDisplayText(currentWord.slice(0, displayText.length - 1));
            } else {
                setWordIndex((i) => (i + 1) % words.length);
                setPhase('typing');
            }
        }
    }, [displayText, phase, wordIndex]);

    useEffect(() => {
        if (phase === 'pause') {
            const t = setTimeout(() => setPhase('deleting'), 2000);
            return () => clearTimeout(t);
        }
        const speed = phase === 'deleting' ? 35 : 70;
        const t = setTimeout(tick, speed);
        return () => clearTimeout(t);
    }, [tick, phase]);

    return (
        <span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {displayText}
            </span>
            <span className="text-indigo-400 animate-pulse ml-0.5">|</span>
        </span>
    );
};

export const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-16 relative overflow-hidden"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, #020617 60%)' }}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: 'rgba(99,102,241,0.06)' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px]" style={{ background: 'rgba(168,85,247,0.04)' }}></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}></div>
            </div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Text */}
                    <div className="lg:w-3/5 order-2 lg:order-1">
                        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 leading-[1.1] tracking-tight">
                                <span className="text-white">Hi, I'm Evgen</span>
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 leading-tight min-h-[1.3em]">
                                <TypeWriter />
                            </h2>

                            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                                I build pixel-perfect, accessible web experiences with modern
                                technologies. Focused on performance, clean architecture, and
                                delightful interactions.
                            </p>

                            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 justify-center lg:justify-start">
                                <a
                                    href="#portfolio"
                                    className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-950 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 text-sm sm:text-base">
                                    View Projects
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-white border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300 text-sm sm:text-base">
                                    Get in Touch
                                </a>
                            </div>

                            <div className="flex items-center gap-4 justify-center lg:justify-start">
                                <span className="text-xs text-slate-600 uppercase tracking-widest">Find me</span>
                                <div className="h-px w-8 bg-slate-700"></div>
                                <a href="https://github.com/EvgenVelichko" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-full text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300">
                                    <Github size={18} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-full text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Photo — large rectangle */}
                    <div className="lg:w-2/5 order-1 lg:order-2 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-700" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}></div>
                            <div
                                className="relative w-72 sm:w-80 lg:w-[22rem] rounded-3xl overflow-hidden"
                                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                <img src={photo} alt="Evgen Velychko" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(2,6,23,0.85) 100%)' }}></div>
                                {/* Bottom info */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <p className="text-white font-semibold text-lg mb-1">Evgen Velychko</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm" style={{ color: '#818cf8' }}>Full-Stack Developer</span>
                                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold" style={{ background: 'rgba(99,102,241,0.85)', color: '#fff' }}>7+ years</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-white transition-colors duration-300 animate-bounce">
                <ChevronDown size={24} />
            </a>
        </section>
    );
};
