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
      {/* Hero Section - Light Theme */}
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00] rounded-full mb-6">
              <Phone className="h-4 w-4 text-gray-900" />
              <span className="text-gray-900 text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-[#9bc700]">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or ready to start your project? We're here to help.
              Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards - White */}
      <section className="bg-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {companyInfo.locations.map((location) => (
              <div
                key={location.id}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#c8ff00] rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{location.name}</h2>
                    {location.isPrimary && (
                      <span className="text-xs text-[#9bc700] font-medium">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#9bc700] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        {location.address}
                      </p>
                      <p className="text-gray-700">
                        {location.city}, {location.state} {location.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#9bc700] flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-700 hover:text-[#9bc700] transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {location.fax && (
                    <div className="flex items-center gap-3">
                      <span className="w-5 text-center text-[#9bc700] text-xs">
                        FAX
                      </span>
                      <span className="text-gray-700">
                        {location.fax}
                      </span>
                    </div>
                  )}

                  {location.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#9bc700] flex-shrink-0" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-gray-700 hover:text-[#9bc700] transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${location.address}, ${location.city}, ${location.state} ${location.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#9bc700] hover:underline font-medium"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="max-w-2xl mx-auto text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <Clock className="h-8 w-8 text-[#9bc700] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium text-gray-900">Monday - Friday:</span> 7:00 AM - 5:00 PM
              </p>
              <p>
                <span className="font-medium text-gray-900">Saturday - Sunday:</span> Closed
              </p>
              <p className="mt-4 text-sm">
                <Zap className="inline h-4 w-4 text-[#c8ff00] mr-1" />
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request CTA - Keep Lime */}
      <section className="bg-[#c8ff00] py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Quote for Your Project?
          </h2>
          <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
            Fill out our service request form and our team will get back to you
            with a detailed estimate.
          </p>
          <Link
            href="/contact/request-service"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Request Service
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Affiliations - Light Gray */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Proud Members Of
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {companyInfo.affiliations.map((affiliation) => (
              <div key={affiliation.id} className="text-center">
                <p className="text-2xl font-bold text-gray-400 hover:text-[#9bc700] transition-colors">
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
