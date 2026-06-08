function Gifts() {
  const gifts = [
    {
      title: "Photo Frames",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "LED Frames",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Photo Mugs",
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Photo Cushions",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Photo Keychains",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Photo Clocks",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Crystal Gifts",
      image:
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Photo Albums",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section
      id="gifts"
      className="py-20 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
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
        </div>

        {/* Scroll Cards */}
        <div className="overflow-x-auto overflow-y-hidden pb-4">
          <div className="flex gap-6 w-max">

            {gifts.map((gift, index) => (
              <div
                key={index}
                className="w-[180px] flex-shrink-0"
              >
                <div
                  className="
                    w-[180px]
                    h-[180px]
                    bg-[#111111]
                    rounded-2xl
                    overflow-hidden
                    border border-[#d4a64a]/20
                    hover:border-[#d4a64a]
                    hover:shadow-[0_0_25px_rgba(212,166,74,0.35)]
                    duration-300
                    group
                  "
                >
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  />
                </div>

                <h3 className="text-center text-sm font-bold uppercase mt-4 text-white">
                  {gift.title}
                </h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Gifts;