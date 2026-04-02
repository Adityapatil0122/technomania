export const company = {
  name: 'Technomania Energy',
  legalName: 'Technomania Energy LLP',
  brandTitle: 'Technomania',
  brandSubtitle: 'Energy',
  mark: '/logo2-mark.png',
  website: 'www.technomania.in',
  websiteUrl: 'https://www.technomania.in',
  address: 'Survey No. 975/57, Matoshri Building, Near Dnyandeep School, Gayakwad Nagar, Narhe, Pune - 411041',
  shortAddress: 'Matoshri Building, Gayakwad Nagar, Narhe, Pune - 411041',
  introServices: ['Rooftop Solar', 'Solar Water Pumps', 'Energy Audits'],
  serviceFocus: [
    'Solar Rooftop System Installation',
    'Solar Water Pump Solutions',
    'Energy Audits',
    'Site Survey & Design',
    'Maintenance & Support',
  ],
  contacts: [
    {
      name: 'Maruti A. Navathar',
      phone: '+91 98819 32325',
      phoneHref: 'tel:+919881932325',
      email: 'maruti@technomania.in',
      emailHref: 'mailto:maruti@technomania.in',
    },
    {
      name: 'Laxman Lavate',
      phone: '+91 87998 85695',
      phoneHref: 'tel:+918799885695',
      email: 'laxman@technomania.in',
      emailHref: 'mailto:laxman@technomania.in',
    },
  ],
};

export const primaryContact = company.contacts[0];
export const secondaryContact = company.contacts[1];

export function buildWhatsAppUrl(message) {
  return `https://wa.me/919881932325?text=${encodeURIComponent(message)}`;
}
