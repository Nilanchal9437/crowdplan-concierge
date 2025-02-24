import { Link } from "@remix-run/react";

import Container from "~/components/Container";
import Hero from "~/features/home/components/Hero";
import PopularDestinations from "~/features/home/components/PopularDestinations";
import AboutUs from "~/features/home/components/AboutUs";
import Explore from "~/features/home/components/Explore";
import Features from "~/features/home/components/Features";
import Testimonials from "~/features/home/components/Testimonials";
import Blog from "~/features/home/components/Blog";
import ContactUs from "~/features/home/components/ContactUs";
import Services from "~/features/home/components/Services";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Container>
        <Hero />
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Take a quiz Now
          </h2>
          <div className="flex justify-center gap-4 mt-4 mb-4 w-[300px] mx-auto">
            <button className="flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors text-center">
              <Link to="/quiz">Take the Compatibility Quiz</Link>
            </button>
          </div>
        </section>
        <Explore />
        <AboutUs />
        <Features />
        <PopularDestinations />
      </Container>
      {/* Stats Section */}
      <section className="bg-orange-500 py-16">
        <Container>
          <div className="grid justify-between grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-y-16 text-center">
            {[
              { number: "2M+", label: "Trips Planned" },
              { number: "500+", label: "Points of Interest" },
              { number: "100K+", label: "Users" },
              { number: "4.8+", label: "Reviews" },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Container>
        <Services />
        <Testimonials />
        <Blog />
        <ContactUs />
      </Container>
    </div>
  );
}

export default Home;
