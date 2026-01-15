import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/shared/ui/button';
import { companyInfo } from '@/data/company';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Angiel Electrical Construction Corporation for all your electrical needs in Dallas/Fort Worth.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Phone className="h-4 w-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or ready to start your project? We're here to help.
            Reach out to us through any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {companyInfo.locations.map((location) => (
              <div
                key={location.id}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{location.name}</h2>
                    {location.isPrimary && (
                      <span className="text-xs text-primary-600 font-medium">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {location.address}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {location.city}, {location.state} {location.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {location.fax && (
                    <div className="flex items-center gap-3">
                      <span className="w-5 text-center text-gray-400 text-xs">
                        FAX
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {location.fax}
                      </span>
                    </div>
                  )}

                  {location.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${location.address}, ${location.city}, ${location.state} ${location.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="max-w-2xl mx-auto text-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <Clock className="h-8 w-8 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium">Monday - Friday:</span> 7:00 AM -
                5:00 PM
              </p>
              <p>
                <span className="font-medium">Saturday - Sunday:</span> Closed
              </p>
              <p className="mt-4 text-sm">
                <Zap className="inline h-4 w-4 text-primary-500 mr-1" />
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request CTA */}
      <section className="w-full py-16 px-4 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Quote for Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Fill out our service request form and our team will get back to you
            with a detailed estimate.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary-600 hover:bg-gray-100"
            asChild
          >
            <Link href="/contact/request-service">
              Request Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Affiliations */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-6">
            Proud Members Of
          </h3>
          <div className="flex justify-center gap-8">
            {companyInfo.affiliations.map((affiliation) => (
              <div
                key={affiliation.id}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {affiliation.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
