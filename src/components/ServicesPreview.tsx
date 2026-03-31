import Link from "next/link";

const services = [
  {
    title: "Agricultural Consulting",
    description:
      "Personalized advice on Plant Breeding methods, crop management practices, pest control, and sustainable agriculture.",
    icon: "🌾",
  },
  {
    title: "Kitchen Gardening",
    description:
      "We encourage households to grow fresh produce. Our kits include vegetable seeds, seedlings, and expert guidance.",
    icon: "🥬",
  },
  {
    title: "Improved Seeds",
    description:
      "High-quality, genetically superior organic vegetable seeds tailored to local soil conditions and climate.",
    icon: "🌱",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-dark mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive agricultural services to help you grow better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-cream rounded-xl p-8 hover:bg-green-dark hover:text-white transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-green-dark group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-foreground/70 group-hover:text-white/80 transition-colors leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-green-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-dark transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
