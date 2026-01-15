import Link from 'next/link';
import { Metadata } from 'next';
import { services, additionalServices } from '@/data/services';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive electrical services for commercial, industrial, healthcare, and data center projects in Dallas/Fort Worth.',
};

export default function ServicesPage() {
  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description:
        'We begin with a thorough consultation to understand your project requirements, timeline, and budget.',
    },
    {
      step: '02',
      title: 'Planning & Estimation',
      description:
        'Our team develops a detailed plan and provides a comprehensive estimate with no hidden costs.',
    },
    {
      step: '03',
      title: 'Execution',
      description:
        'Our skilled electricians execute the project with precision, maintaining the highest safety standards.',
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description:
        'We conduct thorough testing and inspections to ensure everything meets code and exceeds expectations.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-[#1a2e35] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00]/10 rounded-full mb-6">
            <Zap className="h-4 w-4 text-[#c8ff00]" />
            <span className="text-[#c8ff00] text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Electrical Services for{' '}
            <span className="text-[#c8ff00]">Every Need</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From commercial buildings to mission-critical data centers, we
            deliver comprehensive electrical solutions backed by 68+ years of
            expertise.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-[#152529] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c8ff00] text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Core Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group p-8 bg-[#1a2e35] rounded-2xl border border-gray-700 hover:border-[#c8ff00] transition-all"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#c8ff00]/10 mb-6 group-hover:bg-[#c8ff00]/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-[#c8ff00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#c8ff00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#c8ff00] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-[#c8ff00] font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-[#1a2e35] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c8ff00] text-sm font-semibold uppercase tracking-wider">
              Specialized Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Additional Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 bg-[#243d44] rounded-xl text-center border border-gray-700"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#c8ff00]/10 mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-[#c8ff00]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#152529] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c8ff00] text-sm font-semibold uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Our Process
            </h2>
          </div>
          <div className="space-y-8">
            {processSteps.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#c8ff00] text-[#1a2e35] rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c8ff00] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e35] mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-[#1a2e35]/80 text-lg mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/request-service"
              className="inline-flex items-center justify-center gap-2 bg-[#1a2e35] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#152529] transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1a2e35] text-[#1a2e35] px-8 py-4 rounded-full font-semibold hover:bg-[#1a2e35] hover:text-white transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
