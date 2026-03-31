import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-dark via-green-primary to-green-light text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Growing a Sustainable Future Through{" "}
            <span className="text-cream">Agricultural Innovation</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
            Everest Agri-Tech is committed to improving farming practices through
            innovation, sustainable solutions, and expert guidance. We empower
            farmers, enhance crop yields, and contribute to food security.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-block bg-white text-green-dark font-semibold px-8 py-3 rounded-lg hover:bg-cream transition-colors shadow-lg"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
