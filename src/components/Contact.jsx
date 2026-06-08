import { Phone, MapPin, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-[#d4a64a] tracking-[5px] uppercase">
              Contact Us
            </p>

            <h2 className="text-5xl font-black mt-4 leading-tight">
              Ready To Create
              <br />
              Your Memory?
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Contact Tuty Portrait for photography, photo gifts,
              custom frames and laser works.
            </p>

            <div className="space-y-5 mt-10">
              <p className="flex items-center gap-4">
                <Phone className="text-[#d4a64a]" />
                +91 77082 60129
              </p>

              <p className="flex items-center gap-4">
                <MapPin className="text-[#d4a64a]" />
                Tuticorin, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="bg-black rounded-[30px] p-8">
            <h3 className="text-3xl font-bold mb-6">
              Book Now
            </h3>

            <a
              href="https://wa.me/917708260129"
              target="_blank"
              className="w-full inline-flex justify-center items-center gap-3 bg-[#d4a64a] text-black font-black py-4 rounded-full"
            >
              <MessageCircle />
              Chat On WhatsApp
            </a>

            <p className="text-gray-400 mt-6">
              Click WhatsApp button and send your photo gift / photography enquiry.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;