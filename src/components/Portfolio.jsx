import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const reviewUrl = "https://www.google.com/search?sca_esv=8fc45dfe74b6bcf0&hl=it&authuser=0&sxsrf=ANbL-n5risRVP10vxR3RHRLSPKhR0G3ucA:1772988283033&q=Pierluigi+Decoratore&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUDBcGLyz3LchbFtGt1pLmzqoEecG-DxOXAfcr62UMGJYdYgKz6ElNdv-bDnks-hiTGzLTo%3D&uds=ALYpb_lLt3rF4OntvAcKw6YR8l5VYcuAuKdy2woofLf9v67oWAVz1di4W6YhbiCR-5eX2ZR3GDEb_jHiSGuLDPkamwVNZiZHu_yiUD5_etQGO23t2DJcFVzreGDtJUUfaBcQVpva_xWB&sa=X&ved=2ahUKEwjRg7SG4JCTAxV42gIHHTMXMWsQ3PALegQIGhAE&biw=1920&bih=1065";

const projects = [
    { id: 1, category: 'Residenziale', title: 'Geometrie in Camera da Letto', image: '/images/img1.jpeg', reviewLink: reviewUrl },
    { id: 2, category: 'Residenziale', title: 'Parete Decorativa Soggiorno', image: '/images/img2.jpeg', reviewLink: reviewUrl },
    { id: 3, category: 'Residenziale', title: 'Finitura Materica Chiara', image: '/images/img3.jpeg', reviewLink: reviewUrl },
    { id: 4, category: 'Ritocchi d\'Interni', title: 'Ritocco Parete Moderna', image: '/images/img4.jpeg' },
    { id: 5, category: 'Residenziale', title: 'Angolo Notte Classic', image: '/images/img5.jpeg' },
    { id: 6, category: 'Commerciale', title: 'Restyling Bancone Bar', image: '/images/img6.jpeg' },
    { id: 7, category: 'Ritocchi d\'Interni', title: 'Dettaglio Bancone Geometrico', image: '/images/img7.jpeg' },
    { id: 8, category: 'Residenziale', title: 'Nicchia con Effetto Nuvolato', image: '/images/img8.jpeg' },
    { id: 9, category: 'Commerciale', title: 'Lavorazione Artigianale Bancone', image: '/images/img9.jpeg' },
    { id: 10, category: 'Residenziale', title: 'Finitura Satinata Moderna', image: '/images/img10.jpeg' },
    { id: 11, category: 'Residenziale', title: 'Dettaglio Materico Parete', image: '/images/img11.jpeg' },
    { id: 12, category: 'Ritocchi d\'Interni', title: 'Intervento di Prestigio', image: '/images/img12.jpeg' },
    { id: 13, category: 'Residenziale', title: 'Atmosfere Contemporanee', image: '/images/img13.jpeg' },
    { id: 14, category: 'Residenziale', title: 'Rifiniture d\'Eccellenza', image: '/images/img14.jpeg' },
    { id: 15, category: 'Residenziale', title: 'Eleganza Materica', image: '/images/img15.jpeg' },
    { id: 16, category: 'Residenziale', title: 'Dettaglio di Design', image: '/images/img16.jpeg' },
    { id: 17, category: 'Residenziale', title: 'Armonia Cromatica', image: '/images/img17.jpeg' },
    { id: 18, category: 'Residenziale', title: 'Prospettive Moderne', image: '/images/img18.jpeg' },
    { id: 19, category: 'Residenziale', title: 'Texture Innovative', image: '/images/img19.jpeg' },
    { id: 20, category: 'Residenziale', title: 'Restauro Conservativo', image: '/images/img20.jpeg' },
    { id: 21, category: 'Residenziale', title: 'Luce e Colore', image: '/images/img21.jpeg' },
    { id: 22, category: 'Residenziale', title: 'Minimalismo Raffinato', image: '/images/img22.jpeg' },
    { id: 23, category: 'Residenziale', title: 'Craftsmanship Italiano', image: '/images/img23.jpeg' },
    { id: 24, category: 'Residenziale', title: 'Atmosfera Esclusiva', image: '/images/img24.jpeg' },
    { id: 25, category: 'Residenziale', title: 'Stile Contemporaneo', image: '/images/img25.jpeg' },
    { id: 26, category: 'Residenziale', title: 'Superfici di Pregio', image: '/images/img26.jpeg' },
    { id: 27, category: 'Residenziale', title: 'Equilibrio Formale', image: '/images/img27.jpeg' },
    { id: 28, category: 'Residenziale', title: 'Estetica Funzionale', image: '/images/img28.jpeg' },
    { id: 29, category: 'Ritocchi d\'Interni', title: 'Dettaglio Artigianale', image: '/images/img29.jpeg' },
    { id: 30, category: 'Ritocchi d\'Interni', title: 'L\'Arte del Gesto', image: '/images/video.mp4' },
    { id: 31, category: 'Ritocchi d\'Interni', title: 'Precisione e Dettaglio', image: '/images/work-video.mp4' },
    { id: 32, category: 'Ritocchi d\'Interni', title: 'Rifiniture in Movimento', image: '/images/vid1.mp4' }
];

const categories = ['Tutti', 'Residenziale', 'Commerciale', 'Ritocchi d\'Interni'];

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
                                {project.image.endsWith('.mp4') ? (
                                    <video
                                        src={project.image}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div
                                    className="absolute inset-0 bg-antracite/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8 z-20"
                                >
                                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-oro text-[10px] uppercase tracking-[0.3em] mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white text-3xl font-serif mb-4">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.reviewLink || "https://g.page/r/CRslYMML2HHaEAE/review"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-3 text-white/80 hover:text-white text-[10px] uppercase tracking-widest border-t border-white/10 pt-4 transition-colors hover:no-underline"
                                        >
                                            <Star size={14} className="text-oro fill-oro/50" />
                                            <span>{project.reviewLink ? "Leggi la Recensione" : "Lascia una Recensione"}</span>
                                        </a>
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
