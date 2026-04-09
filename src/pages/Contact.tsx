import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

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
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have a question or want to start a project? We're here to help you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                      <p className="text-slate-600 text-sm">+977 9762948720</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                      <p className="text-slate-600 text-sm">sovryx.tech@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                      <p className="text-slate-600 text-sm">Biratnagar-1, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                      <p className="text-slate-600 text-sm">Sun - Fri: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-[2rem] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Quick Support</h3>
                <p className="text-slate-400 text-sm mb-6 relative z-10">Need immediate assistance? Chat with us on WhatsApp.</p>
                <a 
                  href="https://wa.me/9762948720" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors relative z-10"
                >
                  <MessageCircle size={20} />
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+977 9800000000"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                        <option>Website Development</option>
                        <option>Software Solution</option>
                        <option>Mobile App</option>
                        <option>Digital Marketing</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Tell us about your project..."
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-primary/20"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57133.5645603714!2d87.2343249757657!3d26.45410712860768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744704331cc5%3A0x6d9a85145c273f08!2sBiratnagar!5e0!3m2!1sen!2snp!4v1712635000000!5m2!1sen!2snp" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sovryx Tech Location"
        ></iframe>
      </section>
    </div>
  );
}
