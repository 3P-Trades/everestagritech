export default function Mission() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-dark mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Everest Agri-Tech envisions a future where every farmer thrives, every crop
              flourishes, and every meal is nourishing. We are founded by a passionate
              research scientist with extensive knowledge and expertise in national and
              international agriculture.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Our core values include <strong>integrity</strong>,{" "}
              <strong>collaboration</strong>, and a relentless pursuit for{" "}
              <strong>excellence</strong> and <strong>customer satisfaction</strong>.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We measure success not only in financial terms but also in the positive
              impact on farmers&apos; livelihoods. Join us on this journey toward sustainable
              agriculture!
            </p>
          </div>

          {/* Decorative visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-light/20 to-green-primary/20 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <StatCard number="25+" label="Years of Plant Breeding Experience" />
                <StatCard number="65+" label="Corn Inbreds & Hybrids Invented" />
                <StatCard number="3" label="Continents of Commercial Impact" />
                <StatCard number="100%" label="Commitment to Sustainability" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm text-center">
      <div className="text-3xl font-bold text-green-primary mb-1">{number}</div>
      <div className="text-sm text-foreground/70">{label}</div>
    </div>
  );
}
