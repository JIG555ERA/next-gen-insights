import { motion } from "motion/react";
import { Target, Zap, TrendingUp } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Data-driven strategies that reach your ideal customers with surgical precision."
    },
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description: "Rapid deployment of campaigns that deliver measurable results in record time."
    },
    {
      icon: TrendingUp,
      title: "Exponential Growth",
      description: "Scalable solutions designed to accelerate your business growth trajectory."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-sm">
              <span className="text-purple-300 text-sm">About NextGen Insights</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Redefining Marketing Excellence
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              At NextGen Insights, we blend cutting-edge technology with strategic expertise to deliver marketing solutions that don't just meet today's challenges—they anticipate tomorrow's opportunities.
            </p>
            
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Our mission is to empower businesses with data-driven insights, innovative strategies, and future-ready marketing approaches that drive sustainable growth in an ever-evolving digital landscape.
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-4xl mb-2 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">500+</div>
                      <div className="text-slate-400">Successful Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">150%</div>
                      <div className="text-slate-400">Average ROI Increase</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">98%</div>
                      <div className="text-slate-400">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">5+</div>
                      <div className="text-slate-400">Years of Excellence</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}