import Link from 'next/link';
import { Metadata } from 'next';
import { companyInfo } from '@/data/company';
import { portfolioStats } from '@/data/portfolio';
import { ArrowRight, Shield, Award, Users, Target, Eye, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${companyInfo.name}, serving the Dallas/Fort Worth metroplex with excellence in electrical construction since ${companyInfo.founded}.`,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Light Theme */}
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00] rounded-full mb-6">
              <Zap className="h-4 w-4 text-gray-900" />
              <span className="text-gray-900 text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#9bc700]">Angiel Electrical</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats - White */}
      <section className="bg-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#9bc700] text-sm font-semibold uppercase tracking-wider">
              Our Track Record
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">
              Numbers that reflect our commitment to excellence
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#9bc700]">{companyInfo.yearsInBusiness}+</p>
              <p className="text-gray-600 mt-2">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#9bc700]">{portfolioStats.totalProjects}+</p>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#9bc700]">{portfolioStats.satisfiedClients}+</p>
              <p className="text-gray-600 mt-2">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#9bc700]">{companyInfo.safetyMetrics.emrAverage}</p>
              <p className="text-gray-600 mt-2">EMR Safety Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Light Gray */}
      <section className="bg-gray-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="bg-[#c8ff00] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">{companyInfo.vision}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="bg-[#c8ff00] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">{companyInfo.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - White */}
      <section className="bg-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#9bc700] text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Our History
              </h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <p>
                Founded in 1956, Angiel Electrical Construction Corporation has
                grown from a small local electrical contractor to one of the most
                respected names in the Dallas/Fort Worth electrical construction
                industry.
              </p>
              <p>
                For over six decades, we have built our reputation on three
                pillars: unwavering commitment to safety, exceptional quality of
                work, and dedication to customer satisfaction. These values have
                guided us through thousands of successful projects and have earned
                us the trust of some of the most demanding clients in Texas.
              </p>
              <p>
                Today, we serve a diverse range of sectors including commercial,
                industrial, healthcare, and data center markets. Our team of
                highly skilled electricians, project managers, and support staff
                continues to deliver the same level of excellence that our
                founders established nearly seven decades ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Sub-pages - Light Gray */}
      <section className="bg-gray-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#9bc700] text-sm font-semibold uppercase tracking-wider">
              Explore More
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">Learn More About Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link
              href="/about/safety"
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#c8ff00] hover:shadow-lg transition-all"
            >
              <div className="bg-[#c8ff00] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9bc700] transition-colors">
                Safety Program
              </h3>
              <p className="text-gray-600 text-sm">
                Learn about our industry-leading safety practices and
                certifications.
              </p>
            </Link>
            <Link
              href="/about/affiliations"
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#c8ff00] hover:shadow-lg transition-all"
            >
              <div className="bg-[#c8ff00] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9bc700] transition-colors">
                Industry Affiliations
              </h3>
              <p className="text-gray-600 text-sm">
                Discover our partnerships with NECA and IBEW.
              </p>
            </Link>
            <Link
              href="/about/careers"
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#c8ff00] hover:shadow-lg transition-all"
            >
              <div className="bg-[#c8ff00] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9bc700] transition-colors">
                Careers
              </h3>
              <p className="text-gray-600 text-sm">
                Join our team and build your career with us.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Keep Lime */}
      <section className="bg-[#c8ff00] py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-800 text-lg mb-8">
            Contact us today to discuss your next electrical construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
