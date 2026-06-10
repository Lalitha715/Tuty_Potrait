import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const addReview = (e) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      toast.error("Please enter name and message");
      return;
    }

    const newReview = {
      name,
      message,
      rating,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setMessage("");
    setRating();
    toast.success("Review added successfully");
  };

  return (
    <section id="reviews" className="py-20 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a64a] uppercase tracking-[4px] font-semibold">
            Customer Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            What Customers Say
          </h2>
        </motion.div>

        <form
          onSubmit={addReview}
          className="glass max-w-2xl mx-auto rounded-3xl p-6 md:p-8 mb-12"
        >
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-5 py-4 rounded-2xl bg-black border border-white/20 text-white outline-none focus:border-[#d4a64a]"
          />

          <div className="mb-5">
            <p className="text-center text-gray-300 mb-3">
              Pick Your Rating
            </p>


            <div className="flex justify-center gap-2 mb-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl duration-300 ${star <= rating ? "text-yellow-400" : "text-gray-600"
                    }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Review Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full mb-5 px-5 py-4 rounded-2xl bg-black border border-white/20 text-white outline-none focus:border-[#d4a64a] resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-[#d4a64a] text-black font-black hover:bg-white duration-300"
          >
            Add Review
          </button>
        </form>

        {reviews.length === 0 ? (
          <p className="text-center text-gray-400">
            No reviews yet. Be the first to share your experience ⭐
          </p>
        ) : (
          <div className="overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory scroll-smooth">
            <div className="flex gap-6 w-max">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="w-[320px] flex-shrink-0 snap-start glass rounded-3xl p-6"
                >
                  <div className="text-yellow-400 text-xl mb-4">
                    {"★".repeat(review.rating)}
                    <span className="text-gray-600">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-7">
                    “{review.message}”
                  </p>

                  <h3 className="text-xl font-bold mt-6">
                    {review.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Reviews;