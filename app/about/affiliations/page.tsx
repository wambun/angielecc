import Link from 'next/link';
import { Metadata } from 'next';
import { LandingPrimaryTextCtaSection } from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
import { companyInfo } from '@/data/company';
import { ArrowRight, Award, Users, GraduationCap, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Affiliations',
  description:
    'Learn about Angiel Electrical\'s partnerships with NECA and IBEW Local 20.',
};

export default function AffiliationsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Industry Partnerships
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Industry Affiliations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            As proud members of NECA and IBEW, we have access to the
            best-trained electricians and the most comprehensive support network
            in the industry.
          </p>
        </div>
      </section>

      {/* Affiliations */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {companyInfo.affiliations.map((affiliation) => (
              <div
                key={affiliation.id}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
              >
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">
                    {affiliation.name}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {affiliation.fullName}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {affiliation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Affiliations Mean for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
              <Users className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Skilled Workforce
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our IBEW electricians undergo rigorous apprenticeship programs
                and continuous training, ensuring you get the most qualified
                professionals on your project.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
              <GraduationCap className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Ongoing Education
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Through our NECA membership, we stay current with the latest
                electrical codes, technologies, and industry best practices.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
              <Heart className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Benefits
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our employees receive excellent healthcare, retirement benefits,
                and job security—which means happier workers and better results
                for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NECA Description */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>About NECA</h2>
            <p>
              The National Electrical Contractors Association (NECA) is the
              voice of the $171 billion electrical construction industry. NECA
              contractors bring power, light, and communication technology to
              buildings and communities across the United States.
            </p>
            <p>
              As a NECA member, Angiel Electrical has access to industry-leading
              resources, training programs, and networking opportunities that
              help us deliver better results for our clients.
            </p>

            <h2>About IBEW Local 20</h2>
            <p>
              The International Brotherhood of Electrical Workers (IBEW)
              represents approximately 775,000 members who work in a wide
              variety of fields. IBEW Local 20 serves the Dallas/Fort Worth
              area with highly trained electricians who have completed rigorous
              apprenticeship programs.
            </p>
            <p>
              Our partnership with IBEW ensures that every electrician on our
              team has received comprehensive training and maintains the highest
              standards of professionalism and skill.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <LandingPrimaryTextCtaSection
        title="Partner With the Best"
        description="Work with a contractor backed by the industry's leading organizations."
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
            <Link href="/about">Back to About</Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>
    </div>
  );
}
