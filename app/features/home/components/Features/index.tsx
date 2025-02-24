function Features() {
  return (
    <section className=" py-16">
      <div className="text-center mb-12">
        <span className="text-orange-500 uppercase text-sm font-semibold tracking-wider">
          FEATURES
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          At a glance...
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {[
          {
            title: "Collaborate Together",
            description:
              "Plan your trips together with friends and family. Chat in real time, pin suggestions and create itineraries.",
            icon: (
              <img
                src="https://crowdplan.io/_next/image?url=%2Fassets%2Ffeature-icon4.jpg&w=256&q=75"
                className="w-20 h-50 bg-gray-50 dark:bg-gray-800"
              />
            ),
          },
          {
            title: "Search the world",
            description:
              "Search millions of interesting places to visit. Search for tours, activities, flights, hotels and even car rentals.",
            icon: (
              <img
                src="https://crowdplan.io/_next/image?url=%2Fassets%2Ffeature-icon5.jpg&w=256&q=75"
                className="w-20 h-50 bg-gray-50 dark:bg-gray-800"
              />
            ),
          },
          {
            title: "Get Help",
            description:
              "Not sure about something? Ask our community of like minded travelers for help.",
            icon: (
              <img
                src="https://crowdplan.io/_next/image?url=%2Fassets%2Ffeature-icon3.jpg&w=256&q=75"
                className="w-20 h-50 bg-gray-50 dark:bg-gray-800"
              />
            ),
          },
          {
            title: "AI Powered Planning",
            description:
              "Unsure of what you want to do, or where you want to go? Use our AI to help you plan that next great vacation.",
            icon: (
              <img
                src="https://crowdplan.io/_next/image?url=%2Fassets%2Ffeature-icon1.jpg&w=256&q=75"
                className="w-20 h-50 bg-gray-50 dark:bg-gray-800"
              />
            ),
          },
          {
            title: "Book All Your Travel",
            description:
              "Book all your flights, hotels, rentals, experiences directly within the app.",
            icon: (
              <img
                src="https://crowdplan.io/_next/image?url=%2Fassets%2Ffeature-icon2.jpg&w=256&q=75"
                className="w-20 h-50 bg-gray-50 dark:bg-gray-800"
              />
            ),
          },
          {
            title: "Help Others",
            description:
              "Know something? We are sure other travelers would like to know as well. Join the community and help making travel more collaborative.",
            icon: (
              <img
                src="https://crowdplan.io/_next/image?url=%2Fassets%2Ffeature-icon6.jpg&w=256&q=75"
                className="w-20 h-50 bg-gray-50 dark:bg-gray-800"
              />
            ),
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
