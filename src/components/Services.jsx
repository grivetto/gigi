import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Hexagon, Layers, Wand2 } from 'lucide-react';

const services = [
    {
        title: "Tinteggiatura Decorativa",
        description: "Finiture che catturano la luce. Oltre il semplice colore, creiamo atmosfere.",
        icon: <Paintbrush size={32} strokeWidth={1} />,
        size: "md:col-span-2",
        img: "/images/img3.jpeg"
    },
    {
        title: "Microcemento",
        description: "La purezza del cemento in forme continue e moderne.",
        icon: <Hexagon size={32} strokeWidth={1} />,
        size: "md:col-span-1",
        img: "/images/img4.jpeg"
    },
    {
        title: "Resine Sartoriali",
        description: "Design e resistenza fusi in un'unica superficie.",
        icon: <Layers size={32} strokeWidth={1} />,
        size: "md:col-span-1",
        img: "/images/img5.jpeg"
    },
    {
        title: "Stucchi & Restauro",
        description: "Recuperiamo la bellezza classica con maestria contemporanea.",
        icon: <Wand2 size={32} strokeWidth={1} />,
        size: "md:col-span-2",
        img: "/images/img1.jpeg"
    }
];

const Services = () => {
    return (
        <section id="servizi" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block"
                        >
                            Artigianato d'Elite
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-serif text-antracite leading-tight"
                        >
                            Soluzioni Decorative <br />senza Compromessi.
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-tortora max-w-sm mb-2"
                    >
                        Ogni progetto è un pezzo unico, cucito addosso ai vostri desideri con materiali ecosostenibili e tecniche certificate.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bento-card group h-[400px] ${service.size}`}
                        >
                            <img
                                src={service.img}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0"
                                alt={service.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-antracite via-transparent to-transparent"></div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="text-oro mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-oro transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {service.description}
                                </p>
                                <div className="mt-6 flex items-center space-x-2 text-oro text-[10px] uppercase tracking-[0.3em] font-medium translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                                    <span>Scopri di più</span>
                                    <div className="w-8 h-px bg-oro"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
