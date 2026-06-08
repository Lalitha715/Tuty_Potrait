import {Camera,Heart,Image,Gift} from "lucide-react";

function Services() {
    const services=[
        {
            icon:<Camera size={40}/>,
            title:"Wedding Photography",
            desc:"Capture every beautiful moment of you wedding."
        },
        {
            icon:<Heart size={40}/>,
            title:"Couple Shoots",
            desc:"Romantic and cinematic couple photography."
        },
        {
            icon: <Image size={40}/>,
            title:"Photo Frames",
            desc:"Premium customized photo frame gifts."
        },
        {
            icon: <Gift size={40}/>,
            title:"Laser Cutting",
            desc:"Unique laser-cut personalized products."                              
        }
    ];
    return(
        <section
      id="services"
      className="py-32 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-[#d4a64a] tracking-[5px] uppercase">
            Our Services
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Crafted For Memories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 hover:scale-105 duration-300"
            >
              <div className="text-[#d4a64a] mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    )
}
export default Services;