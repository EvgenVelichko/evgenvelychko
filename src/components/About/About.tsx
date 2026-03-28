/** @format */

import React from 'react';
import {
    User,
    MapPin,
    Calendar,
    Flag,
    BookOpen,
    Languages,
    Briefcase,
    Award,
    Sparkles,
    Code2,
    Zap,
    ArrowRight,
    Quote,
} from 'lucide-react';
import { calculateAge } from '../../utils/calculateAge';

export const About: React.FC = () => {
    const age = calculateAge('2011-09-05');

    const personalInfo = [
        { label: 'Name', value: 'Evgen Velychko', icon: <User size={16} /> },
        { label: 'Age', value: `${age}`, icon: <Calendar size={16} /> },
        {
            label: 'Location',
            value: 'Vinnitsa, Ukraine',
            icon: <MapPin size={16} />,
        },
        { label: 'Nationality', value: 'Ukrainian', icon: <Flag size={16} /> },
        {
            label: 'Languages',
            value: 'English, Ukrainian',
            icon: <Languages size={16} />,
        },
        { label: 'Projects', value: '15+', icon: <BookOpen size={16} /> },
    ];

    const stats = [
        {
            value: '7+',
            label: 'Years Experience',
            icon: <Briefcase size={20} />,
            color: '#6366f1',
        },
        {
            value: '15+',
            label: 'Projects Done',
            icon: <Award size={20} />,
            color: '#a855f7',
        },
        {
            value: '10+',
            label: 'Technologies',
            icon: <Code2 size={20} />,
            color: '#818cf8',
        },
        {
            value: '100%',
            label: 'Dedication',
            icon: <Zap size={20} />,
            color: '#7c3aed',
        },
    ];

    const highlights = [
        'React, TypeScript, Vue.js, Node.js expertise',
        'Cloud platforms & CI/CD experience',
        'Clean code & scalable architecture',
        'User-centered design approach',
    ];

    return (
        <section
            id="about"
            className="py-28 relative overflow-hidden"
            style={{
                background:
                    'linear-gradient(180deg, #020617 0%, #0a0f1f 50%, #020617 100%)',
            }}>
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
                    style={{ background: 'rgba(99,102,241,0.05)' }}></div>
                <div
                    className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px]"
                    style={{ background: 'rgba(168,85,247,0.04)' }}></div>
                <div
                    className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full blur-[120px]"
                    style={{ background: 'rgba(124,58,237,0.03)' }}></div>
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        About Me
                    </h2>
                    <div
                        className="mt-4 mx-auto w-12 h-1 rounded-full"
                        style={{
                            background:
                                'linear-gradient(90deg, #6366f1, #a855f7)',
                        }}></div>
                </div>

                <div className="max-w-6xl mx-auto space-y-5">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="group relative p-6 rounded-2xl text-center overflow-hidden transition-all duration-500 hover:-translate-y-1 cursor-default"
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = `${stat.color}40`;
                                    e.currentTarget.style.background = `${stat.color}08`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor =
                                        'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.background =
                                        'rgba(255,255,255,0.02)';
                                }}>
                                <div
                                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)`,
                                    }}></div>
                                <div
                                    className="flex justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: stat.color }}>
                                    {stat.icon}
                                </div>
                                <p className="text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </p>
                                <p
                                    className="text-[10px] uppercase tracking-wider"
                                    style={{ color: '#64748b' }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Main content grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* Personal Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {personalInfo.map((item, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3.5 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor =
                                            'rgba(99,102,241,0.3)';
                                        e.currentTarget.style.background =
                                            'rgba(99,102,241,0.05)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor =
                                            'rgba(255,255,255,0.06)';
                                        e.currentTarget.style.background =
                                            'rgba(255,255,255,0.02)';
                                    }}>
                                    <div
                                        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: 'rgba(99,102,241,0.12)',
                                            color: '#818cf8',
                                        }}>
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p
                                            className="text-[10px] uppercase tracking-wider leading-none mb-1.5"
                                            style={{ color: '#64748b' }}>
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-medium text-white/80 truncate">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Background Text */}
                        <div
                            className="p-7 rounded-3xl relative overflow-hidden"
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.06)',
                            }}>
                            <Quote
                                size={48}
                                className="absolute top-4 right-4 opacity-[0.04]"
                                style={{ color: '#818cf8' }}
                            />

                            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
                                <div
                                    className="w-8 h-px"
                                    style={{
                                        background:
                                            'linear-gradient(90deg, #6366f1, transparent)',
                                    }}></div>
                                My Background
                            </h3>
                            <div
                                className="space-y-4 text-[15px] leading-[1.8]"
                                style={{ color: '#94a3b8' }}>
                                <p>
                                    I am a Full-Stack Developer with over 7
                                    years of experience building web
                                    applications. I specialize in creating
                                    innovative and effective web solutions using
                                    modern technologies.
                                </p>
                                <p>
                                    I'm passionate about clean code, great user
                                    experiences, and building scalable apps that
                                    solve real problems.
                                </p>
                            </div>

                            <div className="mt-6 space-y-2.5">
                                {highlights.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{
                                                background:
                                                    'linear-gradient(135deg, #6366f1, #a855f7)',
                                            }}></div>
                                        <span
                                            className="text-sm"
                                            style={{ color: '#94a3b8' }}>
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center pt-4">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                border: '1px solid rgba(255,255,255,0.12)',
                                color: '#fff',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor =
                                    'rgba(99,102,241,0.4)';
                                e.currentTarget.style.background =
                                    'rgba(99,102,241,0.08)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor =
                                    'rgba(255,255,255,0.12)';
                                e.currentTarget.style.background =
                                    'transparent';
                            }}>
                            Let's Talk
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
