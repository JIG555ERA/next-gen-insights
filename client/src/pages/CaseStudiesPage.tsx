import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  MapPin,
  Target,
  Zap
} from "lucide-react";

export function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "TechFlow Analytics",
      subtitle: "From Startup to Market Leader",
      category: "B2B SaaS",
      industry: "Technology",
      duration: "18 months",
      location: "San Francisco, CA",
      description: "Transformed a struggling SaaS startup into a market leader with comprehensive growth strategies, resulting in 340% revenue growth and $2.5M ARR.",
      challenge: "TechFlow was facing declining user engagement, low conversion rates, and intense competition in the analytics space. They needed a complete marketing overhaul to establish market presence.",
      solution: "We implemented a multi-channel growth strategy including product positioning, content marketing, lead generation optimization, and strategic partnerships.",
      image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbW9kZXJufGVufDF8fHx8MTc1OTEyNDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { icon: TrendingUp, value: "340%", label: "Revenue Growth", color: "text-blue-400" },
        { icon: Users, value: "250K", label: "New Users", color: "text-green-400" },
        { icon: DollarSign, value: "$2.5M", label: "ARR Achieved", color: "text-purple-400" },
        { icon: Target, value: "85%", label: "Lead Quality Increase", color: "text-teal-400" }
      ],
      services: ["B2B Scaling", "Content Marketing", "Analytics"],
      gradient: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 2,
      title: "GrowthSpace",
      subtitle: "E-commerce Scaling Success",
      category: "E-commerce",
      industry: "Retail",
      duration: "24 months",
      location: "New York, NY",
      description: "Scaled an e-commerce brand from startup to 8-figure revenue through innovative digital marketing strategies and conversion optimization.",
      challenge: "GrowthSpace needed to compete with established e-commerce giants while building brand recognition and customer loyalty in a crowded marketplace.",
      solution: "We developed a comprehensive omnichannel strategy focusing on social commerce, influencer partnerships, and data-driven customer acquisition.",
      image: "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3MlMjBjaGFydHxlbnwxfHx8fDE3NTkxMjQ1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { icon: TrendingUp, value: "180%", label: "ROAS Increase", color: "text-green-400" },
        { icon: Users, value: "500K", label: "Customer Base", color: "text-blue-400" },
        { icon: DollarSign, value: "$12M", label: "Annual Revenue", color: "text-purple-400" },
        { icon: Target, value: "65%", label: "Conversion Rate Boost", color: "text-orange-400" }
      ],
      services: ["Social Media", "E-commerce Optimization", "Paid Advertising"],
      gradient: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      id: 3,
      title: "InnovateHub",
      subtitle: "Creative Agency Transformation",
      category: "Creative Agency",
      industry: "Design Services",
      duration: "12 months",
      location: "Austin, TX",
      description: "Revolutionized a creative agency's digital presence and client acquisition process, resulting in 220% increase in qualified leads.",
      challenge: "InnovateHub struggled with inconsistent lead flow, low-quality prospects, and difficulty showcasing their creative capabilities online.",
      solution: "We reimagined their brand identity, built a showcase-focused website, and implemented an inbound marketing strategy with portfolio-driven content.",
      image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTA5NzYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { icon: TrendingUp, value: "220%", label: "Lead Generation", color: "text-teal-400" },
        { icon: Users, value: "95%", label: "Client Retention", color: "text-green-400" },
        { icon: DollarSign, value: "400%", label: "Pipeline Growth", color: "text-blue-400" },
        { icon: Target, value: "75%", label: "Project Success Rate", color: "text-purple-400" }
      ],
      services: ["Website Development", "Creative Content", "Lead Generation"],
      gradient: "from-green-500 to-emerald-500",
      featured: false
    }
  ];

  const additionalCases = [
    {
      title: "HealthTech Solutions",
      category: "Healthcare",
      growth: "290%",
      duration: "15 months",
      description: "Digital transformation for healthcare technology company"
    },
    {
      title: "EduPlatform Pro",
      category: "Education",
      growth: "450%",
      duration: "20 months",
      description: "Online learning platform scaling and user acquisition"
    },
    {
      title: "FinanceForward",
      category: "FinTech",
      growth: "320%",
      duration: "18 months",
      description: "Financial services marketing and compliance-focused growth"
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
              Success
              <br />
              <span className="relative">
                Stories
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Real results from real clients. Discover how we've helped businesses across industries achieve extraordinary growth and market leadership.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline" className="border-teal-500/30 text-teal-300">500+ Projects Completed</Badge>
              <Badge variant="outline" className="border-purple-500/30 text-purple-300">150% Average ROI</Badge>
              <Badge variant="outline" className="border-blue-500/30 text-blue-300">98% Client Satisfaction</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Card className="overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                    <div className="relative h-64 lg:h-80">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-20`}></div>
                      
                      {study.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-teal-500 text-white">Featured Case</Badge>
                        </div>
                      )}

                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                          {study.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {study.metrics.map((metric, metricIndex) => (
                          <div key={metric.label} className="text-center">
                            <div className={`text-2xl mb-1 ${metric.color}`}>{metric.value}</div>
                            <div className="text-xs text-slate-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {study.industry}
                        </Badge>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">{study.duration}</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                        {study.title}
                      </h2>
                      
                      <p className="text-xl text-teal-400 mb-4">{study.subtitle}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {study.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {study.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed">
                      {study.description}
                    </p>

                    <div>
                      <h3 className="text-white mb-3">Challenge</h3>
                      <p className="text-slate-400 mb-4">{study.challenge}</p>
                      
                      <h3 className="text-white mb-3">Solution</h3>
                      <p className="text-slate-400 mb-6">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-white mb-3">Services Used:</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.services.map((service) => (
                          <Badge key={service} variant="outline" className="border-teal-500/30 text-teal-300">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className={`bg-gradient-to-r ${study.gradient} hover:opacity-90 text-white border-0 group`}>
                      View Full Case Study
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Cases */}
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
              More Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A selection of additional projects that showcase our expertise across different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="text-center">
                    <div className="text-4xl mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                      +{caseStudy.growth}
                    </div>
                    <h3 className="text-xl text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <Badge variant="outline" className="border-slate-600 text-slate-400 mb-3">
                      {caseStudy.category}
                    </Badge>
                    <p className="text-slate-400 text-sm mb-4">{caseStudy.description}</p>
                    <div className="text-xs text-slate-500">{caseStudy.duration}</div>
                  </div>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join our portfolio of successful clients and start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-2xl shadow-teal-500/25 border-0">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg">
                Download Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}