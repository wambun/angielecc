import Link from 'next/link';
import {
  LandingPrimaryImageCtaSection,
  LandingBentoGridSection,
  LandingBentoGridItem,
  LandingBentoGridNumberItem,
  LandingStatsSection,
  LandingStatItem,
  LandingProductCardSection,
  LandingProductCard,
  LandingPrimaryTextCtaSection,
} from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
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
} from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const primaryLocation = companyInfo.locations.find((loc) => loc.isPrimary);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <LandingPrimaryImageCtaSection
        title="Premier Electrical Contractor in Dallas/Fort Worth"
        description={`For over ${companyInfo.yearsInBusiness} years, Angiel Electrical has delivered exceptional commercial, industrial, healthcare, and data center electrical services. Trust the experts who have powered Texas since 1956.`}
        imageSrc="/images/hero-electrical.jpg"
        imageAlt="Angiel Electrical team at work"
        withBackground
        variant="secondary"
        leadingComponent={
          <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-medium">
            <Zap className="h-4 w-4" />
            <span>NECA &amp; IBEW Affiliated Contractor</span>
          </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/contact/request-service">
              Request Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={`tel:${primaryLocation?.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              {primaryLocation?.phone}
            </Link>
          </Button>
        </div>
      </LandingPrimaryImageCtaSection>

      {/* Stats Section */}
      <LandingStatsSection
        title="Trusted by Texas Since 1956"
        description="Our track record speaks for itself. With decades of experience and hundreds of successful projects, we deliver results you can count on."
        withBackground
        variant="primary"
      >
        <LandingStatItem
          value={`${companyInfo.yearsInBusiness}+`}
          description="Years of Excellence"
        />
        <LandingStatItem
          value={`${portfolioStats.totalProjects}+`}
          description="Projects Completed"
        />
        <LandingStatItem
          value={`$${(portfolioStats.totalValue / 1000000).toFixed(0)}M+`}
          description="In Project Value"
        />
        <LandingStatItem
          value={companyInfo.safetyMetrics.emrAverage.toString()}
          description="EMR Safety Rating"
        />
      </LandingStatsSection>

      {/* Services Section */}
      <LandingProductCardSection
        title="Our Services"
        description="Comprehensive electrical solutions for every sector. From commercial offices to mission-critical data centers, we have the expertise to power your success."
        withBackground={false}
      >
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <LandingProductCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
              className="hover:border-primary-500 transition-colors"
              topComponent={
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
              }
            />
          );
        })}
      </LandingProductCardSection>

      {/* Why Choose Us - Bento Grid */}
      <LandingBentoGridSection
        title="Why Choose Angiel Electrical?"
        description="Experience the difference of working with a contractor who puts safety, quality, and customer satisfaction first."
        withBackground
        variant="secondary"
      >
        <LandingBentoGridItem
          className="md:col-span-2"
          title="Safety First Culture"
          description="Our EMR rating of 0.76 (industry average is 1.0) reflects our unwavering commitment to workplace safety. Every team member is OSHA 30 certified."
        >
          <Shield className="h-8 w-8 text-primary-500" />
        </LandingBentoGridItem>
        <LandingBentoGridItem
          title="NECA & IBEW Partnership"
          description="Our union affiliation ensures access to the best-trained electricians in Texas with comprehensive benefits."
        >
          <Award className="h-8 w-8 text-primary-500" />
        </LandingBentoGridItem>
        <LandingBentoGridItem
          title="Experienced Teams"
          description="Our project managers and field crews bring decades of combined experience to every job."
        >
          <Users className="h-8 w-8 text-primary-500" />
        </LandingBentoGridItem>
        <LandingBentoGridNumberItem
          number={`${companyInfo.yearsInBusiness}+`}
          bottomText="Years serving the DFW metroplex with excellence"
        />
        <LandingBentoGridItem
          className="md:col-span-2"
          title="24/7 Emergency Service"
          description="Electrical emergencies don't wait, and neither do we. Our emergency response team is available around the clock."
        >
          <Clock className="h-8 w-8 text-primary-500" />
        </LandingBentoGridItem>
      </LandingBentoGridSection>

      {/* Featured Projects */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From hospitals to data centers, explore some of our most impactful
              electrical construction projects across Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio#${project.id}`}
                className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-video hover:shadow-lg transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <span className="text-xs uppercase tracking-wider text-primary-400 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {project.client} | ${(project.value / 1000000).toFixed(1)}M
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Affiliations Band */}
      <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-8">
            Proud Members Of
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {companyInfo.affiliations.map((affiliation) => (
              <div key={affiliation.id} className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="font-bold text-primary-600 text-lg">
                    {affiliation.name}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 hidden md:block max-w-[200px] text-left">
                  {affiliation.fullName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <LandingPrimaryTextCtaSection
        title="Ready to Start Your Project?"
        description="Contact us today for a free consultation. Our team is ready to help you with all your electrical construction needs."
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
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>
    </div>
  );
}
