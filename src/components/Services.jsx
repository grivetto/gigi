import React from 'react';

const services = [
    {
        title: "Tinteggiatura Decorativa",
        description: "Finiture eleganti che giocano con la luce e la materia per creare atmosfere uniche.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.53-9.53m-9.53 9.53l3.05-3.05m-3.05 3.05l-3.05-3.05m12.58 6.1l-12.58-12.58m12.58 12.58l-3.05-3.05m3.05 3.05l3.05-3.05" />
            </svg>
        )
    },
    {
        title: "Microcemento",
        description: "Superfici continue e materiche, ideali per un design minimalista e contemporaneo.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.75h12M6 12h12m-12 5.25h12" />
            </svg>
        )
    },
    {
        title: "Resine",
        description: "Soluzioni innovative e resistenti per pavimenti e rivestimenti ad alto impatto estetico.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25m-9-5.25v9l9 5.25" />
            </svg>
        )
    },
    {
        title: "Stucchi Veneziani",
        description: "La nobiltà della calce e la lucentezza del marmo rivisitate in chiave moderna.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
            </svg>
        )
    }
];

const Services = () => {
    return (
        <section id="servizi" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block">Le Nostre Lavorazioni</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-antracite">Esperienza e Maestria</h2>
                    <div className="w-20 h-px bg-oro mx-auto mt-8"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 border border-tortora/10 hover:border-oro transition-all duration-500 hover:shadow-2xl hover:shadow-oro/5">
                            <div className="text-oro mb-6 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-antracite uppercase tracking-wider">{service.title}</h3>
                            <p className="text-tortora leading-relaxed font-sans text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
