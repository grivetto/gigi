import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Cosimo Perrino",
        text: "Eccellente, preciso puntuale e attento ai particolari e ai prodotti utilizzati consigliatissimo",
        rating: 5,
        date: "1 giorno fa"
    },
    {
        id: 2,
        name: "francesco girasole",
        text: "Persona molto affidabile, siamo atati sodiafatti in tutto e per tutto, molto professionale",
        rating: 5,
        date: "1 giorno fa"
    },
    {
        id: 3,
        name: "Gianfranco Vivirito",
        text: "Professionalità e competenza ai massimi livelli. Un vero maestro della decorazione.",
        rating: 5,
        date: "1 giorno fa"
    }
];

const Reviews = () => {
    return (
        <section id="recensioni" className="py-24 bg-antracite relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-oro/5 blur-[120px] -z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
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
                        className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tighter"
                    >
                        Recensioni Google
                    </motion.h2>
                    <div className="flex justify-center items-center mt-6 space-x-2">
                        <div className="flex text-oro">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                        </div>
                        <span className="text-white font-medium">4.9/5</span>
                        <span className="text-white/40 text-sm">(Basato su 48 recensioni)</span>
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
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 group hover:border-oro/40 transition-all duration-500 rounded-sm"
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

                            <p className="text-white/70 font-sans text-sm leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center space-x-3 border-t border-white/5 pt-6">
                                <div className="w-10 h-10 rounded-full bg-oro/10 flex items-center justify-center text-oro font-serif text-lg">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-sm font-semibold">{review.name}</h4>
                                    <p className="text-white/30 text-[10px] uppercase tracking-widest">{review.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="https://g.page/r/CRslYMML2HHaEAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-4 text-white hover:text-oro transition-all duration-300 group"
                    >
                        <div className="text-oro transition-transform duration-300 group-hover:scale-110">
                            <Star size={20} />
                        </div>
                        <span className="text-xs uppercase tracking-[0.4em] font-medium pt-0.5">
                            Lascia una recensione
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
