import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="relative backdrop-blur border rounded-2xl md:rounded-3xl p-6 md:p-12 text-center border-secondary bg-primary-foreground">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-2xl md:rounded-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 md:mb-8">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Your Journey</span>
              </div>

              <h2 className="text-2xl md:text-5xl font-bold mb-4">
                Ready to Join the <span className="text-gradient">CyberEye</span> Family?
              </h2>

              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10">
                Start protecting your organization today with our 14-day free trial. No credit card required.
                Full access to all features.
              </p>

              {/* 2x2 buttons on mobile */}
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-center">
                <Button asChild size="lg" className="group text-sm md:text-base">
                  <Link to="/demo">
                    Start Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group text-sm md:text-base">
                  <Link to="/contact">
                    <Phone className="mr-2 w-4 h-4" />
                    Contact Sales
                  </Link>
                </Button>
              </div>

              <p className="text-muted-foreground text-xs md:text-sm mt-6 md:mt-8">
                99.9% uptime guarantee • 24/7 support
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
