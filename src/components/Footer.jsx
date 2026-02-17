import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-antracite py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
                    <div className="flex flex-col">
                        <span className="text-xl font-serif tracking-widest text-white uppercase">Vivirito</span>
                        <span className="text-[9px] tracking-[0.3em] text-oro uppercase -mt-1">Maestria Decò</span>
                    </div>

                    <div className="flex space-x-8">
                        {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-white/40 hover:text-oro transition-colors text-xs uppercase tracking-widest"
                            >
                                {social}
                            </a>
                        ))}
                    </div>

                    <div className="text-white/30 text-[10px] uppercase tracking-widest">
                        © 2026 Vivirito Maestria Decò. Tutti i diritti riservati.<br />
                        P.IVA 01234567890 | Design by Antigravity
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
