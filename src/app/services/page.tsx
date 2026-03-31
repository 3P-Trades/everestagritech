import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Agricultural consulting, crop improvement, plant breeding, kitchen gardening, and more from Everest Agri-Tech.",
};

const mainServices = [
  {
    title: "Crop Improvement & Plant Breeding",
    description:
      "Row crops and vegetables — we deliver scientifically advanced breeding solutions.",
    details: [
      "Improved crop varieties with higher yields",
      "Pest and disease resistance breeding",
      "Germplasm introgression for genetic diversity",
      "Testing locations and data analytics",
    ],
    icon: "🌾",
  },
  {
    title: "Genetics & Biotechnology Advising",
    description:
      "Expert guidance on modern biotechnology applications including marker-assisted selection (MAS) and Doubled Haploid technology.",
    details: [
      "Molecular marker development and application",
      "Marker-assisted selection strategies",
      "Doubled Haploid breeding programs",
      "Genomic tools for crop improvement",
    ],
    icon: "🧬",
  },
  {
    title: "Sustainable Agricultural Practices",
    description:
      "We help implement environmentally responsible farming methods that maintain productivity while preserving natural resources.",
    details: [
      "Minimizing chemical inputs",
      "Promoting biodiversity",
      "Climate-resilient practices",
      "Soil health management",
    ],
    icon: "🌍",
  },
  {
    title: "Agricultural Consulting",
    description:
      "Personalized advice on crop management, pest control, and farming best practices tailored to your specific needs.",
    details: [
      "Crop management strategies",
      "Integrated pest management",
      "Yield optimization",
      "Small holder farming solutions",
    ],
    icon: "📋",
  },
];

const gardeningServices = [
  {
    title: "Kitchen Gardening",
    description:
      "We encourage urban and rural households to grow their own fresh produce including fruits and vegetables. Our kitchen gardening kits include vegetable seeds, seedlings, and expert guidance.",
    icon: "🥬",
  },
  {
    title: "Gardening for Health",
    description:
      "We encourage senior citizens and all age groups to have a garden with a focus on health and wellness. Gardening is therapy, exercise, and nutrition all in one.",
    icon: "💚",
  },
  {
    title: "Fruit Trees for Backyards",
    description:
      "Expert advice on selecting and growing fruit trees suited for your backyard, including planting, care, and harvesting guidance.",
    icon: "🍎",
  },
  {
    title: "Herbs & Flowers",
    description:
      "Guidance on growing culinary herbs, medicinal plants, and beautiful flowers to enhance your garden and kitchen.",
    icon: "🌸",
  },
  {
    title: "Landscaping",
    description:
      "Professional landscaping advice that combines aesthetics with functionality, using sustainable and locally adapted plants.",
    icon: "🏡",
  },
  {
    title: "Improved Seeds",
    description:
      "High-quality, genetically superior organic vegetable seeds that boost productivity and resilience, tailored to local soil conditions and climate.",
    icon: "🌱",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-green-dark to-green-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            From crop improvement to kitchen gardening, we provide comprehensive
            agricultural solutions backed by decades of scientific expertise.
          </p>
        </div>
      </section>

      {/* Main consulting services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-dark mb-10">
            Professional Agricultural Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold text-green-dark mb-3">
                  {s.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                      <svg
                        className="w-5 h-5 text-green-light mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gardening services */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-dark mb-4">
            Home & Garden Services
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl">
            Bringing agriculture to your doorstep with practical gardening solutions for every household.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gardeningServices.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-green-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Agriculture?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let us help you achieve better yields, healthier crops, and a sustainable future.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-dark font-semibold px-8 py-3 rounded-lg hover:bg-cream transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
