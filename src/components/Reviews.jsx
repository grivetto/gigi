import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Marco Valeri",
        text: "Professionista eccezionale. Ha trasformato il nostro soggiorno con uno stucco veneziano da sogno. Precisione millimetrica e pulizia incredibile.",
        rating: 5,
        date: "2 mesi fa"
    },
    {
        id: 2,
        name: "Elena Rossi",
        text: "Il microcemento applicato in cucina è perfetto. Cercavamo un effetto moderno e Vivirito ha superato le nostre aspettative. Consigliatissimo!",
        rating: 5,
        date: "1 mese fa"
    },
    {
        id: 3,
        name: "Giuseppe Conti",
        text: "Sempre puntuale e attento ai materiali ecologici. Si vede che ama il suo lavoro. Un vero artista della decorazione.",
        rating: 5,
        date: "3 settimane fa"
    },
    {
        id: 4,
        name: "Alessandra Moretti",
        text: "Abbiamo restaurato delle superfici antiche e il risultato è stato sbalorditivo. Un maestro del fatto a mano.",
        rating: 5,
        date: "4 mesi fa"
    }
];

const Reviews = () => {
    return (
        <section id="recensioni" className="py-24 mesh-gradient">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block"
                    >
                        Dicono di Noi
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-antracite uppercase tracking-tighter"
                    >
                        Recensioni Google
                    </motion.h2>
                    <div className="flex justify-center items-center mt-6 space-x-2">
                        <div className="flex text-oro">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                        </div>
                        <span className="text-antracite font-medium">4.9/5</span>
                        <span className="text-tortora text-sm">(Basato su 48 recensioni)</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card p-8 group hover:border-oro/40"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex text-oro">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <div className="text-oro/20 group-hover:text-oro/40 transition-colors">
                                    <Quote size={24} />
                                </div>
                            </div>

                            <p className="text-tortora font-sans text-sm leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center space-x-3 border-t border-tortora/10 pt-6">
                                <div className="w-10 h-10 rounded-full bg-oro/10 flex items-center justify-center text-oro font-serif text-lg">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-antracite font-serif text-sm font-semibold">{review.name}</h4>
                                    <p className="text-tortora text-[10px] uppercase tracking-widest">{review.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://g.page/r/YOUR_COMPANY_ID/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-antracite hover:text-oro transition-colors text-xs uppercase tracking-[0.3em] gold-glow"
                    >
                        <span>Leggi tutte su Google</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
