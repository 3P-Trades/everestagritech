import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Everest Agri-Tech LLC</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Empowering farmers, enhancing crop yields, and contributing to food
              security through innovation and sustainable solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-green-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-green-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-green-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-green-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p>203 Calhoun Dr.</p>
              <p>Madison, MS 39110, USA</p>
              <p>
                Phone:{" "}
                <a href="tel:6014972697" className="hover:text-green-light transition-colors">
                  (601) 497-2697
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:tiwarikr@gmail.com" className="hover:text-green-light transition-colors">
                  tiwarikr@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Everest Agri-Tech LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
