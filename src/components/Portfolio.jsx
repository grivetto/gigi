import React, { useState } from 'react';

const projects = [
    { id: 1, category: 'Residenziale', title: 'Villa Smeralda', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'Commerciale', title: 'Atelier Mode', image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'Residenziale', title: 'Penthouse Minimal', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'Esterni', title: 'Restauro Facciata Storica', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'Commerciale', title: 'Luxury Hotel Lobby', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'Residenziale', title: 'Cucina in Microcemento', image: 'https://images.unsplash.com/photo-1556911220-e15224bbaf4b?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['Tutti', 'Residenziale', 'Commerciale', 'Esterni'];

const Portfolio = () => {
    const [filter, setFilter] = useState('Tutti');

    const filteredProjects = filter === 'Tutti'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-24 bg-[#FDFBF7]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-oro tracking-[0.4em] uppercase text-xs mb-4 block">Il Nostro Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-antracite">Progetti d'Eccellenza</h2>
                    <div className="flex justify-center space-x-8 mt-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-xs uppercase tracking-widest transition-all duration-300 pb-2 border-b ${filter === cat ? 'border-oro text-oro' : 'border-transparent text-tortora hover:text-antracite'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative aspect-[4/5] overflow-hidden bg-antracite">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-antracite/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-oro text-xs uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.category}
                                </span>
                                <h3 className="text-white text-2xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
