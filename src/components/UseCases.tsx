import { Building2, Landmark, Heart, GraduationCap, Factory, ShoppingCart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
const UseCases = () => {
  const industries = [{
    icon: Landmark,
    name: "Financial Services",
    description: "Protect customer financial data, prevent insider trading leaks, and ensure regulatory compliance.",
    threats: ["Customer PII leaks", "Trading data theft", "Financial fraud"]
  }, {
    icon: Heart,
    name: "Healthcare",
    description: "Secure patient records, monitor access to sensitive health information, and maintain HIPAA compliance.",
    threats: ["PHI data breaches", "Medical identity theft", "Unauthorized access"]
  }, {
    icon: Building2,
    name: "Technology",
    description: "Guard intellectual property, source code, and proprietary algorithms from exfiltration.",
    threats: ["IP theft", "Source code leaks", "Trade secrets exposure"]
  }, {
    icon: Factory,
    name: "Manufacturing",
    description: "Protect trade secrets, manufacturing processes, and supply chain information.",
    threats: ["Design theft", "Process leaks", "Supplier data breaches"]
  }, {
    icon: GraduationCap,
    name: "Education",
    description: "Safeguard student records, research data, and institutional information.",
    threats: ["Student data exposure", "Research theft", "Exam leaks"]
  }, {
    icon: ShoppingCart,
    name: "Retail & E-Commerce",
    description: "Protect customer data, payment information, and inventory systems.",
    threats: ["Credit card theft", "Customer data leaks", "Pricing strategy leaks"]
  }];
  return;
};
export default UseCases;