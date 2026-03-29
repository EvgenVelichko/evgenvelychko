/** @format */

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink?: string;
    githubLink?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image, tags, liveLink, githubLink }) => {
    return (
        <div className="group relative h-full">
            <div
                className="h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.03)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                }}
            >
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full flex gap-3">
                            {liveLink && (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-white text-gray-950 p-2.5 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                                    <ExternalLink size={14} />
                                </a>
                            )}
                            {githubLink && (
                                <a href={githubLink} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-white/20 transition-all duration-300">
                                    <Github size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-base font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: '#64748b' }}>
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full"
                                style={{ color: 'rgba(129,140,248,0.8)', background: 'rgba(99,102,241,0.08)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const projects: ProjectProps[] = [
    {
        title: 'Money-Finance',
        description: 'Interactive dashboard for financial data visualization and analytics.',
        image: new URL('../../assets/project/project1.webp', import.meta.url).href,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/The-Money/',
        githubLink: 'https://github.com/EvgenVelichko/The-Money',
    },
    {
        title: 'SchoolHub',
        description: 'Educational platform for school management and learning. Built with modern TypeScript stack.',
        image: new URL('../../assets/project/schoolhub.webp', import.meta.url).href,
        tags: ['TypeScript', 'React', 'Vercel'],
        liveLink: 'https://schoolhub-kappa.vercel.app',
        githubLink: 'https://github.com/EvgenVelichko/schoolhub',
    },
    {
        title: 'Sonora',
        description: 'Modern web application with clean design and responsive layout.',
        image: new URL('../../assets/project/sonora.webp', import.meta.url).href,
        tags: ['TypeScript', 'React', 'SCSS'],
        liveLink: 'https://evgenvelichko.github.io/sonora/',
        githubLink: 'https://github.com/EvgenVelichko/sonora',
    },
    {
        title: 'MajestikLaw',
        description: 'Professional law firm website with elegant design and modern interface.',
        image: new URL('../../assets/project/majestic.webp', import.meta.url).href,
        tags: ['TypeScript', 'React', 'Tailwind'],
        liveLink: 'https://evgenvelichko.github.io/majestiklaw-master/',
        githubLink: 'https://github.com/EvgenVelichko/majestiklaw-master',
    },
    {
        title: 'Converter',
        description: 'Universal converter tool for various unit conversions.',
        image: new URL('../../assets/project/wisecurrency.webp', import.meta.url).href,
        tags: ['TypeScript', 'React', 'Vite'],
        liveLink: 'https://evgenvelichko.github.io/converter/',
        githubLink: 'https://github.com/EvgenVelichko/converter',
    },
    {
        title: 'Minimal-Agency',
        description: 'Full-service digital creative agency. Diploma work with elegant design.',
        image: new URL('../../assets/project/project3.webp', import.meta.url).href,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Minimal-Agency/',
        githubLink: 'https://github.com/EvgenVelichko/Minimal-Agency',
    },
    {
        title: 'Gallery',
        description: 'Elegant image gallery with smooth animations.',
      image: new URL('../../assets/project/gallery.png', import.meta.url).href,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Gallery/',
        githubLink: 'https://github.com/EvgenVelichko/Gallery',
    },
    {
        title: 'CoWork',
        description: 'Coworking space designed for innovation and collaboration.',
        image: new URL('../../assets/project/project5.webp', import.meta.url).href,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Cowork/',
        githubLink: 'https://github.com/EvgenVelichko/Cowork',
    },
    {
        title: 'NotePad',
        description: 'Sleek text editor with dark theme and built-in calculator.',
        image: new URL('../../assets/project/project4.webp', import.meta.url).href,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Notepad/',
        githubLink: 'https://github.com/EvgenVelichko/Notepad',
    },
    {
        title: 'PasswordGenerator',
        description: 'Secure password generator with customizable options.',
        image: new URL('../../assets/project/project6.webp', import.meta.url).href,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/PasswordGenerator/',
        githubLink: 'https://github.com/EvgenVelichko/PasswordGenerator',
    },
    {
        title: 'Tic-Tac-Toe',
        description: 'Classic Tic-Tac-Toe with clean logic and interactive gameplay.',
        image: 'https://opengraph.githubassets.com/1/EvgenVelichko/Tic-Tac-Toe',
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Tic-Tac-Toe/',
        githubLink: 'https://github.com/EvgenVelichko/Tic-Tac-Toe',
    },
    {
        title: 'RPG Game',
        description: 'Text-based RPG game built with Python.',
        image: 'https://opengraph.githubassets.com/1/EvgenVelichko/RPG_GAME_PYTHON',
        tags: ['Python', 'Game', 'CLI'],
        githubLink: 'https://github.com/EvgenVelichko/RPG_GAME_PYTHON',
    },
];

export const Portfolio: React.FC = () => {
    const [perPage, setPerPage] = useState(3);
    const [page, setPage] = useState(0);

    // Responsive: 1 on mobile, 2 on tablet, 3 on desktop
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w >= 1024) setPerPage(3);
            else if (w >= 640) setPerPage(2);
            else setPerPage(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // Reset page when perPage changes
    useEffect(() => { setPage(0); }, [perPage]);

    const totalPages = Math.ceil(projects.length / perPage);
    const safeePage = Math.min(page, totalPages - 1);

    const [fading, setFading] = useState(false);

    const changePage = useCallback((newPage: number) => {
        setFading(true);
        setTimeout(() => {
            setPage(newPage);
            setFading(false);
        }, 250);
    }, []);

    const nextPage = useCallback(() => {
        if (safeePage < totalPages - 1) changePage(safeePage + 1);
    }, [safeePage, totalPages, changePage]);

    const prevPage = useCallback(() => {
        if (safeePage > 0) changePage(safeePage - 1);
    }, [safeePage, changePage]);

    // Get current page projects
    const startIdx = safeePage * perPage;
    const currentProjects = projects.slice(startIdx, startIdx + perPage);

    // Touch/swipe support
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextPage();
            else prevPage();
        }
        setTouchStart(null);
    };

    return (
        <section
            id="portfolio"
            className="py-28 relative"
            style={{ background: 'linear-gradient(180deg, #020617 0%, #0a0f1f 50%, #020617 100%)' }}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Portfolio</h2>
                    <div className="mt-4 mx-auto w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)' }}></div>
                    <p className="mt-6 max-w-lg mx-auto" style={{ color: '#94a3b8' }}>
                        Each project demonstrates my skills and approach to problem-solving.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Projects grid — swipeable on mobile */}
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={`grid gap-5 ${
                                perPage === 3 ? 'grid-cols-3' :
                                perPage === 2 ? 'grid-cols-2' :
                                'grid-cols-1'
                            }`}
                            style={{
                                opacity: fading ? 0 : 1,
                                transform: fading ? 'translateY(12px)' : 'translateY(0)',
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            {currentProjects.map((project, i) => (
                                <Project key={`${safeePage}-${i}`} {...project} />
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button
                            onClick={prevPage}
                            disabled={safeePage === 0}
                            className="p-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                border: safeePage === 0 ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(255,255,255,0.12)',
                                color: safeePage === 0 ? '#334155' : '#fff',
                                cursor: safeePage === 0 ? 'not-allowed' : 'pointer',
                            }}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => changePage(i)}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: i === safeePage ? '24px' : '8px',
                                        height: '8px',
                                        background: i === safeePage ? '#6366f1' : 'rgba(255,255,255,0.1)',
                                    }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={safeePage >= totalPages - 1}
                            className="p-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                border: safeePage >= totalPages - 1 ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(255,255,255,0.12)',
                                color: safeePage >= totalPages - 1 ? '#334155' : '#fff',
                                cursor: safeePage >= totalPages - 1 ? 'not-allowed' : 'pointer',
                            }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
