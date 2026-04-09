import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Why Every Business Needs a Website in Nepal',
    excerpt: 'In today’s digital age, having an online presence is no longer optional. Learn how a website can transform your local business.',
    image: 'https://picsum.photos/seed/blog1/800/500',
    date: 'April 5, 2024',
    author: 'Mohit Shrestha',
    category: 'Business'
  },
  {
    id: 2,
    title: 'Top Digital Marketing Tips for 2024',
    excerpt: 'Stay ahead of the competition with these powerful digital marketing strategies tailored for the Nepali market.',
    image: 'https://picsum.photos/seed/blog2/800/500',
    date: 'March 28, 2024',
    author: 'Sovryx Team',
    category: 'Marketing'
  },
  {
    id: 3,
    title: 'How SEO Helps Your Business Grow',
    excerpt: 'Search Engine Optimization is the key to organic growth. Discover how to rank higher on Google and attract more customers.',
    image: 'https://picsum.photos/seed/blog3/800/500',
    date: 'March 15, 2024',
    author: 'Mohit Shrestha',
    category: 'SEO'
  },
  {
    id: 4,
    title: 'The Future of Mobile Apps in Nepal',
    excerpt: 'Mobile usage is skyrocketing. Explore why investing in a mobile app might be the best move for your business this year.',
    image: 'https://picsum.photos/seed/blog4/800/500',
    date: 'March 02, 2024',
    author: 'Sovryx Team',
    category: 'Technology'
  }
];

export default function Blog() {
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
            Insights & <span className="text-primary">Articles</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in technology, marketing, and business growth.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3 space-y-12">
              {posts.map((post, idx) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-[2.5rem] mb-8 relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-primary uppercase tracking-widest">
                      {post.category}
                    </div>
                  </Link>
                  <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-accent" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Read Full Article <ArrowRight size={20} />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Search */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Search Blog</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
                <ul className="space-y-4">
                  {['Technology', 'Business', 'Marketing', 'SEO', 'Software'].map((cat) => (
                    <li key={cat}>
                      <a href="#" className="flex justify-between items-center text-slate-600 hover:text-primary transition-colors group">
                        <span className="font-medium">{cat}</span>
                        <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">12</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Newsletter</h3>
                <p className="text-blue-100 text-sm mb-8 relative z-10">Subscribe to get the latest tech news and updates in your inbox.</p>
                <form className="space-y-4 relative z-10">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-blue-200 text-white"
                  />
                  <button className="w-full py-4 bg-accent text-white font-bold rounded-2xl hover:bg-orange-600 transition-colors shadow-lg shadow-black/10">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
