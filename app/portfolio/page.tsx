'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LandingStatsSection,
  LandingStatItem,
  LandingPrimaryTextCtaSection,
} from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
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
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Briefcase className="h-4 w-4" />
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Projects That Power Texas
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful electrical construction projects
            across commercial, industrial, healthcare, and data center sectors.
          </p>
        </div>
      </section>

      {/* Stats */}
      <LandingStatsSection
        title="Our Track Record"
        withBackground
        variant="primary"
      >
        <LandingStatItem
          value={`${portfolioStats.totalProjects}+`}
          description="Projects Completed"
        />
        <LandingStatItem
          value={`$${(portfolioStats.totalValue / 1000000).toFixed(0)}M+`}
          description="Total Project Value"
        />
        <LandingStatItem
          value={`${portfolioStats.yearsExperience}+`}
          description="Years Experience"
        />
        <LandingStatItem
          value={`${portfolioStats.satisfiedClients}+`}
          description="Satisfied Clients"
        />
      </LandingStatsSection>

      {/* Filter & Projects */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {(project.value / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <LandingPrimaryTextCtaSection
        title="Ready to Start Your Project?"
        description="Join our portfolio of successful projects. Contact us today for a consultation."
        withBackground
        variant="secondary"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/contact/request-service">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>
    </div>
  );
}
