import { Star } from "lucide-react";
import { HorizontalSlider } from "~/components/Slider";

function Testimonials() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <span className="text-orange-500 uppercase font-semibold">
          Testimonials
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          What our customers say
        </h2>
      </div>
      <HorizontalSlider
        loop
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        slides={[1, 2, 3, 4, 5, 6].map((dest, index) => ({
          _id: `${index}`,
          element: (
            <div className="min-w-[calc(33.33%-1.5rem)] bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-14 mt-5">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                Coming soon...
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Coming soon...
                  </h4>
                  <p className="text-gray-500 text-sm">Coming soon...</p>
                </div>
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
    </section>
  );
}

export default Testimonials;
