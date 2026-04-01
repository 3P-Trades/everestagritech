"use client";

import { motion } from "motion/react";
import {
  Sprout,
  Leaf,
  Microscope,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Award,
  ChevronRight,
  Globe,
  Users,
  CheckCircle2,
  TreePine,
  Flower2,
  Wheat,
  BookOpen,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const services = [
  {
    title: "Crop Improvement & Plant Breeding",
    desc: "Developing improved crop varieties with higher yields, pest and disease resistance through advanced breeding techniques.",
    icon: <Wheat className="w-6 h-6" />,
    items: [
      "Row crops & vegetables",
      "Pest & disease resistance",
      "Germplasm introgression",
      "Testing locations & data analytics",
    ],
  },
  {
    title: "Agricultural Consulting",
    desc: "Personalized advice on crop management, pest control, and sustainable agriculture practices for research organizations and farmers.",
    icon: <Microscope className="w-6 h-6" />,
    items: [
      "Crop management practices",
      "Sustainable agriculture",
      "Small holder & climate resilient practices",
    ],
  },
  {
    title: "Kitchen Gardening",
    desc: "Encouraging urban and rural households to grow their own fresh produce including fruits and vegetables. Our kits include seeds, seedlings, and expert guidance.",
    icon: <Flower2 className="w-6 h-6" />,
    items: [
      "Gardening for Health",
      "Senior citizen focus",
      "Vegetable seeds & seedlings kits",
    ],
  },
  {
    title: "Improved Seeds",
    desc: "High-quality, genetically superior organic vegetable seeds that boost productivity and resilience, tailored to local soil conditions and climate.",
    icon: <Leaf className="w-6 h-6" />,
    items: ["Local climate tailored", "High-yield varieties", "Disease resistance"],
  },
  {
    title: "Genetics & Biotech",
    desc: "Advising on modern agricultural technology including marker assisted selection (MAS) and Doubled Haploids.",
    icon: <Sprout className="w-6 h-6" />,
    items: ["Doubled Haploids", "Molecular markers", "Biotech advising"],
  },
  {
    title: "Sustainable Practices",
    desc: "Committed to minimizing chemical inputs, promoting biodiversity, and measuring success in the positive impact on farmers' livelihoods.",
    icon: <Globe className="w-6 h-6" />,
    items: ["Climate resilience", "Organic methods", "Biodiversity promotion"],
  },
  {
    title: "Landscaping & Horticulture",
    desc: "Fruit trees for backyards, herbs and flowers, and professional landscaping services.",
    icon: <TreePine className="w-6 h-6" />,
    items: ["Backyard fruit trees", "Herbs & flowers", "Professional landscaping"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-earth-50/80 backdrop-blur-md border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-leaf-600 rounded-full flex items-center justify-center">
              <Sprout className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight serif uppercase">
              Everest Agri-Tech
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-earth-700">
            <a href="#services" className="hover:text-leaf-600 transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-leaf-600 transition-colors">
              About
            </a>
            <a href="#expert" className="hover:text-leaf-600 transition-colors">
              The Expert
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-leaf-700 text-white rounded-full hover:bg-leaf-800 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
            alt="Lush green field"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-earth-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-leaf-600/20 backdrop-blur-sm border border-leaf-400/30 text-leaf-100 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Innovation in Agriculture
            </span>
            <h1 className="text-6xl md:text-8xl font-light text-white leading-[0.9] serif mb-8">
              Empowering <span className="italic">Growth</span> Through Science.
            </h1>
            <p className="text-xl text-earth-100 mb-10 leading-relaxed font-light">
              Everest Agri-Tech is committed to improving farming practices through
              innovation, sustainable solutions, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-4 bg-leaf-600 text-white rounded-full font-medium hover:bg-leaf-700 transition-all flex items-center gap-2 group"
              >
                Our Services{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </header>

      {/* Executive Summary / Mission */}
      <section id="about" className="section-padding bg-earth-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl serif mb-8 leading-tight">
                Our Mission is to Empower Farmers and Enhance{" "}
                <span className="italic text-leaf-700">Food Security</span>.
              </h2>
              <p className="text-lg text-earth-700 mb-6 leading-relaxed">
                Everest Agri-Tech is a dynamic agricultural consulting company founded
                by a passionate research scientist with extensive knowledge and expertise
                in national and international agriculture. Our mission is to empower
                research organizations, scientists and farmers to enhance their crop
                yields, profitability and contribute to food security.
              </p>
              <p className="text-base text-earth-600 mb-6 leading-relaxed">
                We have deep-rooted expertise in Genetics, Plant Breeding, Horticulture,
                and environmental stewardship. Our core values include integrity,
                collaboration, and a relentless pursuit for excellence and customer
                satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-3xl font-bold text-leaf-700 serif">25+</h4>
                  <p className="text-sm uppercase tracking-widest text-earth-500 mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-leaf-700 serif">65+</h4>
                  <p className="text-sm uppercase tracking-widest text-earth-500 mt-1">
                    Patents & Inbreds
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000"
                  alt="Hands holding soil"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl max-w-xs">
                <p className="italic text-earth-800 serif text-lg">
                  &ldquo;We envision a future where every farmer thrives, every crop
                  flourishes, and every meal is nourishing.&rdquo;
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-leaf-700">
                  — Khusi Ram Tiwari, Ph.D.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              {...fadeIn}
              className="text-xs font-bold uppercase tracking-[0.3em] text-leaf-600 mb-4 block"
            >
              What We Offer
            </motion.span>
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl serif mb-6">
              Specialized Solutions for Modern Agriculture
            </motion.h2>
            <motion.p {...fadeIn} className="text-earth-600">
              From large-scale crop improvement to personal kitchen gardening, we
              provide expert guidance tailored to your specific needs.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="p-8 rounded-3xl bg-white border border-earth-200 hover:border-leaf-300 hover:shadow-xl hover:shadow-leaf-900/5 transition-all group"
              >
                <div className="w-12 h-12 bg-earth-100 rounded-2xl flex items-center justify-center text-leaf-700 mb-6 group-hover:bg-leaf-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl serif mb-4">{service.title}</h3>
                <p className="text-earth-600 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-earth-500"
                    >
                      <CheckCircle2 className="w-3 h-3 text-leaf-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Expert Section */}
      <section
        id="expert"
        className="section-padding bg-earth-950 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000"
            alt="Corn field"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div {...fadeIn}>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-leaf-400 mb-4 block">
                  Meet the President
                </span>
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-leaf-500/30 shadow-lg mb-6">
                  <img
                    src="/images/khusi-tiwari.png"
                    alt="Khusi Ram Tiwari, Ph.D."
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-5xl serif mb-6">
                  Khusi Ram Tiwari, <span className="italic">Ph.D.</span>
                </h2>
                <p className="text-earth-300 mb-8 leading-relaxed">
                  A successful plant breeder and agronomist with over 25 years of
                  experience with the world&apos;s largest seed companies
                  (Pioneer/Corteva and Monsanto/Bayer).
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Award className="w-5 h-5 text-leaf-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Career Highlights</h4>
                      <p className="text-sm text-earth-400 mt-1">
                        Inventor of 65+ corn inbreds and hybrids commercially grown in
                        the US, Europe, and South America. Leader in marker assisted
                        selection (MAS) and Doubled Haploids technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <GraduationCap className="w-5 h-5 text-leaf-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Academic Background</h4>
                      <p className="text-sm text-earth-400 mt-1">
                        Ph.D. and M.Sc. in Plant Breeding from the University of
                        Manitoba, Canada. Recipient of IDRC Canada scholarship. Adjunct
                        Professor at Mississippi State University (MSU).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Globe className="w-5 h-5 text-leaf-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">International Impact</h4>
                      <p className="text-sm text-earth-400 mt-1">
                        IITA Breeding for Better Banana, Nigeria — Scientific Advisory
                        Group (SAG) member (2020–2024). Experienced in international
                        agriculture and small holder needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <BookOpen className="w-5 h-5 text-leaf-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Professional Memberships</h4>
                      <p className="text-sm text-earth-400 mt-1">
                        CSSA, ASA, NAPB, NAPA (Life Member), Plant Breeding and Genetics
                        Society of Nepal, Nepal Biotechnology Society.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Users className="w-5 h-5 text-leaf-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Community Leader</h4>
                      <p className="text-sm text-earth-400 mt-1">
                        Chair of CSSA International Crop Science Award committee. Chair
                        of NAPA Webinar Committee. NAPA Advisory Council Member. Active
                        mentor and community volunteer.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem]"
              >
                <h3 className="text-2xl serif mb-8 border-b border-white/10 pb-4">
                  Professional Journey
                </h3>
                <div className="space-y-10">
                  <div className="relative pl-8 border-l border-leaf-500/30">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-leaf-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                    <span className="text-xs font-bold text-leaf-400 uppercase tracking-widest">
                      2018 — 2024
                    </span>
                    <h4 className="text-xl font-bold mt-1">
                      Principal Plant Breeder
                    </h4>
                    <p className="text-sm text-earth-400">
                      Bayer Crop Science, Flora, MS
                    </p>
                    <p className="text-sm mt-3 text-earth-300">
                      Developed and led corn hybrids testing and evaluation for Western
                      and Southern US markets. Advanced high performing hybrids/inbreds
                      for commercial release.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l border-leaf-500/30">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-leaf-400 rounded-full"></div>
                    <span className="text-xs font-bold text-leaf-400 uppercase tracking-widest">
                      2010 — 2018
                    </span>
                    <h4 className="text-xl font-bold mt-1">
                      Senior Plant Breeder & Corn Pipeline Lead
                    </h4>
                    <p className="text-sm text-earth-400">
                      Bayer Crop Science, Flora, MS
                    </p>
                    <p className="text-sm mt-3 text-earth-300">
                      Led corn breeding activities for the 120RM Southern US market.
                      Spearheaded introgression of tropical corn germplasm onto temperate
                      corn. Mentored breeders, research associates, and graduate students.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l border-leaf-500/30">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-leaf-400 rounded-full"></div>
                    <span className="text-xs font-bold text-leaf-400 uppercase tracking-widest">
                      1999 — 2010
                    </span>
                    <h4 className="text-xl font-bold mt-1">
                      Research Scientist (Corn Breeder)
                    </h4>
                    <p className="text-sm text-earth-400">
                      Pioneer Hi-Bred International, Inc., Cairo, GA
                    </p>
                    <p className="text-sm mt-3 text-earth-300">
                      Developed commercial corn inbreds and hybrids for Southern USA.
                      Breeding for disease resistance (Corn Rusts, Southern Corn Leaf
                      Blight, Northern Leaf Blight, Grey Leaf Spot, Fusarium ear rots).
                      Collaborated with breeders from Argentina and Brazil.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l border-leaf-500/30">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-leaf-400 rounded-full"></div>
                    <span className="text-xs font-bold text-leaf-400 uppercase tracking-widest">
                      1998 — 1999
                    </span>
                    <h4 className="text-xl font-bold mt-1">
                      Post-Doctoral Researcher
                    </h4>
                    <p className="text-sm text-earth-400">
                      Crop Development Centre, University of Saskatchewan, Canada
                    </p>
                    <p className="text-sm mt-3 text-earth-300">
                      Established a molecular marker (AFLP) lab for pulse crops
                      (Chickpea, Lentil, Peas). Developed AFLP and RAPD marker assays
                      for Lentil Ascochyta blight resistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section-padding bg-leaf-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-leaf-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-leaf-400" />
              </div>
              <h3 className="text-2xl serif mb-4">Local Expertise</h3>
              <p className="text-leaf-200 text-sm leading-relaxed">
                Our team understands the unique challenges faced by farmers in our
                region. We tailor solutions to local contexts.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-leaf-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-8 h-8 text-leaf-400" />
              </div>
              <h3 className="text-2xl serif mb-4">Innovation</h3>
              <p className="text-leaf-200 text-sm leading-relaxed">
                We invest in research and development to create novel products and
                services that push boundaries.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-leaf-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-leaf-400" />
              </div>
              <h3 className="text-2xl serif mb-4">Community</h3>
              <p className="text-leaf-200 text-sm leading-relaxed">
                We actively collaborate with farmers, NGOs, and government agencies to
                drive positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-earth-200">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-20">
                <motion.div {...fadeIn}>
                  <h2 className="text-4xl md:text-5xl serif mb-8">
                    Let&apos;s Grow <span className="italic">Together</span>.
                  </h2>
                  <p className="text-earth-600 mb-12">
                    Whether you&apos;re a research organization or a local farmer,
                    we&apos;re here to help you flourish. Reach out to start a
                    conversation.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center text-leaf-700">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-earth-400 font-bold">
                          Email Us
                        </p>
                        <a
                          href="mailto:tiwarikr@gmail.com"
                          className="text-lg font-medium hover:text-leaf-600 transition-colors"
                        >
                          tiwarikr@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center text-leaf-700">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-earth-400 font-bold">
                          Call Us
                        </p>
                        <a
                          href="tel:6014972697"
                          className="text-lg font-medium hover:text-leaf-600 transition-colors"
                        >
                          601-497-2697
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center text-leaf-700">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-earth-400 font-bold">
                          Location
                        </p>
                        <p className="text-lg font-medium">
                          203 Calhoun Dr., Madison, MS 39110
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000"
                  alt="Vegetable garden"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-leaf-900/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-earth-100 border-t border-earth-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-leaf-600 rounded-full flex items-center justify-center">
              <Sprout className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight serif uppercase">
              Everest Agri-Tech
            </span>
          </div>
          <p className="text-earth-500 text-sm">
            &copy; {new Date().getFullYear()} Everest Agri-Tech LLC. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-earth-400">
            <a href="#" className="hover:text-leaf-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-leaf-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
