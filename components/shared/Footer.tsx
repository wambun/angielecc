import {
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink,
} from '@/components/landing';
import { footerLinks } from '@/data/config/footerLinks';
import { companyInfo } from '@/data/company';
import { Zap, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <LandingFooter
      className={className}
      title={companyInfo.tagline}
      description={`Serving the Dallas/Fort Worth metroplex with excellence in electrical construction since ${companyInfo.founded}.`}
      withBackground
      withBackgroundGlow={false}
      variant="primary"
      backgroundGlowVariant="primary"
      withBackgroundGradient
      logoComponent={
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary-500 p-1.5 rounded-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
              Angiel
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
              Electrical
            </span>
          </div>
        </Link>
      }
      footnote={
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
          <span>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            {companyInfo.affiliations.map((affiliation) => (
              <span
                key={affiliation.id}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
              >
                {affiliation.name}
              </span>
            ))}
          </div>
        </div>
      }
    >
      {footerLinks.map((column) => (
        <LandingFooterColumn key={column.columnName} title={column.columnName}>
          {column.links.map((link) => (
            <LandingFooterLink key={link.href} href={link.href}>
              {link.title}
            </LandingFooterLink>
          ))}
        </LandingFooterColumn>
      ))}

      <LandingFooterColumn title="Locations">
        {companyInfo.locations.map((location) => (
          <div key={location.id} className="flex flex-col gap-1 mb-3">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {location.name}
            </span>
            <div className="flex items-start gap-1 text-xs text-gray-600 dark:text-gray-400">
              <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
              <span>
                {location.address}, {location.city}, {location.state}{' '}
                {location.zip}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <a
                href={`tel:${location.phone}`}
                className="hover:text-primary-500"
              >
                {location.phone}
              </a>
            </div>
            {location.email && (
              <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <Mail className="h-3 w-3 flex-shrink-0" />
                <a
                  href={`mailto:${location.email}`}
                  className="hover:text-primary-500"
                >
                  {location.email}
                </a>
              </div>
            )}
          </div>
        ))}
      </LandingFooterColumn>
    </LandingFooter>
  );
};

export default Footer;
