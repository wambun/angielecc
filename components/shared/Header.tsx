'use client';

import { useState } from 'react';
import Link from 'next/link';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import { companyInfo } from '@/data/company';
import { Zap, Menu, X } from 'lucide-react';

export const Header = ({ className }: { className?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#1a2e35] ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#c8ff00] p-2 rounded-lg">
              <Zap className="h-6 w-6 text-[#1a2e35]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white leading-tight tracking-tight">
                Angiel
              </span>
              <span className="text-xs text-gray-400 leading-tight uppercase tracking-widest">
                Electrical
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {headerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#c8ff00] transition-colors text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#c8ff00] text-[#1a2e35] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#d4ff33] transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            <nav className="flex flex-col gap-4">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#c8ff00] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#c8ff00] text-[#1a2e35] px-6 py-3 rounded-full font-semibold text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Talk
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
