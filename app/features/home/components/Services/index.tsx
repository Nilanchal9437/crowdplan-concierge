import { Search, Globe2, Compass } from "lucide-react";

function Services() {
  return (
    <section className=" py-16">
      <div className="text-center mb-12">
        <span className="text-orange-500 uppercase font-semibold">
          Services
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          How it works
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Search className="w-12 h-12 text-orange-500" />,
            title: "Search",
            description:
              "Find the places you want to go and the activities you want to do.",
          },
          {
            icon: <Globe2 className="w-12 h-12 text-orange-500" />,
            title: "Plan",
            description: "Make plans for yourself or with your group.",
          },
          {
            icon: <Compass className="w-12 h-12 text-orange-500" />,
            title: "Do",
            description:
              "Go and have fun. We will keep an itinerary so you won't forget any important details.",
          },
        ].map((step) => (
          <div key={step.title} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center p-6">
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
