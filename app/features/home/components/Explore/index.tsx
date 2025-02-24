import { MapPin } from "lucide-react";

function Explore() {
  return (
    <section className="pb-16">
      <div className="text-center mb-12">
        <span className="text-orange-500 uppercase text-sm font-semibold tracking-wider">
          EXPLORE
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          Discover exciting destinations
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="lg:translate-y-12">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl overflow-hidden relative aspect-square transition-transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=500"
              alt="Santorini"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin size={16} className="text-orange-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Santorini
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-orange-50 dark:bg-gray-800 rounded-2xl overflow-hidden relative aspect-square transition-transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=500"
              alt="Bangkok"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin size={16} className="text-orange-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Bangkok
              </span>
            </div>
          </div>
        </div>
        <div className="lg:translate-y-12">
          <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl overflow-hidden relative aspect-square transition-transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=500"
              alt="London"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin size={16} className="text-orange-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                London
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl overflow-hidden relative aspect-square transition-transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=500"
              alt="Istanbul"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin size={16} className="text-orange-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Istanbul
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
