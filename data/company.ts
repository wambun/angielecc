export const companyInfo = {
  name: 'Angiel Electrical Construction Corporation',
  shortName: 'Angiel Electrical',
  founded: 1956,
  yearsInBusiness: new Date().getFullYear() - 1956,
  tagline: 'Excellence in Electrical Construction Since 1956',
  description:
    'For over six decades, Angiel Electrical has been the premier electrical contractor in the Dallas/Fort Worth metroplex. Our commitment to quality, safety, and innovation has made us the trusted partner for commercial, industrial, healthcare, and data center projects.',
  mission:
    'To deliver exceptional electrical construction services with unwavering commitment to safety, quality, and customer satisfaction.',
  vision:
    'To be the most trusted and respected electrical contractor in Texas, known for our expertise, reliability, and dedication to excellence.',
  locations: [
    {
      id: 'dfw',
      name: 'DFW Office (Headquarters)',
      address: '9030 Directors Row',
      city: 'Dallas',
      state: 'TX',
      zip: '75247',
      phone: '214-824-6369',
      fax: '214-824-9185',
      email: 'dallas@angielecc.com',
      coordinates: { lat: 32.819023, lng: -96.890874 },
      isPrimary: true,
    },
    {
      id: 'ennis',
      name: 'Ennis Office',
      address: '300 W Crockett St.',
      city: 'Ennis',
      state: 'TX',
      zip: '75119',
      phone: '972-878-6474',
      fax: '',
      email: 'ennis@angielecc.com',
      coordinates: { lat: 32.329444, lng: -96.625556 },
      isPrimary: false,
    },
  ],
  affiliations: [
    {
      id: 'neca',
      name: 'NECA',
      fullName: 'National Electrical Contractors Association',
      description:
        'The National Electrical Contractors Association (NECA) is the voice of the $171 billion electrical construction industry that brings power, light, and communication technology to buildings and communities across the U.S.',
      logo: '/images/affiliations/neca-logo.png',
    },
    {
      id: 'ibew',
      name: 'IBEW Local 20',
      fullName: 'International Brotherhood of Electrical Workers',
      description:
        'The International Brotherhood of Electrical Workers represents approximately 775,000 members who work in a wide variety of fields, including utilities, construction, telecommunications, broadcasting, manufacturing, railroads, and government.',
      logo: '/images/affiliations/ibew-logo.png',
    },
  ],
  safetyMetrics: {
    emrAverage: 0.76,
    emrBest: 0.63,
    emrBestYear: 2015,
    description:
      'Our Experience Modification Rate (EMR) consistently remains well below the industry average of 1.0, demonstrating our commitment to workplace safety.',
  },
  certifications: [
    'Licensed Master Electrician',
    'OSHA 30 Certified',
    'First Aid/CPR Certified',
    'Arc Flash Safety Certified',
  ],
};

export type CompanyInfo = typeof companyInfo;
export type Location = (typeof companyInfo.locations)[0];
export type Affiliation = (typeof companyInfo.affiliations)[0];
