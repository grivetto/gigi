import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contatti" className="py-24 bg-antracite text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <span className="text-oro tracking-[0.4em] uppercase text-[10px] mb-6 block font-bold">Contatti</span>
                        <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter uppercase leading-[0.9]">Diamo Vita <br />all'Idea.</h2>
                        <p className="text-white/50 mb-12 max-w-md text-sm leading-relaxed">
                            Il primo passo per un'opera d'arte è un dialogo sincero. Scrivici per un preventivo gratuito o per discutere la visione del tuo prossimo spazio.
                        </p>

                        <div className="space-y-10">
                            {[
                                { icon: <MapPin size={24} />, title: "Atelier", text: "Via dell'Artigianato, 12 - Roma" },
                                { icon: <Mail size={24} />, title: "Email", text: "progetti@viviritodeco.it" },
                                { icon: <Phone size={24} />, title: "Telefono", text: "+39 06 1234567" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-6 group">
                                    <div className="text-oro group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg leading-none mb-1">{item.title}</h4>
                                        <p className="text-white/40 text-xs tracking-widest uppercase">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 bg-white/5 p-10 md:p-12 border border-white/5 relative"
                    >
                        <form className="space-y-8 relative z-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Il tuo Nome</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-oro outline-none transition-colors text-white font-sans" placeholder="Es. Mario Rossi" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">La tua Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-oro outline-none transition-colors text-white font-sans" placeholder="vostra@email.com" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Tipo di Lavorazione</label>
                                <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-oro outline-none transition-colors text-white/60 appearance-none font-sans">
                                    <option className="bg-antracite">Tinteggiatura Decorativa</option>
                                    <option className="bg-antracite">Microcemento & Resine</option>
                                    <option className="bg-antracite">Stucchi Veneziani</option>
                                    <option className="bg-antracite">Restauro e Altro</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Il tuo Messaggio</label>
                                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-oro outline-none transition-colors text-white font-sans" placeholder="Parlaci del tuo progetto..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white text-antracite py-5 tracking-[0.3em] font-sans text-[10px] uppercase font-bold transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-oro hover:text-white"
                            >
                                <span>Invia Richiesta</span>
                                <Send size={16} />
                            </motion.button>
                        </form>
                        {/* Background design element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-oro/10 blur-[80px] -z-0"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
