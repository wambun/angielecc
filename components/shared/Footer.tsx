import { footerLinks } from '@/data/config/footerLinks';
import { companyInfo } from '@/data/company';
import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export const Footer = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full bg-gray-900 ${className || ''}`}>
      {/* Main Footer Content - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-[#c8ff00] p-2 rounded-lg">
                <Zap className="h-6 w-6 text-gray-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">
                  Angiel
                </span>
                <span className="text-xs text-gray-400 leading-tight uppercase tracking-widest">
                  Electrical
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              {companyInfo.tagline}. Serving the Dallas/Fort Worth metroplex with
              excellence in electrical construction since {companyInfo.founded}.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#c8ff00] hover:bg-gray-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#c8ff00] hover:bg-gray-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#c8ff00] hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#c8ff00] hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.columnName}>
              <h4 className="text-white font-semibold mb-4">{column.columnName}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#c8ff00] transition-colors text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            {companyInfo.locations.map((location) => (
              <div key={location.id} className="mb-4">
                <p className="text-white text-sm font-medium mb-2">{location.name}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#c8ff00]" />
                    <span>
                      {location.address}, {location.city}, {location.state} {location.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0 text-[#c8ff00]" />
                    <a href={`tel:${location.phone}`} className="hover:text-[#c8ff00] transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  {location.email && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Mail className="h-4 w-4 flex-shrink-0 text-[#c8ff00]" />
                      <a href={`mailto:${location.email}`} className="hover:text-[#c8ff00] transition-colors">
                        {location.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="w-full border-t border-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {companyInfo.affiliations.map((affiliation) => (
                <span
                  key={affiliation.id}
                  className="text-gray-500 text-sm hover:text-[#c8ff00] transition-colors"
                >
                  {affiliation.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
