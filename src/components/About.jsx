import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="chisono" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-[4/5] bg-antracite overflow-hidden rounded-sm shadow-2xl">
                            <img
                                src="/images/img1.jpeg"
                                alt="L'Artigiano al lavoro"
                                className="w-full h-full object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -right-8 bg-oro p-10 shadow-gold hidden md:block"
                        >
                            <span className="text-white text-6xl font-serif block">25+</span>
                            <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] mt-2 whitespace-nowrap">Anni di Eccellenza</p>
                        </motion.div>
                    </motion.div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-oro tracking-[0.4em] uppercase text-xs mb-6 block font-medium">La Nostra Filosofia</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-antracite mb-8 leading-[1.1] uppercase tracking-tighter">
                                Oltre la Decorazione, <br /><span className="text-oro italic">Creiamo Identità.</span>
                            </h2>

                            <div className="space-y-6 text-tortora leading-relaxed font-sans text-sm md:text-base">
                                <p>
                                    La <strong className="text-antracite font-medium">Vivirito Maestria Decò</strong> non si limita a dipingere pareti. Noi ricerchiamo l'anima degli spazi, utilizzando la materia per dare forma alle vostre emozioni.
                                </p>
                                <p>
                                    Ogni nostra lavorazione è frutto di una <span className="text-antracite underline decoration-oro/30 underline-offset-4">ricerca ossessiva della perfezione</span>. Utilizziamo pigmenti naturali e calce purissima, rispettando i cicli della terra e la salute di chi abita ogni ambiente.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                {[
                                    { icon: <Leaf size={20} />, title: "Materiali Ecologici", desc: "Utilizziamo solo calce, polveri di marmo e resine a base d'acqua." },
                                    { icon: <Award size={20} />, title: "Qualità Certificata", desc: "Ogni lavorazione segue protocolli di eccellenza artigiana." },
                                    { icon: <CheckCircle2 size={20} />, title: "Garanzia nel Tempo", desc: "Superfici progettate per durare e invecchiare con nobiltà." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-start space-x-4 group"
                                    >
                                        <div className="text-oro mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
                                        <div>
                                            <h4 className="text-antracite font-serif text-lg leading-none mb-1">{item.title}</h4>
                                            <p className="text-tortora text-xs">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
