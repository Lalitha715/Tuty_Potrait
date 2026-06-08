import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";
import logo from "../assets/tp_logo.png";

function Hero() {
    return (
        <section id="home" className="min-h-screen bg-black flex items-center pt-24 md:pt-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[#d4a64a] font-semibold tracking-[4px] mb-4">
                        MEMORIES FOREVER
                    </p>
                    <h1 className="text-4xl md:text-7xl font-black leading-tight">
                        Capture Your<br />
                        Moments In <br />
                        <span className="text-[#d4a64a]">Luxury Style</span>
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg max-w-lg">
                        Premium wedding photography, custom photo gifts and laser cutting works crafted with love and perfection.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href="#gifts" className="px-7 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2">
                            Explore Gifts <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="px-7 py-4 rounded-full border border-white/30 font-bold flex items-center gap-2">
                            Our Services <Camera size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative mt-10 md:mt-0">
                    <div className="absolute inset-0 bg-[#d4a64a]/20 blur-3xl rounded-full"></div>
                    <div className="logo-container rounded-[30px] overflow-hidden flex justify-center items-center">
                    <img
                        src={logo}
                        alt="Wedding Photography"
                        className="logo-animation w-[85%] h-[300px] md:h-[500px] object-contain"
                    />
                    </div>
                    <div className="absolute bottom-2 left-6 right-6 glass rounded-3xl p-2 text-center">
                        <h3 className="text-2xl font-bold">Tuty Potrait</h3>
                        <p className="text-gray-300">Creating memories that last forever</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Hero;