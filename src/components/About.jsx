import React from 'react';

const About = () => {
    return (
        <section id="chisono" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-[3/4] bg-antracite overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1590402444521-8276f5de0545?auto=format&fit=crop&q=80&w=1000"
                                alt="L'Artigiano al lavoro"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-oro p-12 hidden md:block">
                            <span className="text-white text-5xl font-serif">25+</span>
                            <p className="text-white/80 text-xs uppercase tracking-widest mt-2">Anni di Esperienza</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block">La Nostra Storia</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-antracite mb-8 leading-tight">
                            Passione per la Materia, Rispetto per l'Ambiente.
                        </h2>
                        <div className="space-y-6 text-tortora leading-relaxed font-sans">
                            <p>
                                La **Vivirito Maestria Decò** nasce dal desiderio di riportare l'artigianato ai suoi massimi livelli di eccellenza. Ogni intervento è una fusione tra tecniche ancestrali e innovazione tecnologica.
                            </p>
                            <p>
                                Crediamo fortemente nella sostenibilità. Per questo selezioniamo accuratamente materiali ecosostenibili, calce naturale e polveri di marmo, garantendo non solo bellezza estetica ma anche salubrità degli ambienti.
                            </p>
                            <p>
                                Ogni superficie che tocchiamo diventa un'opera unica, eseguita interamente a mano con la pazienza e la precisione che solo il vero artigiano può offrire.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-antracite font-serif text-lg mb-2">Su Misura</h4>
                                <p className="text-tortora text-sm">Progettazione personalizzata per ogni esigenza.</p>
                            </div>
                            <div>
                                <h4 className="text-antracite font-serif text-lg mb-2">Eco-Friendly</h4>
                                <p className="text-tortora text-sm">Prodotti naturali e a basso impatto ambientale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
