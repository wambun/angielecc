export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [
      { href: '/about', title: 'About Us' },
      { href: '/about/safety', title: 'Safety' },
      { href: '/about/affiliations', title: 'Affiliations' },
      { href: '/about/careers', title: 'Careers' },
    ],
  },
  {
    columnName: 'Services',
    links: [
      { href: '/services/commercial', title: 'Commercial' },
      { href: '/services/industrial', title: 'Industrial' },
      { href: '/services/healthcare', title: 'Healthcare' },
      { href: '/services/data-center', title: 'Data Center' },
    ],
  },
  {
    columnName: 'Contact',
    links: [
      { href: '/contact', title: 'Contact Us' },
      { href: '/contact/request-service', title: 'Request Service' },
      { href: '/portfolio', title: 'Our Work' },
    ],
  },
];
