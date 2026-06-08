function Gifts() {
  const gifts = [
    {
      title: "Photo Frames",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "LED Frames",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Photo Mugs",
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Photo Cushions",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Crystal Gifts",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Photo Albums",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="gifts"
      className="py-28 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#d4a64a] uppercase tracking-[4px]">
            Photo Gifts
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-3">
            Personalized Gifts
          </h2>

          <p className="text-gray-400 mt-4">
            Premium customized gifts for every memory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gifts.map((gift, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] bg-[#111] group"
            >
              <img
                src={gift.image}
                alt={gift.title}
                className="w-full h-[380px] object-cover group-hover:scale-110 duration-500"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {gift.title}
                </h3>

                <button className="mt-4 px-5 py-2 rounded-full bg-[#d4a64a] text-black font-bold">
                  View More
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gifts;