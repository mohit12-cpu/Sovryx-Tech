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
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Website Development',
    desc: 'We create modern, responsive, and high-performing websites for businesses.',
    features: ['Business websites', 'E-commerce websites', 'Portfolio websites', 'Custom Web Apps'],
    color: 'bg-blue-500'
  },
  {
    id: 'software',
    icon: Code,
    title: 'Software Development',
    desc: 'Custom software solutions designed for efficiency and automation.',
    features: ['ERP systems', 'Billing & inventory systems', 'Management systems', 'Custom APIs'],
    color: 'bg-purple-500'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'We build Android and cross-platform mobile apps.',
    features: ['Android apps', 'Business apps', 'UI/UX design', 'App Maintenance'],
    color: 'bg-orange-500'
  },
  {
    id: 'marketing',
    icon: BarChart,
    title: 'Digital Marketing',
    desc: 'Grow your business online with powerful marketing strategies.',
    features: ['SEO', 'Social media marketing', 'Ads management', 'Content Strategy'],
    color: 'bg-green-500'
  },
  {
    id: 'hosting',
    icon: Server,
    title: 'Hosting & Domain',
    desc: 'Reliable and secure hosting services.',
    features: ['Domain registration', 'Web hosting', 'Email hosting', 'SSL Certificates'],
    color: 'bg-red-500'
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'IT Consulting',
    desc: 'Smart solutions for your business growth.',
    features: ['Business automation', 'Digital transformation', 'Strategy planning', 'Security Audit'],
    color: 'bg-yellow-500'
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to empower your business and drive digital success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col h-full bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all p-8 group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-3 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 size={16} className="text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group/btn"
                >
                  Get Quote <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-slate-600">Our streamlined process ensures quality and timely delivery.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your needs and goals.' },
              { step: '02', title: 'Planning', desc: 'We create a roadmap and strategy.' },
              { step: '03', title: 'Development', desc: 'We build your solution with care.' },
              { step: '04', title: 'Delivery', desc: 'We launch and provide support.' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-display font-black text-slate-200 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px bg-slate-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 pointer-events-none"></div>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-8 relative z-10">
              Need a custom solution?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Tell us about your project and we'll help you build something amazing.
            </p>
            <Link to="/contact" className="btn-primary relative z-10 py-4 px-12 text-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
