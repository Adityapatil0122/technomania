import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChartDonut,
  HouseLine,
  Lightning,
  SolarPanel,
  Storefront,
} from '@phosphor-icons/react';
import IconBadge from './IconBadge';

const propertyOptions = [
  { id: 'home', label: 'Home', icon: HouseLine, tariff: 8 },
  { id: 'business', label: 'Business', icon: Storefront, tariff: 10 },
  { id: 'industrial', label: 'Industrial', icon: Lightning, tariff: 9 },
];

const cityFactors = {
  Pune: 5.2,
  Mumbai: 4.8,
  Nashik: 5.1,
  Nagpur: 5.4,
  Aurangabad: 5.2,
  Other: 5.0,
};

function formatRupees(value) {
  return `Rs. ${Math.round(value).toLocaleString('en-IN')}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ResultDonut({ solarShare, monthlySavings, remainingBill }) {
  const gridShare = 100 - solarShare;

  return (
    <div className="rounded-[1.75rem] border border-primary/10 bg-[#f9fbf8] p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <IconBadge icon={ChartDonut} size="sm" tone="secondary" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="sm:hidden">Monthly Bill Split</span>
            <span className="hidden sm:inline">Monthly Bill Split</span>
          </p>
          <p className="text-sm text-gray-custom">
            A simple view of how much solar could offset.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="relative flex h-44 w-44 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#a1d65c 0 ${solarShare}%, #dfe7eb ${solarShare}% 100%)`,
          }}
        >
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-center shadow-[inset_0_0_0_1px_rgba(7,41,66,0.06)]">
            <span className="text-3xl font-bold text-dark">{solarShare}%</span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-custom">
              Covered
            </span>
          </div>
        </div>

        <div className="w-full space-y-3">
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_10px_24px_rgba(7,41,66,0.05)]">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-secondary" />
              <div>
                <p className="text-sm font-semibold text-dark">Solar savings</p>
                <p className="text-xs text-gray-custom">Estimated monthly offset</p>
              </div>
            </div>
            <span className="text-base font-bold text-dark">{formatRupees(monthlySavings)}</span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_10px_24px_rgba(7,41,66,0.05)]">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#dfe7eb]" />
              <div>
                <p className="text-sm font-semibold text-dark">Grid bill left</p>
                <p className="text-xs text-gray-custom">{gridShare}% still from grid</p>
              </div>
            </div>
            <span className="text-base font-bold text-dark">{formatRupees(remainingBill)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolarCalculator() {
  const [form, setForm] = useState({
    propertyType: 'home',
    monthlyBill: 3500,
    roofArea: 550,
    city: 'Pune',
  });

  const selectedProperty = propertyOptions.find((item) => item.id === form.propertyType) ?? propertyOptions[0];
  const tariff = selectedProperty.tariff;
  const irradiance = cityFactors[form.city] ?? cityFactors.Other;

  const monthlyUnits = Number(form.monthlyBill) / tariff;
  const systemByBill = monthlyUnits / 120;
  const systemByRoof = Number(form.roofArea) / 100;
  const recommendedSystem = clamp(Number(Math.min(systemByBill, systemByRoof).toFixed(1)), 1, 500);
  const monthlyGeneration = recommendedSystem * irradiance * 30 * 0.78;
  const monthlySavings = Math.round(Math.min(Number(form.monthlyBill) * 0.88, monthlyGeneration * tariff * 0.72));
  const remainingBill = Math.max(0, Number(form.monthlyBill) - monthlySavings);
  const solarShare = Number(form.monthlyBill) > 0
    ? clamp(Math.round((monthlySavings / Number(form.monthlyBill)) * 100), 0, 95)
    : 0;
  const roofNeed = Math.round(recommendedSystem * 100);
  const sizingNote = systemByRoof < systemByBill
    ? 'Roof area is limiting the estimate right now. A little more usable roof space would allow a larger system.'
    : 'Your electricity bill is the main sizing driver, and the available roof area looks sufficient for this estimate.';

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_28px_70px_rgba(7,41,66,0.10)]"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-gray-100 bg-[#fcfdfb] p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Enter Details
          </p>
          <h2 className="mt-3 text-2xl font-bold text-dark sm:text-3xl">
            A simple solar estimate
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-custom">
            Use your monthly bill and roof area to get a calm, quick estimate without too many numbers.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-dark">Property Type</label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {propertyOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => updateField('propertyType', option.id)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                      form.propertyType === option.id
                        ? 'border-secondary bg-[#f3f9ea] shadow-[0_12px_24px_rgba(161,214,92,0.12)]'
                        : 'border-gray-200 bg-white hover:border-primary/20'
                    }`}
                  >
                    <IconBadge
                      icon={option.icon}
                      size="xs"
                      tone={form.propertyType === option.id ? 'secondary' : 'muted'}
                    />
                    <span className="text-sm font-semibold text-dark">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-primary/10 bg-white p-4 sm:p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark">Monthly Bill</label>
                  <p className="mt-1 text-xs text-gray-custom">Average electricity bill</p>
                </div>
                <p className="text-2xl font-bold text-dark">{formatRupees(form.monthlyBill)}</p>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={form.monthlyBill}
                onChange={(e) => updateField('monthlyBill', Number(e.target.value))}
                className="mt-5 w-full accent-primary"
              />
              <div className="mt-2 flex justify-between text-xs text-gray-custom">
                <span>Rs. 500</span>
                <span>Rs. 1,00,000</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-dark">Usable Roof Area</span>
                <input
                  type="number"
                  min="100"
                  step="10"
                  value={form.roofArea}
                  onChange={(e) => updateField('roofArea', Number(e.target.value))}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-dark">City</span>
                <select
                  value={form.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  {Object.keys(cityFactors).map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 sm:p-7">
          <div className="order-2 mt-5 rounded-[1.75rem] gradient-hero px-5 py-5 text-white sm:order-1 sm:mt-0 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              <span className="sm:hidden">Your Estimate</span>
              <span className="hidden sm:inline">Your Estimate</span>
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm">
                <p className="text-sm text-white/65">Recommended system</p>
                <p className="mt-1 text-3xl font-bold">{recommendedSystem} kW</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm">
                <p className="text-sm text-white/65">Roof needed</p>
                <p className="mt-1 text-3xl font-bold">{roofNeed} sq ft</p>
              </div>
            </div>
          </div>

          <div className="order-1 sm:order-2">
            <ResultDonut
              solarShare={solarShare}
              monthlySavings={monthlySavings}
              remainingBill={remainingBill}
            />
          </div>

          <div className="order-3 mt-5 rounded-[1.75rem] border border-primary/10 bg-[#f7fafc] p-5">
            <div className="flex items-start gap-3">
              <IconBadge icon={SolarPanel} size="sm" tone="muted" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Quick Note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-custom">
                  {sizingNote}
                </p>
              </div>
            </div>
          </div>

          <div className="order-4 mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center rounded-2xl bg-secondary px-6 py-4 text-sm font-bold text-dark transition-all duration-300 hover:shadow-[0_18px_36px_rgba(161,214,92,0.24)]"
            >
              Request Detailed Quote
            </Link>
            <a
              href="tel:+919881932325"
              className="flex w-full items-center justify-center rounded-2xl border border-primary/15 bg-white px-6 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
