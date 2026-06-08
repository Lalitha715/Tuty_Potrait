import {Camera, Menu} from "lucide-react";

function Navbar() {
    return(
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto pz-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Camera className="text-[#d4a64a]" size={32}/>
                    <div>
                        <h1 className="text-2xl font-bold tracking-[6px]">TUTY</h1>
                        <p className="text-xs tracking-[5px] text-gray-400">POTRAIT</p>
                    </div>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
                    <li><a href="#home" className="hover:text-[#d4a64a]">Home</a></li>
                    <li><a href="#gifts" className="hover:text-[#d4a64a]">Gifts</a></li>
                    <li><a href="#services" className="hover:text-[#d4a64a]">Services</a></li>
                    <li><a href="#about" className="hover:text-[#d4a64a]">About</a></li>
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

                <Menu className="md:hidden"/>
            </div>
        </nav>
    )
}
export default Navbar;