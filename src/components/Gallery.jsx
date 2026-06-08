function Gallery() {
  const photos = [
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  ];

  return (
    <section className="py-28 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <p className="text-[#d4a64a] tracking-[5px] uppercase">
          Gallery
        </p>

        <h2 className="text-5xl md:text-6xl font-black mt-4">
          Moments In Motion
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={`${photo}?auto=format&fit=crop&w=700&q=80`}
            alt="Gallery"
            className="min-w-[320px] md:min-w-[430px] h-[520px] object-cover rounded-[35px]"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;