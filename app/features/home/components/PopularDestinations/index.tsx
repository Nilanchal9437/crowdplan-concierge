import { MapPin, Star } from "lucide-react";
import { HorizontalSlider } from "~/components/Slider";

function PopularDestinations() {
  const popularDestinations = [
    {
      name: "Taj Mahal",
      location: "Agra, India",
      rating: 5,
      reviews: 353,
      price: 58,
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Great Sphinx of Giza",
      location: "Giza, Egypt",
      rating: 5,
      reviews: 363,
      price: 58,
      image:
        "https://images.unsplash.com/photo-1590133324192-1df305deea6b?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Palace Versailles",
      location: "Versailles, France",
      rating: 5,
      reviews: 353,
      price: 58,
      image:
        "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Santorini",
      location: "Greece",
      rating: 5,
      reviews: 348,
      price: 75,
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Machu Picchu",
      location: "Peru",
      rating: 5,
      reviews: 342,
      price: 65,
      image:
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Petra",
      location: "Jordan",
      rating: 5,
      reviews: 335,
      price: 55,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Treasury_petra_crop.jpeg/402px-Treasury_petra_crop.jpeg",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <span className="text-orange-500 uppercase font-semibold">
          Destinations
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          Popular destinations around the world
        </h2>
      </div>
      <div className="relative">
        <div className="flex gap-8 transition-transform duration-500">
          <HorizontalSlider 
            loop
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            slides={popularDestinations.map((dest, index) => ({
              _id: `${index}`,
              element: (
                <div
                  key={dest.name}
                  className="min-w-[calc(33.33%-1.5rem)] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-10"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <MapPin className="text-orange-500 mr-2" size={20} />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {dest.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{dest.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(dest.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">
                          {dest.reviews} ratings
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${dest.price}
                        </span>
                        <span className="text-gray-500 text-sm">/Per day</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      Explore Now
                    </button>
                  </div>
                </div>
              ),
            }))}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
