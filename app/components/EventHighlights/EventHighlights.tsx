import React from 'react';
import { motion } from 'framer-motion';

const EventHighlights = () => {
    return (
        <div>
            <div className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8">
                <motion.div
                    className="mx-auto mb-10 items-center justify-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
                        Key Highlights of E-VOLVE
                    </h2>
                    <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
                        Discover, Create, and Innovate with Generative AI at E-VOLVE.
                    </h4>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
                    {highlightData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-center items-center w-12 h-12 bg-black mx-auto">
                                <item.icon className="flex-shrink-0 w-8 h-8" />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-xl font-sans font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-1 mx-auto font-sans font-base text-neutral-400 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const highlightData = [
    {
        title: "Expert Guidance",
        description: "Learn from industry professionals and AI experts who will guide you through the latest trends and innovations in AI.",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00F0FF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
        ),
    },
    {
        title: "Hands-on Experience",
        description: "Engage in practical sessions to build and implement AI-powered solutions using Generative AI techniques.",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00F0FF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
                <path d="M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
                <path d="M12 16h.01" />
            </svg>
        ),
    },
    {
        title: "Innovative Projects",
        description: "Work on cutting-edge projects that push the boundaries of AI technology, from concept to creation.",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00F0FF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <path d="M9.7 17l4.6 0" />
            </svg>
        ),
    },
    {
        title: "Networking Opportunities",
        description: "Connect with like-minded peers, industry leaders, and potential collaborators in the AI and tech community.",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00F0FF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5h2" />
                <path d="M5 4v2" />
                <path d="M11.5 4l-.5 2" />
                <path d="M18 5h2" />
                <path d="M19 4v2" />
                <path d="M15 9l-1 1" />
                <path d="M18 13l2 -.5" />
                <path d="M18 19h2" />
                <path d="M19 18v2" />
                <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
            </svg>
        ),
    },
];

export default EventHighlights;