import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Everest Agri-Tech LLC and Dr. Khusi Ram Tiwari — over 25 years of plant breeding and agricultural expertise.",
};

const experience = [
  {
    role: "Principal Plant Breeder",
    company: "Bayer Crop Science",
    location: "Flora, Mississippi, USA",
    period: "2018 – Dec. 2024",
    highlights: [
      "Developed and led Corn hybrids testing and evaluation for Western and Southern US markets",
      "Advanced high-performing hybrids/inbreds and recommended for commercial release with highest yield potential",
    ],
  },
  {
    role: "Senior Plant Breeder & Corn Pipeline Lead",
    company: "Bayer Crop Science (Monsanto)",
    location: "Flora, Mississippi, USA",
    period: "2010 – 2018",
    highlights: [
      "Led corn breeding activities for 120RM (Full maturity) for the Southern US",
      "Led introgression of tropical corn germplasm onto temperate corn",
      "Mentored several breeders, research associates, and graduate students",
    ],
  },
  {
    role: "Research Scientist (Corn Breeder)",
    company: "Pioneer Hi-Bred International, Inc",
    location: "Cairo, GA, USA",
    period: "1999 – 2010",
    highlights: [
      "Very successful in developing commercial corn inbreds and hybrids for Southern USA",
      "Tropical germplasm introgression — collaborated with breeders from Argentina and Brazil",
      "Disease resistance breeding: Rusts, Southern Corn Leaf Blight, Northern Leaf Blight, Grey Leaf Spot, Fusarium",
      "Molecular marker identification and marker-assisted selection",
    ],
  },
  {
    role: "Post-Doctoral Researcher",
    company: "Crop Development Centre, University of Saskatchewan",
    location: "Saskatoon, SK, Canada",
    period: "1998 – 1999",
    highlights: [
      "Established molecular marker (AFLP) lab for pulse crops",
      "Developed AFLP and RAPD marker assays for Lentil Ascochyta blight resistance",
    ],
  },
];

const memberships = [
  "Crop Science Society of America (CSSA) — 2001–Present",
  "American Society of Agronomy (ASA) — 2001–Present",
  "National Association of Plant Breeders (NAPB) — 2014–Present",
  "Association of Nepalese Agricultural Professionals of Americas (NAPA) — Life Member",
  "Plant Breeding and Genetics Society of Nepal — Life Member",
  "Nepal Biotechnology Society (BSN) — Life Member",
];

const communityService = [
  "Chair, CSSA International Crop Science Award Committee (2022–2023)",
  "Chair, NAPA Webinar Committee (2020–2024)",
  "Advisory Council Member — NAPA",
  "IITA, Breeding for Better Banana, Ibadan, Nigeria — Scientific Advisory Group (2020–2024)",
  "Adjunct Professor at Mississippi State University (MSU)",
  "Chief Election Commissioner — NAPA and NASeA",
  "Advisor — Nepalese Association of Southeast America (NASeA)",
  "President (2004–2006) — Florida Nepal Association (FNA)",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-green-dark to-green-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Meet the expertise behind Everest Agri-Tech — decades of scientific
            excellence in plant breeding and agricultural innovation.
          </p>
        </div>
      </section>

      {/* About the company */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-green-dark mb-6">
              About Everest Agri-Tech
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Everest Agri-Tech is a dynamic agricultural consulting company committed to
              improving farming practices through innovation, sustainable solutions, and
              expert guidance.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our mission is to empower research organizations, scientists and farmers to
              enhance their crop yields, profitability and contribute to food security.
            </p>
          </div>
        </div>
      </section>

      {/* About Dr. Tiwari */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-md sticky top-24">
                <div className="w-32 h-32 bg-gradient-to-br from-green-light to-green-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">KT</span>
                </div>
                <h3 className="text-xl font-bold text-center text-green-dark mb-1">
                  Khusi R. Tiwari, Ph.D.
                </h3>
                <p className="text-center text-foreground/60 text-sm mb-6">
                  President, Everest Agri-Tech LLC
                </p>

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-green-dark mb-2">Education</h4>
                    <ul className="space-y-1 text-foreground/70">
                      <li>Ph.D. — University of Manitoba, Canada (Plant Breeding)</li>
                      <li>M.Sc. — University of Manitoba, Canada (Plant Breeding)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-dark mb-2">Key Achievements</h4>
                    <ul className="space-y-1 text-foreground/70">
                      <li>25+ years with Pioneer/Corteva & Monsanto/Bayer</li>
                      <li>65+ corn inbreds and hybrids invented</li>
                      <li>Commercial impact across US, Europe & South America</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Career details */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-green-dark mb-4">
                Career Highlights
              </h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                A successful plant breeder and agronomist with focus on high yield, pest
                resistance, and germplasm introgression. Over 25 years of Plant Breeding
                experience with the two largest and most successful seed companies in the
                world — Pioneer/Corteva and Monsanto/Bayer. Leader in the application of
                modern agricultural technology including marker-assisted selection (MAS)
                and Doubled Haploids.
              </p>

              <h3 className="text-2xl font-bold text-green-dark mb-6">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.role + exp.period}
                    className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-light"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-lg font-bold text-green-dark">{exp.role}</h4>
                      <span className="text-sm text-foreground/50 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-green-primary font-medium mb-3">
                      {exp.company} — {exp.location}
                    </p>
                    <ul className="space-y-1">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="text-green-light mt-1">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships & Community Service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-green-dark mb-6">
                Professional Memberships
              </h2>
              <ul className="space-y-3">
                {memberships.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-foreground/80">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-dark mb-6">
                Community Service & Volunteering
              </h2>
              <ul className="space-y-3">
                {communityService.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-foreground/80">
                    <svg
                      className="w-5 h-5 text-earth-brown mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
