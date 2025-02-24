import { ChevronRight } from "lucide-react";

function Blog() {
  const blogPosts = [
    {
      title: "Most Overrated Tourist Attractions in Europe",
      category: "Travel",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Best Road Trip Ideas for Western United States",
      category: "Trip",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Tips for Saving Money When Booking Popular Destinations",
      category: "Tourist",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=500",
    },
  ];
  return (
    <section className=" py-16">
      <div className="text-center mb-12">
        <span className="text-orange-500 uppercase font-semibold">
          Blog Posts
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          Our latest blurbs
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.title} className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h3>
            <button className="w-fit py-2 px-6 bg-[#F3742C1A] hover:bg-primary flex flex-row text-primary hover:text-orange-500 rounded-lg mt-4 cursor-pointer text-orange-500">
              Read more <ChevronRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
