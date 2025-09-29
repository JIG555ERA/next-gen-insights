import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Calendar, Mail, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm">Book Your Consultation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Let's Build Your Future
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your marketing strategy? Schedule a free consultation and discover how we can accelerate your growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl mb-6 text-white">Start Your Journey</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">First Name</label>
                      <Input 
                        placeholder="John"
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">Last Name</label>
                      <Input 
                        placeholder="Doe"
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Email Address</label>
                    <Input 
                      type="email"
                      placeholder="john@company.com"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Company</label>
                    <Input 
                      placeholder="Your Company"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your project goals and challenges..."
                      rows={4}
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-6 text-lg shadow-2xl shadow-teal-500/25 border-0"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Free Consultation
                  </Button>
                </form>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-6 text-white">Get In Touch</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Have questions or ready to get started? We're here to help you navigate the future of marketing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white">Email</div>
                  <div className="text-slate-400">hello@nextgeninsights.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white">Phone</div>
                  <div className="text-slate-400">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white">Live Chat</div>
                  <div className="text-slate-400">Available 24/7</div>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 backdrop-blur-sm">
              <h4 className="text-xl text-white mb-4">What You'll Get:</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Free 30-minute strategy consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Custom marketing audit and recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Growth roadmap tailored to your business</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>No obligation, no pressure</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}