import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  LandingProductFeature,
  LandingFeatureList,
  LandingFeature,
  LandingPrimaryTextCtaSection,
} from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
import { services } from '@/data/services';
import { projects } from '@/data/portfolio';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;
  const relatedProjects = projects
    .filter((p) => p.category === service.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-100 dark:bg-primary-900/30 mb-6">
            <IconComponent className="h-10 w-10 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Us for {service.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <span className="text-xs uppercase tracking-wider text-primary-600 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {project.client}
                  </p>
                  <p className="text-sm font-medium text-primary-600">
                    ${(project.value / 1000000).toFixed(1)}M
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/portfolio">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((otherService) => {
                const OtherIcon = otherService.icon;
                return (
                  <Link
                    key={otherService.id}
                    href={`/services/${otherService.slug}`}
                    className="group p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
                      <OtherIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary-500 transition-colors">
                      {otherService.title}
                    </h3>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <LandingPrimaryTextCtaSection
        title={`Need ${service.title}?`}
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
            <Link href="/services">All Services</Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>
    </div>
  );
}
