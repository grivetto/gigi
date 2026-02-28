import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servizi', href: '#servizi' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Recensioni', href: '#recensioni' },
        { name: 'Chi Sono', href: '#chisono' },
        { name: 'Contatti', href: '#contatti' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col group cursor-pointer"
                >
                    <span className={`text-2xl font-serif tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-antracite' : 'text-white'}`}>Gigi</span>
                    <div className="flex items-center space-x-2">
                        <span className="text-[9px] tracking-[0.4em] text-oro uppercase -mt-1 font-medium">il decoratore</span>
                    </div>
                </motion.div>

                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${isScrolled ? 'text-antracite hover:text-oro' : 'text-white/80 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contatti"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-oro text-white px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-oro-opaco transition-all duration-300 shadow-lg shadow-oro/20"
                    >
                        Preventivo
                    </motion.a>
                </div>

                <button
                    className="lg:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} className="text-antracite" /> : <Menu size={24} className={isScrolled ? 'text-antracite' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-tortora/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-antracite text-xs uppercase tracking-widest py-2 border-b border-tortora/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
