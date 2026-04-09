import { motion } from 'motion/react';
import { Target, Eye, Users, Award, Linkedin, Twitter, Rocket } from 'lucide-react';

export default function About() {
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
            About <span className="text-primary">Sovryx Tech</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A modern IT company providing complete digital solutions to help businesses grow using technology, innovation, and smart strategies.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 text-primary">Our Story</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Sovryx Tech was founded with a simple goal: to make high-quality IT services accessible and affordable for businesses in Nepal. As the digital landscape evolves, we strive to be the bridge between traditional businesses and modern technology.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our journey started with a small team of passionate developers and has grown into a full-service IT agency. We believe in building long-term relationships with our clients by delivering value and excellence in every project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/office/800/600" 
                alt="Office" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="text-4xl font-bold block">5+</span>
                <span className="text-sm font-medium">Years of Combined Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver affordable, high-quality IT solutions that help businesses succeed in the digital world. We focus on innovation, scalability, and client satisfaction.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a leading IT company in Nepal and expand globally, setting new standards in digital transformation and customer-centric technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Meet Our Founder</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-80 md:h-auto">
              <img 
                src="https://picsum.photos/seed/founder/600/800" 
                alt="Mohit Shrestha" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 p-12 text-white">
              <h3 className="text-3xl font-bold mb-2">Mohit Shrestha</h3>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-6 block">Founder & CEO</span>
              <p className="text-slate-400 leading-relaxed mb-8">
                A passionate IT student and entrepreneur focused on building innovative digital solutions. Mohit's vision drives Sovryx Tech to deliver excellence and help local businesses thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Client-Focused', desc: 'We prioritize your needs and goals in every project we undertake.' },
              { icon: Award, title: 'Reliable Systems', desc: 'We build secure and scalable systems that you can depend on.' },
              { icon: Rocket, title: 'Affordable Services', desc: 'High-quality IT solutions that fit your budget perfectly.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mx-auto mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

