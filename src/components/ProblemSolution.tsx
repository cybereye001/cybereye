import { X, Check, AlertTriangle, Brain } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ProblemSolution = () => {
  const problems = [
    "Fixed rules and signatures miss new attack techniques",
    "Manual updates after breaches — damage already done",
    "No user behavior analysis for slow leak detection",
    "Static tools can't adapt to evolving threats",
  ];

  const solutions = [
    "AI learns normal behavior and detects anomalies",
    "Real-time blocking before data leaves your network",
    "Continuous behavior analysis across all endpoints",
    "Self-learning system adapts without manual updates",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The <span className="text-destructive">Problem</span> vs Our{" "}
              <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Traditional DLP tools react after the breach. CyberEye prevents it
              from happening.
            </p>
          </div>
        </AnimatedSection>

        {/* 2x2 on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Problem Card */}
          <AnimatedSection delay={0.1}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-destructive/10 rounded-2xl blur-xl group-hover:bg-destructive/20 transition-all" />
              <div className="relative bg-card border border-destructive/30 rounded-2xl p-6 md:p-8 glow-destructive h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Traditional Tools</h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-destructive" />
                      </div>
                      <span className="text-sm md:text-base text-muted-foreground">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Solution Card */}
          <AnimatedSection delay={0.2}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all" />
              <div className="relative bg-card border border-primary/30 rounded-2xl p-6 md:p-8 glow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">CyberEye AI</h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-success" />
                      </div>
                      <span className="text-sm md:text-base text-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
