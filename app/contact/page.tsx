import Link from 'next/link';
import { Metadata } from 'next';
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
      <section className="bg-[#1a2e35] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00]/10 rounded-full mb-6">
            <Phone className="h-4 w-4 text-[#c8ff00]" />
            <span className="text-[#c8ff00] text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-[#c8ff00]">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question or ready to start your project? We're here to help.
            Reach out to us through any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-[#152529] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {companyInfo.locations.map((location) => (
              <div
                key={location.id}
                className="p-8 bg-[#1a2e35] rounded-2xl border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#c8ff00]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-[#c8ff00]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{location.name}</h2>
                    {location.isPrimary && (
                      <span className="text-xs text-[#c8ff00] font-medium">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#c8ff00] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">
                        {location.address}
                      </p>
                      <p className="text-gray-300">
                        {location.city}, {location.state} {location.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#c8ff00] flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-300 hover:text-[#c8ff00] transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {location.fax && (
                    <div className="flex items-center gap-3">
                      <span className="w-5 text-center text-[#c8ff00] text-xs">
                        FAX
                      </span>
                      <span className="text-gray-300">
                        {location.fax}
                      </span>
                    </div>
                  )}

                  {location.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#c8ff00] flex-shrink-0" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-gray-300 hover:text-[#c8ff00] transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${location.address}, ${location.city}, ${location.state} ${location.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#c8ff00] hover:underline font-medium"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="max-w-2xl mx-auto text-center p-8 bg-[#1a2e35] rounded-2xl border border-gray-700">
            <Clock className="h-8 w-8 text-[#c8ff00] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="font-medium text-white">Monday - Friday:</span> 7:00 AM - 5:00 PM
              </p>
              <p>
                <span className="font-medium text-white">Saturday - Sunday:</span> Closed
              </p>
              <p className="mt-4 text-sm">
                <Zap className="inline h-4 w-4 text-[#c8ff00] mr-1" />
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request CTA */}
      <section className="bg-[#c8ff00] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e35] mb-4">
            Need a Quote for Your Project?
          </h2>
          <p className="text-[#1a2e35]/80 text-lg mb-8 max-w-2xl mx-auto">
            Fill out our service request form and our team will get back to you
            with a detailed estimate.
          </p>
          <Link
            href="/contact/request-service"
            className="inline-flex items-center justify-center gap-2 bg-[#1a2e35] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#152529] transition-colors"
          >
            Request Service
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-[#1a2e35] py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Proud Members Of
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {companyInfo.affiliations.map((affiliation) => (
              <div key={affiliation.id} className="text-center">
                <p className="text-2xl font-bold text-gray-400 hover:text-[#c8ff00] transition-colors">
                  {affiliation.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
