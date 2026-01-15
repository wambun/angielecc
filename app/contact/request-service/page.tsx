'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Textarea } from '@/components/shared/ui/textarea';
import { Label } from '@/components/shared/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/ui/select';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';
import {
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Send,
} from 'lucide-react';

export default function ServiceRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col w-full min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Your service request has been submitted. Our team will review your
            inquiry and get back to you within 1-2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const primaryLocation = companyInfo.locations.find((loc) => loc.isPrimary);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            Service Request
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a detailed estimate.
            Fill out the form below and our team will contact you shortly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(214) 555-0123"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select name="serviceType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectLocation">Project Location</Label>
                  <Input
                    id="projectLocation"
                    name="projectLocation"
                    placeholder="City, State or Address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget Range</Label>
                  <Select name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under $50,000</SelectItem>
                      <SelectItem value="50k-250k">$50,000 - $250,000</SelectItem>
                      <SelectItem value="250k-1m">$250,000 - $1,000,000</SelectItem>
                      <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                      <SelectItem value="over-5m">Over $5,000,000</SelectItem>
                      <SelectItem value="unsure">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select name="timeline">
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-12-months">6-12 months</SelectItem>
                      <SelectItem value="over-12-months">Over 12 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Please describe your project, including scope, requirements, and any specific needs..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline" size="lg" asChild>
                    <Link href="/contact">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Contact
                    </Link>
                  </Button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">
                  Prefer to Talk?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our team is available during business hours to discuss your
                  project directly.
                </p>
                {primaryLocation && (
                  <div className="space-y-3">
                    <a
                      href={`tel:${primaryLocation.phone}`}
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      {primaryLocation.phone}
                    </a>
                    {primaryLocation.email && (
                      <a
                        href={`mailto:${primaryLocation.email}`}
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                      >
                        <Mail className="h-4 w-4" />
                        {primaryLocation.email}
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      We review your request within 24 hours
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Our team contacts you to discuss details
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      We provide a detailed estimate
                    </span>
                  </li>
                </ol>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">
                  {companyInfo.yearsInBusiness}+ Years Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Trusted by hundreds of clients across Dallas/Fort Worth since{' '}
                  {companyInfo.founded}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
