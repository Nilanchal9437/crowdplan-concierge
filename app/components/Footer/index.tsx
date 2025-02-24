import Container from "~/components/Container";
import {
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-orange-500 pt-16 pb-8">
      <Container>
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <MapPin className="text-gray-900 dark:text-white" />
              Crowdplan
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Find us out on your favorite social media platform.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Youtube size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Navigate
            </h3>
            <ul className="space-y-4">
              {["Home", "Explore", "About Us", "Features", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Download Links
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Coming soon to the Android Play Store and iOS App Store
            </p>
            <div className="space-y-4">
              <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Apple App Store
              </button>
              <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Google Play Store
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter for updates and travel tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © 2025 by Crowdplan. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
