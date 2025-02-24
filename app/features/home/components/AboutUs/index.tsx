import { Users2, Brain } from "lucide-react";

function AboutUs() {
  return (
    <section className=" py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-blue-50 dark:bg-gray-800 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=500"
              alt="Adventure"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-orange-500 uppercase text-sm font-semibold tracking-wider">
            ABOUT US
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Planning a trip should
            <br />
            be an adventure
          </h2>
          <p className="text-gray-500 mb-8">
            We believe that things are better when you have company, and that is
            why we are on a quest to make travel collaborative.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-50 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Users2 className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Collaborative
                </h3>
                <p className="text-gray-500 text-sm">
                  Crowdplan with your friends, family or our community of like
                  minded travelers. Sometimes, two is better than one.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-50 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  AI
                </h3>
                <p className="text-gray-500 text-sm">
                  Not sure where to go, ask our expertly trained AI for
                  recommendations on flights, places to visit and things to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
