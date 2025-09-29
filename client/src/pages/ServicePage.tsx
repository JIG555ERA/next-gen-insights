import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  BarChart3, 
  Palette, 
  Share2, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Users,
  Globe
} from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: BarChart3,
      title: "Website & Analytics",
      description: "Custom websites with integrated analytics dashboards for real-time performance tracking and optimization.",
      features: [
        "Custom Website Development",
        "Performance Analytics Dashboard",
        "Conversion Rate Optimization",
        "User Experience Analysis",
        "A/B Testing Framework",
        "Real-time Reporting"
      ],
      technologies: ["React", "Next.js", "Google Analytics", "Hotjar", "Optimizely"],
      pricing: "Starting at $5,000",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Creative Content",
      description: "Compelling visual and written content that resonates with your audience and drives engagement.",
      features: [
        "Brand Strategy & Identity",
        "Video Production",
        "Graphic Design",
        "Copywriting & Content",
        "Photography",
        "Social Media Assets"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Final Cut Pro", "Canva"],
      pricing: "Starting at $3,000",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic social media campaigns that build communities and drive meaningful conversations.",
      features: [
        "Social Media Strategy",
        "Content Calendar Planning",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Advertising",
        "Performance Analytics"
      ],
      technologies: ["Hootsuite", "Buffer", "Sprout Social", "Facebook Ads", "Instagram"],
      pricing: "Starting at $2,500",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "B2B Scaling Strategies",
      description: "Data-driven growth strategies specifically designed for B2B companies looking to scale rapidly.",
      features: [
        "Lead Generation Systems",
        "Sales Funnel Optimization",
        "Account-Based Marketing",
        "Marketing Automation",
        "Growth Hacking",
        "Revenue Operations"
      ],
      technologies: ["HubSpot", "Salesforce", "Marketo", "LinkedIn Ads", "Outreach"],
      pricing: "Starting at $7,500",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and competitive landscape to craft a winning strategy.",
      icon: Target
    },
    {
      step: "02",
      title: "Planning & Design",
      description: "Our team creates detailed project plans and designs that align with your brand and objectives.",
      icon: Palette
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, using cutting-edge tools and proven methodologies.",
      icon: Zap
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring, testing, and optimization to ensure maximum ROI and sustainable growth.",
      icon: TrendingUp
    }
  ];

  const addOns = [
    {
      title: "Advanced Analytics Suite",
      description: "Comprehensive reporting with predictive insights",
      price: "+$1,500/month"
    },
    {
      title: "24/7 Support & Monitoring",
      description: "Round-the-clock campaign monitoring and support",
      price: "+$2,000/month"
    },
    {
      title: "Custom Integration",
      description: "Seamless integration with your existing tools",
      price: "+$3,000 one-time"
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
            <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-teal-200 to-purple-300 bg-clip-text text-transparent">
              Our
              <br />
              <span className="relative">
                Services
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Comprehensive marketing solutions designed to accelerate your growth and maximize your ROI. From strategy to execution, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white mb-1">{service.title}</h3>
                      <p className="text-teal-400">{service.pricing}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 group`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl text-center">
                  <div className="text-6xl text-teal-400/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
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
              Premium Add-ons
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enhance your package with these premium services for even better results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl text-center hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg text-white mb-3">{addon.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{addon.description}</p>
                  <div className="text-teal-400">{addon.price}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss your project and create a custom solution that fits your needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-2xl shadow-teal-500/25 border-0">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg">
                View Pricing Details
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}