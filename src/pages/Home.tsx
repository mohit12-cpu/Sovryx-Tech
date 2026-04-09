import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Globe, 
  Code, 
  Smartphone, 
  BarChart, 
  Server, 
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'Modern, responsive, and high-performing websites.' },
  { icon: Code, title: 'Software Development', desc: 'Custom solutions designed for efficiency and automation.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Android and cross-platform mobile apps.' },
  { icon: BarChart, title: 'Digital Marketing', desc: 'Powerful strategies to grow your business online.' },
  { icon: Server, title: 'Hosting & Domain', desc: 'Reliable and secure hosting services.' },
  { icon: Lightbulb, title: 'IT Consulting', desc: 'Smart solutions for your business growth.' },
];

const features = [
  'Affordable Pricing',
  'Professional Team',
  'Fast Delivery',
  '24/7 Support',
  'Latest Technology',
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                Innovation Meets Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Smart Technology for <span className="text-primary">Smart Businesses</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                We provide modern IT solutions including website development, software, mobile apps, and digital marketing to help your business grow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/tech/800/600" 
                  alt="Modern Office" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600">We offer a wide range of IT services tailored to meet your business needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://picsum.photos/seed/team/800/800" 
                alt="Our Team" 
                className="rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Why Choose Sovryx Tech?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Sovryx Tech is a growing IT company based in Nepal, focused on delivering innovative, affordable, and scalable digital solutions for businesses and individuals.
              </p>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Pricing Highlights</h2>
            <p className="text-slate-600">Affordable packages for every business size.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic Website', price: '9,999', popular: false },
              { name: 'Business Website', price: '19,999', popular: true },
              { name: 'E-commerce', price: '39,999', popular: false },
            ].map((plan) => (
              <div 
                key={plan.name}
                className={`p-8 rounded-2xl border ${
                  plan.popular ? 'border-primary shadow-2xl scale-105 bg-white relative' : 'border-slate-100 bg-slate-50'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-slate-500 text-sm">NPR</span>
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Responsive Design</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> SEO Optimized</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> 1 Year Support</li>
                </ul>
                <Link to="/pricing" className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                }`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">Ready to grow your business?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today and get started with our modern IT solutions.
          </p>
          <Link to="/contact" className="btn-primary bg-accent hover:bg-orange-600 text-white border-none py-4 px-10 text-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
