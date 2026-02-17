import React from 'react';

const Contact = () => {
    return (
        <section id="contatti" className="py-24 bg-antracite text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block">Iniziamo un Progetto</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 whitespace-nowrap">Richiedi un Preventivo</h2>
                        <p className="text-white/60 mb-12 max-w-md">
                            Siamo pronti ad ascoltare le tue idee e trasformarle in realtà. Scrivici per una consulenza personalizzata o un sopralluogo tecnico.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="text-oro mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg">Indirizzo</h4>
                                    <p className="text-white/50 text-sm">Via dell'Artigianato, 12<br />00100 Roma (RM)</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="text-oro mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg">Email</h4>
                                    <p className="text-white/50 text-sm">info@viviritodeco.it</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/40">Nome</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-oro outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/40">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-oro outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40">Servizio di Interesse</label>
                                <select className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-oro outline-none transition-colors appearance-none text-white/60">
                                    <option className="bg-antracite">Tinteggiatura</option>
                                    <option className="bg-antracite">Microcemento</option>
                                    <option className="bg-antracite">Resine</option>
                                    <option className="bg-antracite">Stucchi</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40">Messaggio</label>
                                <textarea rows="5" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-oro outline-none transition-colors"></textarea>
                            </div>
                            <button className="w-full bg-oro hover:bg-oro-opaco text-white py-4 tracking-[0.2em] font-sans text-xs uppercase transition-all duration-300">
                                Invia Richiesta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
