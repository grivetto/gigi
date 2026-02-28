import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

const projects = [
    { id: 1, category: 'Residenziale', title: 'Villa Smeralda', image: '/images/img1.jpeg' },
    { id: 2, category: 'Commerciale', title: 'Atelier Mode', image: '/images/img2.jpeg' },
    { id: 3, category: 'Residenziale', title: 'Penthouse Minimal', image: '/images/img3.jpeg' },
    { id: 4, category: 'Esterni', title: 'Restauro Facciata', image: '/images/img4.jpeg' },
    { id: 5, category: 'Commerciale', title: 'Luxury Hotel', image: '/images/img5.jpeg' },
    { id: 6, category: 'Residenziale', title: 'Cucina Loft', image: '/images/img2.jpeg' } // reusing img2 for now as we only have 5 images
];

const categories = ['Tutti', 'Residenziale', 'Commerciale', 'Esterni'];

const Portfolio = () => {
    const [filter, setFilter] = useState('Tutti');

    const filteredProjects = filter === 'Tutti'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div>
                        <span className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block text-center md:text-left">Il Nostro Lavoro</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-antracite uppercase tracking-tighter text-center md:text-left">Progetti d'Autore</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 relative py-2 ${filter === cat ? 'text-oro' : 'text-tortora hover:text-antracite'
                                    }`}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-px bg-oro" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group bento-card aspect-[4/5]"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-antracite/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8">
                                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-oro text-[10px] uppercase tracking-[0.3em] mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white text-3xl font-serif mb-4">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center space-x-3 text-white/50 text-[10px] uppercase tracking-widest border-t border-white/10 pt-4">
                                            <Maximize2 size={14} />
                                            <span>Vedi Dettagli</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
