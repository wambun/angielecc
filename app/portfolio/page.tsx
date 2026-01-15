'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      {/* Hero Section - Light Theme */}
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00] rounded-full mb-6">
              <Briefcase className="h-4 w-4 text-gray-900" />
              <span className="text-gray-900 text-sm font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projects That <span className="text-[#9bc700]">Power Texas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful electrical construction projects
              across commercial, industrial, healthcare, and data center sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats - White */}
      <section className="bg-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9bc700]">{portfolioStats.totalProjects}+</p>
              <p className="text-gray-600 text-sm mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9bc700]">${(portfolioStats.totalValue / 1000000).toFixed(0)}M+</p>
              <p className="text-gray-600 text-sm mt-1">Total Project Value</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9bc700]">{portfolioStats.yearsExperience}+</p>
              <p className="text-gray-600 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9bc700]">{portfolioStats.satisfiedClients}+</p>
              <p className="text-gray-600 text-sm mt-1">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Projects - Light Gray */}
      <section className="bg-gray-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === category.id
                    ? 'bg-[#c8ff00] text-gray-900'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#c8ff00] hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#c8ff00] text-gray-900 text-xs font-medium rounded-full capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9bc700] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-[#9bc700]" />
                      <span className="text-gray-600">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-[#9bc700]" />
                      <span className="text-gray-600">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-[#9bc700]" />
                      <span className="text-gray-600">{(project.value / 1000000).toFixed(1)}M</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA - Keep Lime */}
      <section className="bg-[#c8ff00] py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-800 text-lg mb-8">
            Join our portfolio of successful projects. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/request-service"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
