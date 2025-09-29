import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Users, 
  Award, 
  Globe,
  Heart,
  Lightbulb,
  Shield
} from "lucide-react";

export function AboutPage() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      description: "Former VP of Marketing at Fortune 500 companies with 15+ years of experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Kim",
      role: "Head of Strategy",
      description: "Data scientist turned marketing strategist, specializing in growth analytics.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      description: "Award-winning designer with expertise in brand identity and digital experiences.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear communication, honest reporting, and ethical practices in everything we do.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international best practices and insights to help you compete globally.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const milestones = [
    { year: "2019", event: "NextGen Insights Founded", description: "Started with a vision to revolutionize marketing" },
    { year: "2020", event: "First 100 Clients", description: "Reached our first major milestone during the pandemic" },
    { year: "2021", event: "Series A Funding", description: "Secured funding to expand our team and capabilities" },
    { year: "2022", event: "International Expansion", description: "Opened offices in London and Singapore" },
    { year: "2023", event: "AI Integration", description: "Launched our proprietary AI-powered analytics platform" },
    { year: "2024", event: "500+ Success Stories", description: "Celebrating continuous growth and client success" }
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
              About NextGen
              <br />
              <span className="relative">
                Insights
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              We're not just another marketing agency. We're the architects of tomorrow's marketing strategies, combining human creativity with AI-powered insights to deliver unprecedented results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl mb-4 text-white">Our Mission</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To empower businesses with data-driven marketing strategies that not only meet today's challenges but anticipate tomorrow's opportunities. We believe every company deserves access to enterprise-level marketing expertise.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl mb-4 text-white">Our Vision</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To become the global leader in future-ready marketing solutions, setting new standards for innovation, transparency, and client success in the digital marketing industry.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-white">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Leadership
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experienced professionals who bring together decades of marketing expertise and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 p-1">
                      <div className="w-full h-full rounded-full bg-slate-300"></div>
                    </div>
                    <h3 className="text-xl text-white mb-1">{member.name}</h3>
                    <p className="text-teal-400 text-sm mb-3">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones that have shaped NextGen Insights into the company we are today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-teal-500 to-purple-500"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                      <div className="text-2xl text-teal-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl text-white mb-2">{milestone.event}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: TrendingUp, value: "150%", label: "Average ROI Increase" },
              { icon: Award, value: "25+", label: "Industry Awards" },
              { icon: Globe, value: "30+", label: "Countries Served" }
            ].map((stat, index) => (
              <Card key={stat.label} className="p-8 text-center bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 backdrop-blur-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl mb-2 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}