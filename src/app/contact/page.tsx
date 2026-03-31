import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Everest Agri-Tech LLC for agricultural consulting, crop improvement, and gardening services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-green-dark to-green-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            We would love to hear from you. Reach out to discuss how we can help with
            your agricultural needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-green-dark mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <ContactItem
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                  label="President"
                  value="Khusi Ram Tiwari, Ph.D."
                />
                <ContactItem
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  label="Mailing Address"
                  value="203 Calhoun Dr., Madison, Mississippi, USA 39110"
                />
                <ContactItem
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  label="Phone"
                  value={
                    <a href="tel:6014972697" className="text-green-primary hover:underline">
                      (601) 497-2697
                    </a>
                  }
                />
                <ContactItem
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  label="Email"
                  value={
                    <a href="mailto:tiwarikr@gmail.com" className="text-green-primary hover:underline">
                      tiwarikr@gmail.com
                    </a>
                  }
                />
              </div>

              {/* Map placeholder */}
              <div className="mt-10 bg-cream rounded-xl p-8 text-center">
                <div className="text-green-dark font-semibold mb-2">
                  Madison, Mississippi
                </div>
                <p className="text-sm text-foreground/60">
                  Located in the heart of Mississippi, serving farmers and agricultural
                  organizations nationwide and internationally.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-green-dark mb-8">
                Send Us a Message
              </h2>
              <form
                action={`mailto:tiwarikr@gmail.com`}
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-green-light outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-green-light outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-green-light outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="consulting">Agricultural Consulting</option>
                    <option value="breeding">Crop Improvement & Plant Breeding</option>
                    <option value="gardening">Kitchen Gardening</option>
                    <option value="seeds">Improved Seeds</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-green-light outline-none transition-colors resize-vertical"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-dark transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-green-light/15 rounded-lg flex items-center justify-center text-green-primary shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm text-foreground/50 mb-0.5">{label}</div>
        <div className="text-foreground/90 font-medium">{value}</div>
      </div>
    </div>
  );
}
