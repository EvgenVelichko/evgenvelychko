/** @format */

import React from 'react';
import { Award, Sparkles } from 'lucide-react';

interface CertificateProps {
    title: string;
    issuer: string;
    date: string;
    image: string;
}

const Certificate: React.FC<CertificateProps> = ({
    title,
    issuer,
    date,
    image,
}) => {
    return (
        <div className="group">
            <div
                className="rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.03)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderColor =
                        'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background =
                        'rgba(255,255,255,0.015)';
                }}>
                <div className="relative">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div
                            className="w-full h-48 flex items-center justify-center"
                            style={{ background: '#0a0f1f' }}>
                            <Award size={48} style={{ color: '#334155' }} />
                        </div>
                    )}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(180deg, transparent 50%, rgba(2,6,23,0.6) 100%)',
                        }}></div>
                    <div
                        className="absolute top-3 right-3 p-2 rounded-full"
                        style={{
                            background:
                                'linear-gradient(135deg, #6366f1, #a855f7)',
                        }}>
                        <Award size={12} className="text-white" />
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-base font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm mb-1" style={{ color: '#64748b' }}>
                        Issued by: {issuer}
                    </p>
                    <p className="text-xs" style={{ color: '#475569' }}>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Certificates: React.FC = () => {
    const certificates = [
        {
            title: 'Websites for schoolchildren',
            issuer: 'Ithillel',
            date: '16.01.2025',
            image: new URL(
                '../../assets/certificates/Certificates.webp',
                import.meta.url,
            ).href,
        },
        {
            title: 'Web-development for schoolchildren',
            issuer: 'Ithillel',
            date: '26.06.2025',
            image: new URL(
                '../../assets/certificates/Certificates2.png',
                import.meta.url,
            ).href,
        },
    ];

    return (
        <section
            id="certificates"
            className="py-28 relative overflow-hidden"
            style={{
                background:
                    'linear-gradient(180deg, #020617 0%, #070b16 50%, #020617 100%)',
            }}>
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[140px]"
                    style={{ background: 'rgba(99,102,241,0.04)' }}></div>
                <div
                    className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full blur-[130px]"
                    style={{ background: 'rgba(168,85,247,0.03)' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Certificates
                    </h2>
                    <div
                        className="mt-4 mx-auto w-12 h-1 rounded-full"
                        style={{
                            background:
                                'linear-gradient(90deg, #6366f1, #a855f7)',
                        }}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {certificates.map((cert, index) => (
                        <Certificate key={index} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};
