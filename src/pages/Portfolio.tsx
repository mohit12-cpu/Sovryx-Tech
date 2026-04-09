import { motion } from 'motion/react';
import { ExternalLink, Tag } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    type: 'Website Development',
    desc: 'A full-featured online store with payment integration and inventory management.',
    image: 'https://picsum.photos/seed/shop/800/600',
    client: 'Local Retailer'
  },
  {
    id: 2,
    title: 'School Management System',
    type: 'Software Development',
    desc: 'Custom ERP solution for managing students, staff, and finances.',
    image: 'https://picsum.photos/seed/school/800/600',
    client: 'Private Academy'
  },
  {
    id: 3,
    title: 'Corporate Website',
    type: 'Website Development',
    desc: 'Professional multi-page website for a leading financial firm.',
    image: 'https://picsum.photos/seed/corp/800/600',
    client: 'Finance Group'
  },
  {
    id: 4,
    title: 'Delivery App',
    type: 'Mobile App Development',
    desc: 'Real-time tracking and order management app for logistics.',
    image: 'https://picsum.photos/seed/app/800/600',
    client: 'Logistics Co.'
  },
  {
    id: 5,
    title: 'Clinic Management',
    type: 'Software Development',
    desc: 'Patient records and appointment scheduling system.',
    image: 'https://picsum.photos/seed/clinic/800/600',
    client: 'Health Center'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Our <span className="text-primary">Portfolio</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we help businesses succeed with modern technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-primary p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                    <Tag size={14} />
                    {project.type}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-400">Client: {project.client}</span>
                    <button className="text-primary font-bold text-sm hover:underline">View Case Study</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projects Done', value: '50+' },
              { label: 'Happy Clients', value: '40+' },
              { label: 'Team Members', value: '10+' },
              { label: 'Years Experience', value: '5+' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl lg:text-5xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Have a project in mind?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Let's work together to build something extraordinary for your business.
          </p>
          <button className="btn-primary py-4 px-12 text-lg">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
