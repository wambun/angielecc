import Link from 'next/link';
import { Metadata } from 'next';
import {
  LandingAboutSection,
  LandingVisionMissionSection,
  LandingStatsSection,
  LandingStatItem,
  LandingPrimaryTextCtaSection,
} from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
import { companyInfo } from '@/data/company';
import { portfolioStats } from '@/data/portfolio';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${companyInfo.name}, serving the Dallas/Fort Worth metroplex with excellence in electrical construction since ${companyInfo.founded}.`,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero/About Section */}
      <LandingAboutSection
        title="About Angiel Electrical"
        description={companyInfo.description}
        imageSrc="/images/about-hero.jpg"
        imageAlt="Angiel Electrical team"
        withBackground
        variant="secondary"
      />

      {/* Stats */}
      <LandingStatsSection
        title="Our Track Record"
        description="Numbers that reflect our commitment to excellence"
        withBackground={false}
      >
        <LandingStatItem
          value={`${companyInfo.yearsInBusiness}+`}
          description="Years in Business"
        />
        <LandingStatItem
          value={`${portfolioStats.totalProjects}+`}
          description="Projects Completed"
        />
        <LandingStatItem
          value={`${portfolioStats.satisfiedClients}+`}
          description="Satisfied Clients"
        />
        <LandingStatItem
          value={companyInfo.safetyMetrics.emrAverage.toString()}
          description="EMR Safety Rating"
        />
      </LandingStatsSection>

      {/* Vision & Mission */}
      <LandingVisionMissionSection
        visionTitle="Our Vision"
        visionDescription={companyInfo.vision}
        missionTitle="Our Mission"
        missionDescription={companyInfo.mission}
        withBackground
        variant="primary"
      />

      {/* History Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our History
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              Founded in 1956, Angiel Electrical Construction Corporation has
              grown from a small local electrical contractor to one of the most
              respected names in the Dallas/Fort Worth electrical construction
              industry.
            </p>
            <p>
              For over six decades, we have built our reputation on three
              pillars: unwavering commitment to safety, exceptional quality of
              work, and dedication to customer satisfaction. These values have
              guided us through thousands of successful projects and have earned
              us the trust of some of the most demanding clients in Texas.
            </p>
            <p>
              Today, we serve a diverse range of sectors including commercial,
              industrial, healthcare, and data center markets. Our team of
              highly skilled electricians, project managers, and support staff
              continues to deliver the same level of excellence that our
              founders established nearly seven decades ago.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links to Sub-pages */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Learn More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/about/safety"
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Shield className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                Safety Program
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about our industry-leading safety practices and
                certifications.
              </p>
            </Link>
            <Link
              href="/about/affiliations"
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Award className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                Industry Affiliations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover our partnerships with NECA and IBEW.
              </p>
            </Link>
            <Link
              href="/about/careers"
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Users className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                Careers
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join our team and build your career with us.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <LandingPrimaryTextCtaSection
        title="Ready to Work With Us?"
        description="Contact us today to discuss your next electrical construction project."
        withBackground
        variant="secondary"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us
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
