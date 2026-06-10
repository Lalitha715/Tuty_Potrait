import { X, Menu } from "lucide-react";
import logo from "../assets/tp_logo.webp";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Tuty Portrait Logo" className="w-16 h-16 object-contain" />
                    <div>
                        <h1 className="text-2xl font-bold tracking-[6px]">TUTY PORTRAIT</h1>
                        <p className="text-xL tracking-[1px] text-gray-600 ">The Color Printing House</p>
                    </div>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
                    <li><a href="#home" className="hover:text-[#d4a64a]">Home</a></li>
                    <li><a href="#gifts" className="hover:text-[#d4a64a]">Gifts</a></li>
                    <li><a href="#services" className="hover:text-[#d4a64a]">Services</a></li>
                    <li><a href="#contact" className="hover:text-[#d4a64a]">Contact</a></li>
                </ul>

                <a
                    href="https://wa.me/917708260129"
                    className="hidden md:block px-5 py-2 rounded-full bg-[#d4a64a] text-black font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp
                </a>

                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </div>
            </div>
            {
                isOpen && (
                    <div className="md:hidden bg-black border-t border-white/10">
                        <ul className="flex flex-col items-center gap-6 py-8 text-lg font-semibold">

                            <li>
                                <a
                                    href="#home"
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-[#d4a64a]"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#gifts"
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-[#d4a64a]"
                                >
                                    Gifts
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#services"
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-[#d4a64a]"
                                >
                                    Services
                                </a>
                            </li>

                            

                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-[#d4a64a]"
                                >
                                    Contact
                                </a>
                            </li>

                            <a
                                href="https://wa.me/917708260129"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full bg-[#d4a64a] text-black font-bold"
                            >
                                WhatsApp
                            </a>

                        </ul>
                    </div>
                )
            }
        </nav>
    )
}
export default Navbar;