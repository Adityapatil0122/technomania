import { BatteryFull, ChartLineUp, Compass, SolarPanel, Wind, Wrench } from '@phosphor-icons/react';

const services = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    description: 'We install solar panels for homes and businesses — set up right so you get the most energy and save on bills from day one.',
    icon: SolarPanel,
    features: ['Residential & Commercial', 'Grid-Tied Systems', 'Off-Grid Solutions', 'Net Metering Setup'],
    color: '#F59E0B',
  },
  {
    id: 2,
    title: 'Wind Turbine Systems',
    description: 'Use wind energy to power your property. Our turbine systems are built to run reliably and work well alongside solar setups too.',
    icon: Wind,
    features: ['Small & Large Scale', 'Hybrid Systems', 'Site Assessment', 'Custom Engineering'],
    color: '#159946',
  },
  {
    id: 3,
    title: 'Battery Storage',
    description: 'Store the energy you generate and use it when you need it. Our battery systems keep your power running even when the sun goes down.',
    icon: BatteryFull,
    features: ['Lithium-Ion Batteries', 'Lead Acid Systems', 'Backup Power', 'Load Management'],
    color: '#3B82F6',
  },
  {
    id: 4,
    title: 'Design & Planning',
    description: 'Not sure what you need? We study your space, your electricity usage, and design a system that fits your budget and goals.',
    icon: Compass,
    features: ['Energy Assessment', 'System Design', 'ROI Analysis', 'Permit Assistance'],
    color: '#8B5CF6',
  },
  {
    id: 5,
    title: 'Maintenance & Support',
    description: 'We keep your system running smoothly — regular check-ups, quick repairs, and 24/7 support so you never have to worry.',
    icon: Wrench,
    features: ['Preventive Maintenance', '24/7 Support', 'Performance Monitoring', 'Warranty Service'],
    color: '#EF4444',
  },
  {
    id: 6,
    title: 'Energy Audits',
    description: 'We look at how you use energy and find ways to cut waste and save money. You get a clear report with real steps to take.',
    icon: ChartLineUp,
    features: ['Consumption Analysis', 'Efficiency Reports', 'Cost Optimization', 'Carbon Footprint'],
    color: '#159946',
  },
];

export default services;
