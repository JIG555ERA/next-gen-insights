import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { 
  Calendar, 
  Mail, 
  Phone, 
  MessageCircle,
  MapPin,
  Clock,
  Users,
  Target,
  Zap,
  CheckCircle
} from "lucide-react";

export function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@nextgeninsights.com",
      description: "Send us an email anytime",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Chat with our support team",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      description: "Visit our headquarters",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Free 30-minute strategy consultation",
    "Custom marketing audit and recommendations",
    "Growth roadmap tailored to your business",
    "No obligation, no pressure approach",
    "Expert insights and industry best practices",
    "Clear timeline and next steps"
  ];

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most projects can begin within 1-2 weeks after our initial consultation and strategy alignment."
    },
    {
      question: "What's included in the free consultation?",
      answer: "We'll analyze your current marketing, identify opportunities, and provide actionable recommendations - no strings attached."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with companies of all sizes, from startups to Fortune 500 companies."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have experience across many industries including SaaS, e-commerce, healthcare, education, and professional services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8 backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 text-sm">Book Your Free Consultation</span>
            </div>

            <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-teal-200 to-purple-300 bg-clip-text text-transparent">
              Let's Build Your
              <br />
              <span className="relative">
                Future Together
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Ready to transform your marketing strategy? Schedule a free consultation and discover how we can accelerate your growth with data-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-1">{method.title}</h3>
                  <p className="text-teal-400 mb-2">{method.value}</p>
                  <p className="text-slate-400 text-sm">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl mb-6 text-white">Start Your Journey</h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">First Name *</label>
                        <Input 
                          placeholder="John"
                          className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Last Name *</label>
                        <Input 
                          placeholder="Doe"
                          className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">Work Email *</label>
                      <Input 
                        type="email"
                        placeholder="john@company.com"
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Phone Number</label>
                        <Input 
                          placeholder="+1 (555) 123-4567"
                          className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Company *</label>
                        <Input 
                          placeholder="Your Company"
                          className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Company Size</label>
                        <Select>
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white focus:border-teal-500">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-1000">201-1000 employees</SelectItem>
                            <SelectItem value="1000+">1000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Budget Range</label>
                        <Select>
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white focus:border-teal-500">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k+">$100K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-300 mb-2">Services Interested In</label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Website & Analytics", "Creative Content", "Social Media", "B2B Scaling", "Strategy Consulting", "Other"].map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox id={service} className="border-slate-600 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500" />
                            <label htmlFor={service} className="text-sm text-slate-300 cursor-pointer">{service}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-slate-300 mb-2">Project Details *</label>
                      <Textarea 
                        placeholder="Tell us about your project goals, current challenges, and what success looks like for your business..."
                        rows={4}
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="consent" className="border-slate-600 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500" />
                      <label htmlFor="consent" className="text-sm text-slate-300 cursor-pointer">
                        I agree to receive marketing communications and understand I can unsubscribe at any time
                      </label>
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
              </Card>
            </motion.div>

            {/* Info & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* What You'll Get */}
              <Card className="p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/30 backdrop-blur-sm">
                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  What You'll Get
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Response Time */}
              <Card className="p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/30 backdrop-blur-sm">
                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  Response Time
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Email Response</span>
                    <span className="text-purple-400">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Consultation Booking</span>
                    <span className="text-purple-400">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Project Kickoff</span>
                    <span className="text-purple-400">1-2 weeks</span>
                  </div>
                </div>
              </Card>

              {/* Team Info */}
              <Card className="p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/30 backdrop-blur-sm">
                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Your Dedicated Team
                </h3>
                <p className="text-slate-300 mb-4">
                  Every project gets a dedicated team including a strategist, creative director, and project manager to ensure your success.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-teal-500 to-blue-600"></div>
                    <div className="text-xs text-slate-400">Strategist</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-600"></div>
                    <div className="text-xs text-slate-400">Creative</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-600"></div>
                    <div className="text-xs text-slate-400">Manager</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are some common questions about working with NextGen Insights.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                  <h3 className="text-lg text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
