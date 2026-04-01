import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calculator, CalendarBlank, CurrencyInr, Leaf, SolarPanel } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

const steps = ['Monthly Bill', 'Roof Details', 'Location', 'Results'];

export default function SolarCalculator() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    monthlyBill: 3000,
    roofArea: 500,
    roofType: 'flat',
    city: 'Pune',
  });
  const [showResults, setShowResults] = useState(false);

  const handleChange = (field, value) => setData({ ...data, [field]: value });

  const calculate = () => {
    const billNum = Number(data.monthlyBill);
    const areaNum = Number(data.roofArea);
    const solarIrradiance = data.city === 'Pune' ? 5.2 : data.city === 'Mumbai' ? 4.8 : 5.0;
    const systemSize = Math.min(billNum / 120, areaNum / 100);
    const annualGeneration = systemSize * solarIrradiance * 365 * 0.8;
    const annualSavings = Math.round(annualGeneration * 8);
    const systemCost = Math.round(systemSize * 55000);
    const roiYears = (systemCost / annualSavings).toFixed(1);
    const co2Reduction = Math.round(annualGeneration * 0.82 / 1000);

    return {
      systemSize: systemSize.toFixed(1),
      annualGeneration: Math.round(annualGeneration),
      annualSavings,
      monthlySavings: Math.round(annualSavings / 12),
      systemCost,
      roiYears,
      co2Reduction,
      lifetimeSavings: Math.round(annualSavings * 25),
    };
  };

  const next = () => {
    if (step === 2) {
      setShowResults(true);
      setStep(3);
    } else {
      setStep(step + 1);
    }
  };
  const prev = () => { setShowResults(false); setStep(step - 1); };

  const results = showResults ? calculate() : null;

  const inputClasses = `w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm
                         focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                         transition-all duration-300`;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex border-b border-gray-100">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flex-1 py-4 text-center text-xs font-medium transition-all duration-300 ${
              i <= step ? 'text-primary bg-primary/5' : 'text-gray-custom'
            }`}
          >
            <span className={`inline-flex w-6 h-6 rounded-full items-center justify-center text-xs mb-1 ${
              i <= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-custom'
            }`}>
              {i + 1}
            </span>
            <p className="hidden sm:block mt-1">{s}</p>
          </div>
        ))}
      </div>

      <div className="p-5 sm:p-8 md:p-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-xl font-bold text-dark mb-2">How much is your electricity bill?</h3>
              <p className="text-gray-custom text-sm mb-6">This helps us figure out what system size works best for you.</p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-dark block mb-2">Monthly Bill (₹)</label>
                  <input
                    type="range" min="500" max="50000" step="500"
                    value={data.monthlyBill}
                    onChange={(e) => handleChange('monthlyBill', e.target.value)}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-custom mt-1">
                    <span>₹500</span>
                    <span className="text-2xl font-bold text-gradient">₹{Number(data.monthlyBill).toLocaleString()}</span>
                    <span>₹50,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-xl font-bold text-dark mb-2">Tell us about your roof</h3>
              <p className="text-gray-custom text-sm mb-6">Roof details help optimize panel placement.</p>
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-dark block mb-2">Available Roof Area (sq ft)</label>
                  <input
                    type="number" value={data.roofArea}
                    onChange={(e) => handleChange('roofArea', e.target.value)}
                    className={inputClasses}
                    placeholder="e.g., 500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-dark block mb-2">Roof Type</label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {['flat', 'sloped', 'metal'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleChange('roofType', type)}
                        className={`py-3 rounded-xl border text-sm font-medium transition-all duration-300 capitalize cursor-pointer ${
                          data.roofType === type
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 text-gray-custom hover:border-primary/50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-xl font-bold text-dark mb-2">Where are you located?</h3>
              <p className="text-gray-custom text-sm mb-6">Solar output varies by location.</p>
              <div>
                <label className="text-sm font-medium text-dark block mb-2">City</label>
                <select
                  value={data.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className={inputClasses}
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Other">Other (Maharashtra)</option>
                </select>
              </div>
            </motion.div>
          )}

          {step === 3 && results && (
            <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="mx-auto mb-4 inline-flex"
              >
                  <IconBadge icon={Calculator} size="xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-dark">Your Solar Estimate</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                {[
                  { icon: SolarPanel, label: 'System Size', value: `${results.systemSize} kW`, color: 'primary' },
                  { icon: CurrencyInr, label: 'Monthly Savings', value: `₹${results.monthlySavings.toLocaleString()}`, color: 'secondary' },
                  { icon: CalendarBlank, label: 'ROI Period', value: `${results.roiYears} Years`, color: 'primary' },
                  { icon: Leaf, label: 'CO₂ Saved/Year', value: `${results.co2Reduction} Tons`, color: 'secondary' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="p-5 rounded-2xl bg-gray-50 text-center"
                  >
                    <IconBadge
                      icon={item.icon}
                      size="sm"
                      tone={item.color === 'primary' ? 'primary' : 'secondary'}
                      className="mx-auto mb-3"
                    />
                    <p className="text-2xl font-bold text-dark">{item.value}</p>
                    <p className="text-xs text-gray-custom mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-5 rounded-2xl gradient-primary text-white text-center"
              >
                <p className="text-sm opacity-80">Estimated System Cost</p>
                <p className="text-3xl font-bold my-1">₹{results.systemCost.toLocaleString()}</p>
                <p className="text-sm opacity-80">Lifetime Savings: ₹{results.lifetimeSavings.toLocaleString()}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 0 ? (
            <button
              onClick={prev}
              className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm
                         font-medium text-gray-custom hover:border-primary hover:text-primary
                         transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="text-xs" weight="bold" /> Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              onClick={next}
              className="flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-xl text-sm
                         font-bold hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {step === 2 ? 'Calculate' : 'Next'} <ArrowRight className="text-xs" weight="bold" />
            </button>
          ) : (
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-dark rounded-xl text-sm
                         font-bold hover:shadow-lg transition-all duration-300"
            >
              Get Detailed Quote <ArrowRight className="text-xs" weight="bold" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
