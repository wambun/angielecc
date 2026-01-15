import {
  Building2,
  Factory,
  HeartPulse,
  Server,
  Zap,
  Shield,
  Lightbulb,
  Wrench,
} from 'lucide-react';

export const services = [
  {
    id: 'commercial',
    slug: 'commercial',
    title: 'Commercial Electrical',
    shortDescription: 'Complete electrical solutions for commercial buildings and retail spaces.',
    description:
      'From office buildings to retail centers, Angiel Electrical delivers comprehensive commercial electrical services. Our team handles everything from new construction to renovations, ensuring your business has reliable, efficient power.',
    icon: Building2,
    image: '/images/services/commercial.jpg',
    features: [
      'Electrical wiring and remodels',
      'Indoor and outdoor lighting upgrades',
      'UPS systems and surge protection',
      'Power quality metering',
      'Energy management systems',
      'Emergency generator installation',
      'Fire alarm systems',
      'Security system wiring',
    ],
    benefits: [
      'Minimize downtime during construction',
      'Energy-efficient solutions to reduce costs',
      'Code-compliant installations',
      'Preventive maintenance programs',
    ],
  },
  {
    id: 'industrial',
    slug: 'industrial',
    title: 'Industrial Electrical',
    shortDescription: 'Heavy-duty electrical infrastructure for manufacturing and industrial facilities.',
    description:
      'Industrial facilities require robust electrical systems that can handle demanding loads and harsh environments. Angiel Electrical has decades of experience in industrial electrical construction, from manufacturing plants to distribution centers.',
    icon: Factory,
    image: '/images/services/industrial.jpg',
    features: [
      'High-voltage installations',
      'Motor control centers',
      'PLC and automation wiring',
      'Industrial lighting systems',
      'Power distribution upgrades',
      'Equipment relocation',
      'Preventive maintenance',
      'Emergency repairs',
    ],
    benefits: [
      'Minimize production disruptions',
      'Increase operational efficiency',
      'Meet strict safety requirements',
      '24/7 emergency support',
    ],
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare Facilities',
    shortDescription: 'Specialized electrical systems for hospitals and medical facilities.',
    description:
      'Healthcare facilities demand the highest standards of electrical reliability and safety. Angiel Electrical understands the critical nature of medical environments and delivers electrical systems that meet stringent healthcare codes and regulations.',
    icon: HeartPulse,
    image: '/images/services/healthcare.jpg',
    features: [
      'Critical power systems',
      'Emergency generator systems',
      'Isolated ground systems',
      'Medical equipment connections',
      'Nurse call systems',
      'Patient monitoring infrastructure',
      'OR and ICU electrical systems',
      'Code compliance upgrades',
    ],
    benefits: [
      'Zero tolerance for power interruptions',
      'HIPAA-compliant installations',
      'Life safety code compliance',
      'Minimal disruption to patient care',
    ],
  },
  {
    id: 'data-center',
    slug: 'data-center',
    title: 'Data Center Infrastructure',
    shortDescription: 'Mission-critical electrical systems for data centers and IT facilities.',
    description:
      'Data centers require unprecedented levels of electrical reliability and redundancy. Angiel Electrical delivers the complex electrical infrastructure needed to keep your data center running 24/7/365.',
    icon: Server,
    image: '/images/services/data-center.jpg',
    features: [
      'Redundant power systems (N+1, 2N)',
      'UPS installations and maintenance',
      'PDU and busway systems',
      'Hot/cold aisle containment',
      'Generator paralleling systems',
      'Remote monitoring systems',
      'Capacity planning',
      'Energy efficiency optimization',
    ],
    benefits: [
      '99.999% uptime design',
      'Scalable infrastructure',
      'Energy-efficient solutions',
      'Tier III/IV compliance capable',
    ],
  },
];

export const additionalServices = [
  {
    id: 'emergency',
    title: 'Emergency Services',
    description: '24/7 emergency electrical response for critical situations.',
    icon: Zap,
  },
  {
    id: 'safety',
    title: 'Safety Inspections',
    description: 'Comprehensive electrical safety audits and inspections.',
    icon: Shield,
  },
  {
    id: 'lighting',
    title: 'Lighting Design',
    description: 'Custom lighting solutions for any application.',
    icon: Lightbulb,
  },
  {
    id: 'maintenance',
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance to prevent costly repairs.',
    icon: Wrench,
  },
];

export type Service = (typeof services)[0];
export type AdditionalService = (typeof additionalServices)[0];
