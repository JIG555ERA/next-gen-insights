import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "TechFlow Analytics",
      category: "B2B SaaS",
      description: "Transformed a struggling SaaS startup into a market leader with data-driven growth strategies.",
      image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbW9kZXJufGVufDF8fHx8MTc1OTEyNDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { icon: TrendingUp, value: "340%", label: "Revenue Growth" },
        { icon: Users, value: "250K", label: "New Users" },
        { icon: DollarSign, value: "$2.5M", label: "ARR Achieved" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "GrowthSpace",
      category: "E-commerce",
      description: "Scaled an e-commerce brand from startup to 8-figure revenue with innovative marketing strategies.",
      image: "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3MlMjBjaGFydHxlbnwxfHx8fDE3NTkxMjQ1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { icon: TrendingUp, value: "180%", label: "ROAS Increase" },
        { icon: Users, value: "500K", label: "Customer Base" },
        { icon: DollarSign, value: "$12M", label: "Annual Revenue" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "InnovateHub",
      category: "Creative Agency",
      description: "Revolutionized a creative agency's digital presence and client acquisition process.",
      image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTA5NzYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { icon: TrendingUp, value: "220%", label: "Lead Generation" },
        { icon: Users, value: "95%", label: "Client Retention" },
        { icon: DollarSign, value: "400%", label: "Pipeline Growth" }
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-sm">
            <span className="text-purple-300 text-sm">Success Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Proven Results That Speak
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve extraordinary growth and market leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-20`}></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs bg-black/50 text-white rounded-full backdrop-blur-sm">
                      {study.category}
                    </span>
                  </div>

                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {study.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metric.label} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                          <metric.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white">{metric.value}</div>
                          <div className="text-xs text-slate-400">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-full h-1 bg-gradient-to-r ${study.gradient} rounded-full`}></div>
                  </div>
                </div>

                {/* Neon glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}></div>
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
            Ready to become our next success story?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}