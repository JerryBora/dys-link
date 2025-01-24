import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/JobCard';

const jobs = [
  { 
    title: "Data Infiltrator", 
    description: "Breach corporate networks and extract critical intelligence.",
    difficulty: "High Risk",
    reward: "₿ 2.5"
  },
  { 
    title: "Cyber Mercenary", 
    description: "Execute high-stakes missions in the digital underworld.",
    difficulty: "Extreme",
    reward: "₿ 4.8" 
  },
  { 
    title: "Neural Network Hacker", 
    description: "Manipulate AI systems and exploit system vulnerabilities.",
    difficulty: "Critical",
    reward: "₿ 3.2"
  },
  { 
    title: "Quantum Cryptographer", 
    description: "Break next-gen encryption protocols.",
    difficulty: "Specialized",
    reward: "₿ 5.1"
  }
];

const CyberpunkHomepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900/20 p-8 relative overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 1}s`
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYwMGZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')]" />

      {/* Animated scanlines */}
      <div className="fixed inset-0 pointer-events-none z-20 opacity-15 mix-blend-overlay">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(255,0,255,0.1)_50%)] bg-[size:100%_4px] animate-scan" />
      </div>

      {/* Main content */}
      <div className="relative z-30">
        {/* Glitch Title with depth */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl font-bold mb-4 glitch-layers">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              DYS-LINK
            </span>
          </h1>
          <p className="text-purple-300 font-mono text-lg tracking-widest">
            // ENTER THE NEURAL MARKETPLACE
          </p>
        </motion.div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative bg-gradient-to-br from-gray-800/50 to-black/30 backdrop-blur-sm border border-purple-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(100,255,255,0.3)]">
                <div className="p-6 space-y-4">
                  {/* Title row */}
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {job.title}
                    </h2>
                    <span className="px-3 py-1 text-xs font-mono bg-purple-500/10 text-purple-300 rounded-full">
                      {job.difficulty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-cyan-100/80 font-light leading-relaxed">
                    {job.description}
                  </p>

                  {/* Reward badge */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="font-mono text-cyan-300">{job.reward}</span>
                    </div>
                    <button className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all rounded-full border border-cyan-400/20 hover:border-cyan-400/40">
                      ACCEPT CONTRACT
                    </button>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes scan {
          0% { background-position: 0 -100%; }
          100% { background-position: 0 100%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .glitch-layers {
          position: relative;
          overflow: hidden;
        }
        .glitch-layers::before,
        .glitch-layers::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
        }
        .glitch-layers::before {
          animation: glitch 3s infinite linear;
          clip-path: inset(20% 0 30% 0);
          opacity: 0.7;
        }
        .glitch-layers::after {
          animation: glitch 2s infinite linear reverse;
          clip-path: inset(10% 0 40% 0);
          opacity: 0.5;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default CyberpunkHomepage;