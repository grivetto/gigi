import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-24 bg-antracite overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block"
                    >
                        Mastery in Action
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight uppercase tracking-tighter"
                    >
                        L'Arte della <span className="text-oro italic">Trasformazione.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl text-sm md:text-base leading-relaxed"
                    >
                        Osserva come la materia prende forma. Un video esclusivo che mostra il processo artigianale dietro le nostre finiture di lusso.
                    </motion.p>
                </div>

                <motion.div
                    style={{ scale, opacity }}
                    className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl group"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/images/work-video.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-antracite/20 group-hover:bg-transparent transition-colors duration-700"></div>
                    <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>

                    {/* Floating decoration */}
                    <div className="absolute top-4 left-4 p-4 border-l border-t border-oro/30 w-16 h-16 pointer-events-none"></div>
                    <div className="absolute bottom-4 right-4 p-4 border-r border-b border-oro/30 w-16 h-16 pointer-events-none"></div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-oro/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
};

export default VideoSection;
