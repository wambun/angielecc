'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, portfolioCategories, portfolioStats } from '@/data/portfolio';
import { ArrowRight, Briefcase, MapPin, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-[#1a2e35] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00]/10 rounded-full mb-6">
            <Briefcase className="h-4 w-4 text-[#c8ff00]" />
            <span className="text-[#c8ff00] text-sm font-medium">Our Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects That <span className="text-[#c8ff00]">Power Texas</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful electrical construction projects
            across commercial, industrial, healthcare, and data center sectors.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#152529] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#c8ff00]">{portfolioStats.totalProjects}+</p>
              <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#c8ff00]">${(portfolioStats.totalValue / 1000000).toFixed(0)}M+</p>
              <p className="text-gray-400 text-sm mt-1">Total Project Value</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#c8ff00]">{portfolioStats.yearsExperience}+</p>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#c8ff00]">{portfolioStats.satisfiedClients}+</p>
              <p className="text-gray-400 text-sm mt-1">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="bg-[#1a2e35] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === category.id
                    ? 'bg-[#c8ff00] text-[#1a2e35]'
                    : 'bg-[#243d44] text-gray-300 hover:bg-[#2d4a52] border border-gray-700'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="group bg-[#243d44] rounded-xl overflow-hidden border border-gray-700 hover:border-[#c8ff00] transition-all"
              >
                <div className="aspect-video bg-[#152529] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e35] to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#c8ff00] text-[#1a2e35] text-xs font-medium rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c8ff00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-[#c8ff00]" />
                      <span className="text-gray-400">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-[#c8ff00]" />
                      <span className="text-gray-400">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-[#c8ff00]" />
                      <span className="text-gray-400">{(project.value / 1000000).toFixed(1)}M</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c8ff00] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e35] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#1a2e35]/80 text-lg mb-8">
            Join our portfolio of successful projects. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/request-service"
              className="inline-flex items-center justify-center gap-2 bg-[#1a2e35] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#152529] transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1a2e35] text-[#1a2e35] px-8 py-4 rounded-full font-semibold hover:bg-[#1a2e35] hover:text-white transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
