import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-antracite py-20 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-oro/5 blur-[120px] -z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <div className="flex flex-col mb-8">
                            <span className="text-3xl font-serif tracking-[0.2em] text-white uppercase">Vivirito</span>
                            <span className="text-xs tracking-[0.4em] text-oro uppercase -mt-1 font-medium">Maestria Decò</span>
                        </div>
                        <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-8">
                            Dal 1998, trasformiamo gli spazi in espressioni d'arte. Eccellenza artigiana e materiali nobili per un design senza tempo.
                        </p>
                        <div className="flex space-x-6">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -3, color: '#C5A059' }}
                                    href="#"
                                    className="text-white/30 transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Navigazione</h4>
                        <ul className="space-y-4">
                            {['Servizi', 'Portfolio', 'Recensioni', 'Chi Sono'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/30 hover:text-oro transition-colors text-xs uppercase tracking-widest leading-none">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Cookie Policy', 'Termini di Servizio'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/30 hover:text-oro transition-colors text-xs uppercase tracking-widest leading-none">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] text-center md:text-left">
                        © 2026 Vivirito Maestria Decò. All rights reserved. <br className="md:hidden" />
                        P.IVA 01234567890 | Roma, Italia.
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center space-x-3 text-white/40 hover:text-oro transition-colors text-[10px] uppercase tracking-[0.4em]"
                    >
                        <span>Torna su</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-oro transition-colors">
                            <ArrowUp size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
