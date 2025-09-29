import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import { 
  Mail, 
  TrendingUp, 
  Users, 
  Target, 
  Sparkles,
  CheckCircle,
  Download,
  Calendar
} from "lucide-react";

export function Newsletter() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Latest trends and data-driven insights to keep you ahead of the competition."
    },
    {
      icon: Target,
      title: "Strategy Tips",
      description: "Actionable marketing strategies from our team of experts."
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Real success stories and lessons learned from our client work."
    }
  ];

  const resources = [
    {
      title: "2024 Marketing Trends Report",
      description: "Comprehensive analysis of emerging marketing trends",
      type: "PDF Guide",
      downloads: "2.3k"
    },
    {
      title: "Social Media ROI Calculator",
      description: "Free tool to measure your social media return on investment",
      type: "Interactive Tool",
      downloads: "1.8k"
    },
    {
      title: "Email Marketing Templates",
      description: "Professional templates for your next campaign",
      type: "Template Pack",
      downloads: "3.1k"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
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
              <Mail className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 text-sm">NextGen Newsletter</span>
            </div>

            <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-teal-200 to-purple-300 bg-clip-text text-transparent">
              Stay Ahead of
              <br />
              <span className="relative">
                the Curve
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Get exclusive marketing insights, industry trends, and proven strategies delivered directly to your inbox. Join 25,000+ marketing professionals who trust NextGen Insights.
            </p>

            {/* Main signup form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-lg mx-auto"
            >
              <Card className="p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                <div className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 h-12 text-lg"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-slate-300">
                    <Checkbox id="terms" className="border-slate-600 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500" />
                    <label htmlFor="terms" className="cursor-pointer">
                      I agree to receive marketing emails and can unsubscribe at any time
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white h-12 text-lg shadow-2xl shadow-teal-500/25 border-0">
                    <Mail className="mr-2 w-5 h-5" />
                    Subscribe Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              What You'll Receive
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every week, get actionable insights that help you grow your business and stay ahead of marketing trends.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4 text-white">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-sm">
              <Download className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Free Resources</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Subscriber Exclusive Downloads
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get instant access to our library of marketing resources, tools, and templates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-300">
                          {resource.type}
                        </span>
                        <span className="text-xs text-slate-400">
                          {resource.downloads} downloads
                        </span>
                      </div>
                      <h3 className="text-lg text-white mb-2 group-hover:text-teal-300 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-slate-400">{resource.description}</p>
                    </div>
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors flex-shrink-0 ml-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              What Subscribers Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The weekly insights from NextGen have transformed how we approach our marketing strategy. Invaluable content!",
                author: "Sarah Chen",
                title: "CMO, TechStart"
              },
              {
                quote: "Best marketing newsletter I've subscribed to. The case studies and practical tips are exactly what I need.",
                author: "Michael Rodriguez",
                title: "Marketing Director, GrowthCorp"
              },
              {
                quote: "NextGen's newsletter consistently delivers actionable insights that have directly improved our ROI.",
                author: "Emily Johnson",
                title: "VP Marketing, ScaleUp"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 text-teal-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.title}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of marketing professionals who rely on NextGen Insights for their growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-md bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-500 h-12"
              />
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white h-12 px-8 shadow-2xl shadow-teal-500/25 border-0">
                Subscribe Free
              </Button>
            </div>
            
            <p className="text-sm text-slate-400 mt-4">
              Free forever. Unsubscribe anytime. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}