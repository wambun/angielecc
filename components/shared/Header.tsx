'use client';

import { useState } from 'react';
import Link from 'next/link';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import { Zap, Menu, X } from 'lucide-react';

export const Header = ({ className }: { className?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm ${className || ''}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#c8ff00] p-2 rounded-lg">
              <Zap className="h-6 w-6 text-gray-900" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-tight tracking-tight">
                Angiel
              </span>
              <span className="text-xs text-gray-500 leading-tight uppercase tracking-widest">
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
                className="text-gray-700 hover:text-[#9bc700] transition-colors text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#c8ff00] text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#b8ef00] transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-900 p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 bg-white">
            <nav className="flex flex-col gap-4">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#9bc700] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#c8ff00] text-gray-900 px-6 py-3 rounded-full font-semibold text-center mt-4"
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
