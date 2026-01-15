import Link from 'next/link';
import { Metadata } from 'next';
import {
  LandingProductCardSection,
  LandingProductCard,
  LandingPrimaryTextCtaSection,
} from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
import { services, additionalServices } from '@/data/services';
import { ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive electrical services for commercial, industrial, healthcare, and data center projects in Dallas/Fort Worth.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Electrical Services for Every Need
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From commercial buildings to mission-critical data centers, we
            deliver comprehensive electrical solutions backed by 68+ years of
            expertise.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary-100 dark:bg-primary-900/30 mb-6">
                    <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
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
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Process
          </h2>
          <div className="space-y-8">
            {[
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
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <LandingPrimaryTextCtaSection
        title="Ready to Discuss Your Project?"
        description="Contact us today for a free consultation and estimate."
        withBackground
        variant="secondary"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/contact/request-service">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>
    </div>
  );
}
