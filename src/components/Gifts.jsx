import Photo_Frame from "../assets/PhotoFrame.webp";
import LED from "../assets/LEDFrame.webp";
import Mug from "../assets/Mug.webp";
import Cushion from "../assets/PhotoCushion.webp";
import Keychain from "../assets/PhotoKeyChain.webp";
import Clock from "../assets/PhotoClock.webp";
import Crystal from "../assets/Crystral.webp";
import Album from "../assets/Album.webp";
import { motion } from "framer-motion";

function Gifts() {
  const gifts = [
    {
      title: "Photo Frames",
      image: Photo_Frame,
    },
    {
      title: "LED Frames",
      image: LED,
    },
    {
      title: "Photo Mugs",
      image: Mug,
    },
    {
      title: "Photo Cushions",
      image: Cushion,
    },
    {
      title: "Photo Keychains",
      image: Keychain,
    },
    {
      title: "Photo Clocks",
      image: Clock,
    },
    {
      title: "Crystal Gifts",
      image: Crystal,
    },
    {
      title: "Photo Albums",
      image: Album,
    },
  ];

  return (
    <section
      id="gifts"
      className="py-20 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a64a] uppercase tracking-[4px] font-semibold">
            Personalized Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Photo Gifts
          </h2>

          <div className="flex justify-center items-center gap-3 mt-4 text-[#d4a64a]">
            <span className="w-20 h-[2px] bg-[#d4a64a]"></span>
            <span>♥</span>
            <span className="w-20 h-[2px] bg-[#d4a64a]"></span>
          </div>
        </motion.div>

        {/* Scroll Cards */}
        <div className="overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-6 w-max">

            {gifts.map((gift, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="w-[180px] flex-shrink-0 snap-start"
              >
                <div
                  className="
                    w-[180px]
                    h-[180px]
                    bg-[#111111]
                    rounded-2xl
                    overflow-hidden
                    border border-[#d4a64a]
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(212,166,74,0.35)]
                    duration-300
                    group
                  "
                >
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 duration-500"
                  />
                </div>

                <h3 className="text-center text-sm font-bold uppercase mt-4 text-white">
                  {gift.title}
                </h3>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section >
  );
}

export default Gifts;