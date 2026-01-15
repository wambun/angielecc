import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';
import { portfolioStats, projects } from '@/data/portfolio';
import {
  Shield,
  Award,
  Users,
  Clock,
  ArrowRight,
  Phone,
  Zap,
  CheckCircle,
  Star,
  BadgeCheck,
  ThumbsUp,
} from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const primaryLocation = companyInfo.locations.find((loc) => loc.isPrimary);

  const servicesList = [
    'Commercial Electrical',
    'Industrial Power',
    'Healthcare Systems',
    'Data Centers',
    'Emergency Service',
    'Maintenance',
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'EMR rating of 0.76, OSHA 30 certified teams',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency response',
    },
    {
      icon: Award,
      title: 'Licensed & Insured',
      description: 'Full coverage for your peace of mind',
    },
    {
      icon: Users,
      title: 'Expert Teams',
      description: 'NECA & IBEW certified electricians',
    },
    {
      icon: BadgeCheck,
      title: 'Quality Guaranteed',
      description: 'Industry-leading workmanship standards',
    },
    {
      icon: ThumbsUp,
      title: 'Client Focused',
      description: '100% satisfaction commitment',
    },
  ];

  const testimonials = [
    {
      quote: "Angiel Electrical exceeded our expectations on our hospital expansion. Their attention to detail and safety protocols are unmatched.",
      author: "Michael Torres",
      role: "Facilities Director",
      company: "Methodist Health System",
      rating: 5,
    },
    {
      quote: "We've trusted Angiel for all our data center electrical work. Their expertise in mission-critical systems is invaluable.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCore Data Centers",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and always on schedule. Angiel has been our go-to contractor for over a decade.",
      author: "Robert Williams",
      role: "Project Manager",
      company: "DFW Commercial Properties",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Full Screen with Background Image */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
            alt="Professional electrician at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full min-h-screen flex items-center pt-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00] rounded-full mb-6">
                <Zap className="h-4 w-4 text-gray-900" />
                <span className="text-gray-900 text-sm font-medium">
                  NECA & IBEW Affiliated Since 1956
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Premier Electrical{' '}
                <span className="text-[#c8ff00]">Contractor</span> in Dallas/Fort Worth
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                For over {companyInfo.yearsInBusiness} years, Angiel Electrical has delivered
                exceptional commercial, industrial, healthcare, and data center electrical services.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {servicesList.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20"
                  >
                    <CheckCircle className="h-4 w-4 text-[#c8ff00]" />
                    {service}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/request-service"
                  className="inline-flex items-center justify-center gap-2 bg-[#c8ff00] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#b8ef00] transition-colors"
                >
                  Request Service
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href={`tel:${primaryLocation?.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  {primaryLocation?.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar at Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">{companyInfo.yearsInBusiness}+</p>
                <p className="text-gray-600 text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">{portfolioStats.totalProjects}+</p>
                <p className="text-gray-600 text-sm mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">${(portfolioStats.totalValue / 1000000).toFixed(0)}M+</p>
                <p className="text-gray-600 text-sm mt-1">Project Value</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">{companyInfo.safetyMetrics.emrAverage}</p>
                <p className="text-gray-600 text-sm mt-1">EMR Safety Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Light Theme */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bc700] text-sm font-semibold uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Our Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive electrical solutions for every sector. From commercial offices
              to mission-critical data centers, we have the expertise to power your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-[#c8ff00] hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-[#c8ff00] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-7 w-7 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9bc700] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-[#9bc700] text-sm font-medium">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Light Gray Background */}
      <section className="w-full bg-gray-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bc700] text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              The Angiel Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
                >
                  <div className="bg-[#c8ff00] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Light Theme */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 max-w-7xl mx-auto">
            <div>
              <span className="text-[#9bc700] text-sm font-semibold uppercase tracking-wider">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-[#9bc700] font-medium hover:underline"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio#${project.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <span className="inline-flex items-center gap-2 text-[#c8ff00] text-sm font-medium mb-2 capitalize">
                    {project.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {project.client} | ${(project.value / 1000000).toFixed(1)}M
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Light Gray */}
      <section className="w-full bg-gray-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#9bc700] text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#c8ff00] text-[#c8ff00]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#c8ff00] rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations Section - Light */}
      <section className="w-full bg-white py-16 border-t border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Proud Members Of
          </p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {companyInfo.affiliations.map((affiliation) => (
              <div key={affiliation.id} className="text-center">
                <p className="text-2xl font-bold text-gray-400 hover:text-[#9bc700] transition-colors">
                  {affiliation.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Keep Lime Color */}
      <section className="w-full bg-[#c8ff00] py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our team is ready to help you
            with all your electrical construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/request-service"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
