import { LandingHeader, LandingHeaderMenuItem } from '@/components/landing';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import { companyInfo } from '@/data/company';
import { Zap, Phone } from 'lucide-react';
import Link from 'next/link';

export const Header = ({ className }: { className?: string }) => {
  const primaryLocation = companyInfo.locations.find((loc) => loc.isPrimary);

  return (
    <LandingHeader
      className={className}
      fixed
      withBackground
      variant="primary"
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
    >
      {headerNavLinks.map((link) => (
        <LandingHeaderMenuItem
          key={link.href}
          href={link.href}
          label={link.title}
        />
      ))}
      {primaryLocation && (
        <LandingHeaderMenuItem
          href={`tel:${primaryLocation.phone}`}
          type="button"
          variant="primary"
        >
          <Phone className="h-4 w-4 mr-2" />
          {primaryLocation.phone}
        </LandingHeaderMenuItem>
      )}
    </LandingHeader>
  );
};

export default Header;
