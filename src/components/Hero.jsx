import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

    return (
        <section ref={containerRef} id="hero" className="relative h-screen flex items-center overflow-hidden bg-antracite">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Interior Decoration"
                    className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 hero-gradient"></div>
                <div className="absolute inset-0 bg-antracite/40"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-oro tracking-[0.6em] uppercase text-xs mb-8 block font-medium">Roma • Milano • Firenze</span>

                        <h1 className="text-6xl md:text-8xl text-white mb-8 leading-[0.9] font-serif">
                            L'Eccellenza <br />
                            <span className="text-gold-gradient italic glow-text">Fatta a Mano.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 mb-12 font-sans tracking-wide max-w-2xl leading-relaxed">
                            Vivirito Maestria Decò trasforma il concetto di superficie in un'esperienza sensoriale unica.
                            Materiali nobili, tecniche antiche, visione contemporanea.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-start sm:items-center">
                            <motion.a
                                href="#portfolio"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative bg-oro text-white px-12 py-5 transition-all duration-300 tracking-[0.2em] text-xs uppercase overflow-hidden"
                            >
                                <span className="relative z-10">I Nostri Progetti</span>
                                <div className="absolute inset-0 bg-oro-opaco translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </motion.a>

                            <a href="#contatti" className="group flex items-center space-x-3 text-white hover:text-oro transition-colors text-xs uppercase tracking-[0.3em]">
                                <span>Richiedi un Sopralluogo</span>
                                <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute right-10 top-0 bottom-0 w-px bg-white/10 hidden lg:block">
                <motion.div
                    style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    className="w-full bg-oro"
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-6 text-white/50 text-[10px] uppercase tracking-[0.4em] origin-left -rotate-90 translate-y-full"
            >
                Scorri per scoprire
            </motion.div>
        </section>
    );
};

export default Hero;
