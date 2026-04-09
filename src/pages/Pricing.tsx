import { motion } from 'motion/react';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const websitePricing = [
  { name: 'Basic', price: '9,999', popular: false, features: ['1 Page Design', 'Responsive Layout', 'Basic SEO', '1 Year Support', 'Domain & Hosting (1yr)'] },
  { name: 'Business', price: '19,999', popular: true, features: ['Up to 5 Pages', 'Premium Design', 'Advanced SEO', 'Social Media Integration', 'Domain & Hosting (1yr)', 'Business Emails'] },
  { name: 'E-commerce', price: '39,999', popular: false, features: ['Unlimited Products', 'Payment Gateway', 'Inventory Management', 'Admin Dashboard', 'Mobile Responsive', 'High Security'] },
];

const hostingPricing = [
  { name: 'Starter', price: '2,500', period: '/year', features: ['1 Website', '2GB SSD Storage', '10GB Bandwidth', 'Free SSL', '2 Business Emails'] },
  { name: 'Business', price: '4,500', period: '/year', features: ['3 Websites', '10GB SSD Storage', '50GB Bandwidth', 'Free SSL', '10 Business Emails'] },
  { name: 'Pro', price: '8,000', period: '/year', features: ['Unlimited Websites', '50GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL', 'Unlimited Emails'] },
];

const marketingPricing = [
  { name: 'Starter', price: '7,000', period: '/month', features: ['Social Media Mgmt', '2 Posts/Week', 'Basic SEO', 'Monthly Report'] },
  { name: 'Business', price: '12,000', period: '/month', features: ['Social Media Mgmt', '4 Posts/Week', 'Advanced SEO', 'Ad Campaign Mgmt', 'Monthly Report'] },
  { name: 'Pro', price: '20,000', period: '/month', features: ['Full Digital Marketing', 'Daily Posts', 'Premium SEO', 'Lead Generation', 'Weekly Reports'] },
];

export default function Pricing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Simple & <span className="text-primary">Transparent</span> Pricing
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business growth. No hidden costs.
          </p>
        </div>
      </section>

      {/* Website Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Website Development</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {websitePricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} currency="NPR" />
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Web Hosting Plans</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {hostingPricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} currency="NPR" />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Digital Marketing</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {marketingPricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} currency="NPR" />
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Website & Software Maintenance</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Keep your digital assets running smoothly with our professional maintenance services. We handle updates, security, and performance optimization.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-800 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Website</h4>
                  <div className="text-accent font-bold text-2xl mb-4">NPR 1,500<span className="text-sm font-normal text-slate-400">/month</span></div>
                </div>
                <div className="p-6 bg-slate-800 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Software</h4>
                  <div className="text-accent font-bold text-2xl mb-4">NPR 3,000<span className="text-sm font-normal text-slate-400">/month</span></div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {[
                  { q: 'Are there any hidden costs?', a: 'No, all our pricing is transparent and discussed upfront.' },
                  { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade or downgrade your plan at any time.' },
                  { q: 'Do you offer custom packages?', a: 'Absolutely! Contact us for a tailored solution for your business.' },
                ].map((faq, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 font-bold mb-2 text-primary">
                      <HelpCircle size={18} />
                      {faq.q}
                    </div>
                    <p className="text-slate-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PricingCard({ plan, currency }: { plan: any, currency: string, key?: any }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-8 rounded-3xl border flex flex-col h-full ${
        plan.popular ? 'border-primary shadow-2xl scale-105 bg-white relative z-10' : 'border-slate-100 bg-white'
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900 mb-4">{plan.name}</h3>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-slate-500 text-sm font-medium">{currency}</span>
        <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
        {plan.period && <span className="text-slate-500 text-sm">{plan.period}</span>}
      </div>
      <ul className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        to="/contact" 
        className={`block text-center py-4 rounded-xl font-bold transition-all ${
          plan.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-slate-50 text-slate-900 hover:bg-primary hover:text-white'
        }`}
      >
        Choose Plan
      </Link>
    </motion.div>
  );
}
