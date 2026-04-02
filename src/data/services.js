import { ChartLineUp, Compass, Drop, SolarPanel, Wrench } from '@phosphor-icons/react';

const services = [
  {
    id: 1,
    title: 'Solar Rooftop System Installation',
    description: 'We design and install rooftop solar systems for homes, commercial buildings, and industrial sites with a strong focus on output, payback, and neat execution.',
    icon: SolarPanel,
    features: ['Residential & Commercial', 'On-Grid Planning', 'Load-Based Sizing', 'Net Metering Guidance'],
    color: '#a1d65c',
  },
  {
    id: 2,
    title: 'Solar Water Pump Solutions',
    description: 'For agricultural and utility use-cases, we help plan solar pumping systems that reduce operating cost and keep water movement dependable.',
    icon: Drop,
    features: ['Field Assessment', 'Pump Sizing', 'Reliable Daytime Operation', 'Site Suitability Review'],
    color: '#4C6971',
  },
  {
    id: 3,
    title: 'Energy Audits',
    description: 'We study how your facility uses power, find waste points, and show where solar or efficiency changes can make the biggest difference.',
    icon: ChartLineUp,
    features: ['Consumption Analysis', 'Savings Roadmap', 'Load Review', 'Clear Reporting'],
    color: '#072942',
  },
  {
    id: 4,
    title: 'Site Survey & Design',
    description: 'Every strong installation starts with the right survey. We study the roof, usage pattern, and constraints before locking a practical design.',
    icon: Compass,
    features: ['Roof Study', 'Shadow Review', 'Budget Alignment', 'System Drawings'],
    color: '#4C6971',
  },
  {
    id: 5,
    title: 'Maintenance & Support',
    description: 'After installation, we stay involved with health checks, troubleshooting, and support to keep the system performing well over time.',
    icon: Wrench,
    features: ['Preventive Checks', 'Performance Review', 'Troubleshooting', 'After-Sales Support'],
    color: '#a1d65c',
  },
];

export default services;
