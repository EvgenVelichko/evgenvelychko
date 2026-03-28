/** @format */

import React from 'react';
import {
    Globe,
    Code,
    Server,
    Database,
    ArrowUpRight,
    Sparkles,
    Layers,
    Palette,
    Smartphone,
} from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    number: string;
    gradient: string;
    accentColor: string;
    tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon,
    number,
    gradient,
    accentColor,
    tags,
}) => {
    return (
        <div
            className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden"
            style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${accentColor}40`;
                e.currentTarget.style.background = `${accentColor}06`;
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            }}>
            {/* Animated top border */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{ background: gradient }}></div>

            {/* Background number */}
            <span
                className="absolute top-6 right-8 font-black select-none transition-all duration-500 group-hover:opacity-[0.06]"
                style={{
                    color: 'rgba(255,255,255,0.02)',
                    fontSize: '6rem',
                    lineHeight: 1,
                }}>
                {number}
            </span>

            {/* Hover glow */}
            <div
                className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: gradient }}></div>

            {/* Corner grid pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700">
                <svg viewBox="0 0 100 100" fill="none">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <React.Fragment key={i}>
                            <line
                                x1={i * 25}
                                y1="0"
                                x2={i * 25}
                                y2="100"
                                stroke="white"
                                strokeWidth="0.3"
                            />
                            <line
                                x1="0"
                                y1={i * 25}
                                x2="100"
                                y2={i * 25}
                                stroke="white"
                                strokeWidth="0.3"
                            />
                        </React.Fragment>
                    ))}
                </svg>
            </div>

            <div className="relative z-10 p-7">
                {/* Icon + Number row */}
                <div className="flex items-start justify-between mb-6">
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg"
                        style={{
                            background: gradient,
                            boxShadow: `0 0 0 0 ${accentColor}00`,
                        }}>
                        <div className="text-white">{icon}</div>
                    </div>
                    <span
                        className="text-xs font-mono font-medium mt-1 transition-colors duration-300"
                        style={{ color: '#334155' }}>
                        /{number}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-white/90 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    {title}
                    <ArrowUpRight
                        size={16}
                        className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        style={{ color: accentColor }}
                    />
                </h3>

                {/* Description */}
                <p
                    className="text-sm leading-relaxed mb-8"
                    style={{ color: '#94a3b8' }}>
                    {description}
                </p>

                {/* Tags */}
                <div
                    className="flex flex-wrap gap-2"
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.04)',
                        paddingTop: '1.25rem',
                    }}>
                    {tags.map((t, i) => (
                        <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105"
                            style={{
                                color: `${accentColor}cc`,
                                background: `${accentColor}12`,
                                border: `1px solid ${accentColor}15`,
                            }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Services: React.FC = () => {
    const services = [
        {
            title: 'Web Development',
            description:
                'Custom website development of any complexity with clean code, modern design principles, and optimized performance. From landing pages to complex web applications.',
            icon: <Globe size={24} />,
            gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
            accentColor: '#6366f1',
            tags: ['Custom Sites', 'SPAs', 'PWAs'],
        },
        {
            title: 'Frontend Development',
            description:
                'Creating responsive, intuitive user interfaces using React, Vue, Angular and cutting-edge CSS frameworks.',
            icon: <Code size={24} />,
            gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            accentColor: '#a855f7',
            tags: ['React', 'Vue', 'TypeScript'],
        },
        {
            title: 'UI/UX Design',
            description:
                'Crafting beautiful, user-centered interfaces with attention to detail, accessibility, and modern design trends.',
            icon: <Palette size={24} />,
            gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
            accentColor: '#ec4899',
            tags: ['Figma', 'Prototyping', 'Design Systems'],
        },
        {
            title: 'Backend Development',
            description:
                'Building robust server-side applications, RESTful APIs, and microservices with Node.js and Python.',
            icon: <Server size={24} />,
            gradient: 'linear-gradient(135deg, #6366f1, #7c3aed)',
            accentColor: '#7c3aed',
            tags: ['Node.js', 'Python', 'REST API'],
        },
        {
            title: 'Database Design',
            description:
                'Designing efficient database architectures for optimal performance, scalability, and data integrity.',
            icon: <Database size={24} />,
            gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
            accentColor: '#0ea5e9',
            tags: ['SQL', 'NoSQL', 'ORM'],
        },
        {
            title: 'Mobile-First',
            description:
                'Responsive, mobile-optimized experiences that work flawlessly across all devices and screen sizes.',
            icon: <Smartphone size={24} />,
            gradient: 'linear-gradient(135deg, #10b981, #34d399)',
            accentColor: '#10b981',
            tags: ['Responsive', 'PWA', 'Cross-Platform'],
        },
    ];

    return (
        <section
            id="services"
            className="py-28 relative overflow-hidden select-none"
            onContextMenu={e => e.preventDefault()}
            style={{
                background:
                    'linear-gradient(180deg, #020617 0%, #070b16 50%, #020617 100%)',
            }}>
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[160px] -translate-y-1/2"
                    style={{ background: 'rgba(99,102,241,0.05)' }}></div>
                <div
                    className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[140px]"
                    style={{ background: 'rgba(168,85,247,0.04)' }}></div>
                <div
                    className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full blur-[130px]"
                    style={{ background: 'rgba(124,58,237,0.03)' }}></div>
                {/* Subtle dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        My Services
                    </h2>
                    <div
                        className="mt-4 mx-auto w-12 h-1 rounded-full"
                        style={{
                            background:
                                'linear-gradient(90deg, #6366f1, #a855f7)',
                        }}></div>
                    <p
                        className="mt-6 max-w-lg mx-auto text-[15px]"
                        style={{ color: '#94a3b8' }}>
                        I offer a range of services to help build effective,
                        scalable web solutions.
                    </p>
                </div>

                {/* Services Grid — equal 2x3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            number={String(index + 1).padStart(2, '0')}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            gradient={service.gradient}
                            accentColor={service.accentColor}
                            tags={service.tags}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                        <Layers size={16} style={{ color: '#818cf8' }} />
                        <p className="text-sm" style={{ color: '#94a3b8' }}>
                            Have a project in mind?{' '}
                            <a
                                href="#contact"
                                className="font-semibold transition-colors duration-300 hover:text-white"
                                style={{ color: '#818cf8' }}>
                                Let's collaborate
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
