import { motion } from "motion/react";
import { BarChart3, Palette, Share2, TrendingUp } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Website & Analytics",
      description: "Custom websites with integrated analytics dashboards for real-time performance tracking and optimization.",
      features: ["Performance Analytics", "Conversion Tracking", "User Behavior Analysis", "ROI Optimization"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Creative Content",
      description: "Compelling visual and written content that resonates with your audience and drives engagement.",
      features: ["Brand Storytelling", "Visual Design", "Video Production", "Copywriting"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic social media campaigns that build communities and drive meaningful conversations.",
      features: ["Community Building", "Content Strategy", "Engagement Analytics", "Influencer Partnerships"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "B2B Scaling Strategies",
      description: "Data-driven growth strategies specifically designed for B2B companies looking to scale rapidly.",
      features: ["Lead Generation", "Sales Funnel Optimization", "Account-Based Marketing", "Growth Hacking"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8 backdrop-blur-sm">
            <span className="text-teal-300 text-sm">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Comprehensive Marketing Solutions
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From strategy to execution, we deliver end-to-end marketing solutions that drive results and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Neon glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-full h-1 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-300 mb-6">
            Ready to transform your marketing strategy?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-xl shadow-2xl shadow-teal-500/25 transition-all duration-300 hover:scale-105">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}