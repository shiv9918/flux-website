import { Target, Lightbulb, Users, Trophy, Microscope , Flag } from "lucide-react";
import { motion } from "framer-motion";

export default function FluxObjectives() {
  const objectives = [
    {
      icon: <Microscope className="w-7 h-7 text-primary" />,
      title: "Research-Driven Culture",
      desc: "Foster innovation and academic excellence among students and faculty through cutting-edge research initiatives.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Trophy className="w-7 h-7 text-primary" />,
      title: "Tech Events & Competitions",
      desc: "Organize hackathons, conferences, paper presentations, and tech conclaves that push boundaries.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Users className="w-7 h-7 text-primary" />,
      title: "Industry Collaboration",
      desc: "Bridge academia with industry experts, researchers, and startups for real-world impact.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-primary" />,
      title: "Project Incubation Hub",
      desc: "Create opportunities for interdisciplinary learning, innovation, and problem-solving initiatives.",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: <Target className="w-7 h-7 text-primary" />,
      title: "Innovation Showcase",
      desc: "Provide platforms for demonstrating breakthrough ideas through competitions and symposiums.",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },

    {
      icon: <Flag className="w-7 h-7 text-primary" />,
      title: "Empower Future Leaders",
      desc: "Foster leadership qualities through mentorship and opportunities that inspire students.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="container-max relative">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Subtitle with animated accent */}
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="w-8 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Our Mission
            </span>
            <motion.div
              className="w-8 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>

          <motion.h2
            className="headline text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            FLUX <span className="text-primary">OBJECTIVES</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Driving innovation, fostering collaboration, and shaping the future
            of technology through excellence
          </motion.p>
        </motion.div>

        {/* Enhanced Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {objectives.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 h-full shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30">
                {/* Icon with enhanced effects */}
                <motion.div
                  className="relative mb-4"
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/15 transition-colors duration-300">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Enhanced typography */}
                <motion.h3
                  className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>

                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Animated bottom accent */}
                <motion.div className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    className="w-1 h-1 bg-primary/40 rounded-full"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-border/50"
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-sm text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span>Building tomorrow's technology leaders, today</span>
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
