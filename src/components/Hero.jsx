import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-antracite">
                <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=2000"
                    alt="Artisan Decoration"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 hero-gradient"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
                        L'Arte del <span className="text-gold-gradient italic">Dettaglio</span>,<br />
                        Il Lusso della Tradizione.
                    </h1>
                    <p className="text-xl text-white/80 mb-10 font-sans tracking-wide max-w-xl">
                        Trasformiamo i vostri spazi in opere d'arte viventi attraverso la maestria artigiana e la ricerca della perfezione estetica.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="#progetti" className="inline-block bg-oro hover:bg-oro-opaco text-white px-10 py-4 transition-all duration-300 tracking-widest text-sm uppercase">
                            Esplora Progetti
                        </a>
                        <a href="#contatti" className="inline-block border border-white/30 hover:border-oro text-white px-10 py-4 transition-all duration-300 tracking-widest text-sm uppercase">
                            Richiedi Preventivo
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="w-8 h-8 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
