import { motion } from "motion/react";
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles 
} from "lucide-react";

export function Footer() {
  const footerLinks = {
    Services: [
      "Website & Analytics",
      "Creative Content",
      "Social Media Management",
      "B2B Scaling Strategies"
    ],
    Company: [
      "About Us",
      "Case Studies",
      "Careers",
      "Blog"
    ],
    Resources: [
      "Marketing Guides",
      "Industry Reports",
      "Webinars",
      "Tools & Templates"
    ],
    Support: [
      "Contact Us",
      "Help Center",
      "Privacy Policy",
      "Terms of Service"
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl text-white">NextGen Insights</span>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Empowering businesses with future-ready marketing solutions that drive growth, innovation, and sustainable success in the digital age.
                </p>

                {/* Contact info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Mail className="w-4 h-4" />
                    <span>hello@nextgeninsights.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white mb-6">{title}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl text-white mb-2">Stay ahead of the curve</h3>
                <p className="text-slate-400">Get the latest marketing insights and strategies delivered to your inbox.</p>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-80 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder:text-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-105 flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-6 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="text-slate-400 text-sm">
                © 2024 NextGen Insights. All rights reserved.
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-600 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}