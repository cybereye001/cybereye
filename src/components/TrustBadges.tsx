import { Shield, Lock, Award, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
const TrustBadges = () => {
  const badges = [{
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Certified"
  }, {
    icon: Lock,
    title: "ISO 27001",
    description: "Compliant"
  }, {
    icon: Award,
    title: "GDPR",
    description: "Ready"
  }, {
    icon: CheckCircle,
    title: "HIPAA",
    description: "Compliant"
  }];
  return;
};
export default TrustBadges;