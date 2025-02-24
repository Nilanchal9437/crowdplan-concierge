import { Play } from "lucide-react";
import { HorizontalSlider } from "~/components/Slider";

function Hero() {
  return (
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
      slides={[...Array(3)].map((item, index) => ({
        _id: `${index}`,
        element: (
          <section className="py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  The all inclusive travel app!
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  CrowdGuide is the only app you will ever need to plan your
                  next personal or group vacation.
                </p>
                <div className="flex gap-4">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Play size={20} /> Watch the video
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
                  alt="Travel Adventure"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </section>
        ),
      }))} 
      slidesPerView={1}   
    />
  );
}

export default Hero;
