import Link from 'next/link';
import { Metadata } from 'next';
import {
  LandingStatsSection,
  LandingStatItem,
  LandingFeatureList,
  LandingFeature,
  LandingPrimaryTextCtaSection,
} from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
import { companyInfo } from '@/data/company';
import {
  ArrowRight,
  Shield,
  Award,
  AlertTriangle,
  CheckCircle2,
  HardHat,
  Stethoscope,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safety Program',
  description: `Learn about Angiel Electrical's industry-leading safety program with an EMR rating of ${companyInfo.safetyMetrics.emrAverage}.`,
};

export default function SafetyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Safety First
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Commitment to Safety
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            At Angiel Electrical, safety isn't just a policy—it's a core value
            that guides everything we do. Our track record speaks for itself.
          </p>
        </div>
      </section>

      {/* EMR Stats */}
      <LandingStatsSection
        title="Safety By The Numbers"
        description="Our Experience Modification Rate (EMR) consistently remains well below the industry average of 1.0."
        withBackground
        variant="primary"
      >
        <LandingStatItem
          value={companyInfo.safetyMetrics.emrAverage.toString()}
          description="Average EMR Rating"
        />
        <LandingStatItem
          value={companyInfo.safetyMetrics.emrBest.toString()}
          description={`Best EMR (${companyInfo.safetyMetrics.emrBestYear})`}
        />
        <LandingStatItem value="1.0" description="Industry Average EMR" />
        <LandingStatItem value="0" description="Tolerance for Unsafe Acts" />
      </LandingStatsSection>

      {/* Safety Features */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Safety Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <HardHat className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Comprehensive Training
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every team member receives extensive safety training,
                  including OSHA 30 certification, arc flash safety, and
                  first aid/CPR.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Job Hazard Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Before every project, we conduct thorough hazard assessments
                  to identify and mitigate potential risks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Daily Safety Meetings
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every workday begins with a safety briefing to address
                  site-specific concerns and reinforce best practices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Drug-Free Workplace
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We maintain a strict drug-free workplace policy with regular
                  testing to ensure everyone goes home safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Safety Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companyInfo.certifications.map((cert) => (
              <div
                key={cert}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center shadow-sm"
              >
                <Award className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>What is EMR?</h2>
            <p>
              The Experience Modification Rate (EMR) is a metric used by
              insurance companies to gauge both past cost of injuries and future
              risk. An EMR of 1.0 is considered the industry average. Companies
              with EMRs below 1.0 have better-than-average safety records.
            </p>
            <p>
              Our consistently low EMR demonstrates our genuine commitment to
              safety. It means fewer workplace accidents, lower insurance costs,
              and most importantly—our workers go home safely to their families
              every day.
            </p>
            <h2>Safety is Everyone's Responsibility</h2>
            <p>
              At Angiel Electrical, safety is not just the responsibility of our
              safety director—it's everyone's job. From our executives to our
              apprentices, every team member is empowered and expected to
              identify and report potential hazards. This culture of shared
              responsibility is what keeps our safety record strong.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <LandingPrimaryTextCtaSection
        title="Work With a Safety-Focused Contractor"
        description="Choose a contractor who prioritizes the safety of your project and everyone involved."
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
