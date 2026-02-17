import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-2xl font-serif tracking-widest text-antracite uppercase">Vivirito</span>
                    <span className="text-[10px] tracking-[0.3em] text-oro uppercase -mt-1">Maestria Decò</span>
                </div>

                <div className="hidden md:flex space-x-12">
                    {['Servizi', 'Portfolio', 'Chi Sono', 'Contatti'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="text-sm uppercase tracking-widest text-antracite hover:text-oro transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button className="md:hidden text-antracite">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
