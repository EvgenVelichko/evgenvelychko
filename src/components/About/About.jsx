/** @format */

import React from 'react';
import { User, MapPin, Calendar, Flag, Languages } from 'lucide-react';
import { calculateAge } from '../../utils/calculateAge';

export const About = () => {
    const birthDate = '2011-09-05';
    const age = calculateAge(birthDate);

    const personalInfo = [
        { label: 'Name', value: 'Evgen Velychko', icon: <User size={18} /> },
        { label: 'Age', value: age.toString(), icon: <Calendar size={18} /> },
        {
            label: 'Address',
            value: 'Vinnitsa, Ukraine',
            icon: <MapPin size={18} />,
        },
        { label: 'Nationality', value: 'Ukrainian', icon: <Flag size={18} /> },
        {
            label: 'Languages',
            value: 'English, Ukrainian',
            icon: <Languages size={18} />,
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        ABOUT <span className="text-amber-500">ME</span>
                    </h2>
                    <div className="h-1 w-24 bg-amber-500 mx-auto mt-4"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-6">
                            PERSONAL INFORMATION
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {personalInfo.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="mr-3 text-amber-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="block text-gray-400">
                                            {item.label}:
                                        </span>
                                        <span className="font-medium">
                                            {item.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <div className="inline-block rounded-full bg-amber-500/20 px-6 py-2 text-amber-500 font-semibold">
                                <span className="text-3xl mr-2">5+</span>
                                <span className="uppercase">
                                    Years
                                    <br />
                                    Experience
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-6">
                            MY BACKGROUND
                        </h3>
                        <p className="text-gray-300 mb-4">
                            I am a Front-end Developer with over 5+ years of
                            experience in building web applications. I
                            specialize in developing innovative and effective
                            web solutions using modern technologies and tools.
                        </p>
                        <p className="text-gray-300 mb-4">
                            My expertise covers front-end technologies like
                            React, SCSS, JavaScript, and Python. I have a strong
                            understanding of modern web development practices
                            and deployment processes.
                        </p>
                        <p className="text-gray-300 mb-8">
                            I am passionate about clean code, user experience,
                            and building scalable applications that solve
                            real-world problems. I constantly stay updated with
                            the latest industry trends and best practices to
                            deliver high-quality solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
