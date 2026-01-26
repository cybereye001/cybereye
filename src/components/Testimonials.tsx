import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Johnson",
    role: "CISO",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "CyberEye has completely transformed our security posture. The AI-powered detection caught threats that our previous tools missed for months. Absolutely essential for any enterprise.",
    rating: 5
  }, {
    name: "Michael Chen",
    role: "IT Director",
    company: "FinanceSecure Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "The behavioral analysis is incredible. It learned our employees' patterns within weeks and started flagging anomalies we never would have caught. ROI was visible within the first quarter.",
    rating: 5
  }, {
    name: "Emily Rodriguez",
    role: "Security Manager",
    company: "HealthData Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "HIPAA compliance was always a challenge until we deployed CyberEye. The comprehensive monitoring and detailed audit logs made our last compliance audit a breeze.",
    rating: 5
  }, {
    name: "David Park",
    role: "CTO",
    company: "CloudFirst Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "We evaluated 15 DLP solutions before choosing CyberEye. The adaptive AI that learns and evolves was the game-changer. Traditional rule-based systems can't compete.",
    rating: 5
  }, {
    name: "Lisa Thompson",
    role: "VP of Security",
    company: "RetailMax Corp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    content: "After a near-miss data breach, we implemented CyberEye across all 200 locations. The centralized dashboard and real-time alerts give us peace of mind we never had before.",
    rating: 5
  }, {
    name: "James Wilson",
    role: "Head of IT",
    company: "LegalTrust LLP",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "Client confidentiality is everything in legal. CyberEye's intelligent monitoring protects sensitive case files while respecting attorney-client privilege. Brilliant solution.",
    rating: 5
  }];
  return;
};
export default Testimonials;