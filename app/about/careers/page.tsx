import Link from 'next/link';
import { Metadata } from 'next';
import { LandingPrimaryTextCtaSection } from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
import { companyInfo } from '@/data/company';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  DollarSign,
  Users,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Angiel Electrical team. We offer competitive benefits, ongoing training, and opportunities for growth.',
};

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Briefcase className="h-4 w-4" />
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Career With Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Since 1956, Angiel Electrical has been committed to attracting and
            retaining top performers. Join a team that values safety, quality,
            and professional growth.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Work at Angiel Electrical?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Heart className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Benefits
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                As a proud member of IBEW and NECA, we provide one of the most
                comprehensive health and benefits packages in Texas.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <GraduationCap className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Training & Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our employees receive the best electrical and safety training
                available through our union affiliations.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <DollarSign className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Competitive Pay
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer competitive wages and opportunities for advancement
                based on skill and performance.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Users className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Team Environment
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a team of dedicated professionals who support each other
                and take pride in their work.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Shield className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Safety Culture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our industry-leading safety record means you can focus on doing
                great work without compromising your wellbeing.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <Briefcase className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Job Stability
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                With {companyInfo.yearsInBusiness}+ years in business and a
                strong reputation, we offer stable, long-term employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Career Opportunities
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            We're always looking for talented individuals to join our team.
            Positions include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Licensed Electricians',
              'Electrical Apprentices',
              'Project Managers',
              'Estimators',
              'Foremen',
              'Administrative Staff',
              'Safety Coordinators',
              'Purchasing Specialists',
            ].map((position) => (
              <div
                key={position}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="font-medium">{position}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Info */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>How to Apply</h2>
            <p>
              Interested in joining the Angiel Electrical team? We'd love to
              hear from you. All applicants must be able to pass a drug screen
              and background check.
            </p>
            <h3>Requirements</h3>
            <ul>
              <li>Valid driver's license</li>
              <li>Ability to pass drug screening</li>
              <li>Clean background check</li>
              <li>
                For electricians: Current journeyman or master electrician
                license (apprentices welcome)
              </li>
            </ul>
            <h3>Contact Us</h3>
            <p>
              To apply or learn more about career opportunities, please contact
              our office or submit your information through our contact form.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <LandingPrimaryTextCtaSection
        title="Ready to Join Our Team?"
        description="Contact us today to learn about current openings and start your application."
        withBackground
        variant="secondary"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">
              Apply Now
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
