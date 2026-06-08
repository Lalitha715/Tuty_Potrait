import {
  Award,
  Truck,
  HeartHandshake,
  Palette,
} from "lucide-react";
import {motion} from "framer-motion";

function Features() {
  const features = [
    {
      icon: <Award size={40} />,
      title: "Premium Quality",
      desc: "Top quality photography and gifts.",
    },
    {
      icon: <Palette size={40} />,
      title: "Custom Design",
      desc: "Personalized gifts made for you.",
    },
    {
      icon: <Truck size={40} />,
      title: "Fast Delivery",
      desc: "Safe and on-time delivery.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Customer First",
      desc: "100% customer satisfaction.",
    },
  ];

  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a64a] uppercase tracking-[4px]">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-black mt-3">
            Premium Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 text-center hover:scale-105 duration-300"
            >
              <div className="flex justify-center text-[#d4a64a] mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;