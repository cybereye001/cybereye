import { Monitor, Shield, Activity, AlertCircle, Users, FileWarning } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useState, useRef } from "react";
const SecurityDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const mockAlerts = [{
    type: "critical",
    message: "Unusual file transfer detected - Marketing Dept",
    time: "2 min ago"
  }, {
    type: "warning",
    message: "Multiple login attempts from new location",
    time: "5 min ago"
  }, {
    type: "info",
    message: "Large clipboard data copied - Sales Team",
    time: "12 min ago"
  }];
  const metrics = [{
    label: "Active Endpoints",
    value: "2,847",
    icon: Monitor
  }, {
    label: "Threats Blocked",
    value: "156",
    icon: Shield
  }, {
    label: "Risk Score",
    value: "Low",
    icon: Activity
  }, {
    label: "Active Users",
    value: "1,234",
    icon: Users
  }];
  const threatCategories = [{
    label: "Data Exfiltration",
    value: 45
  }, {
    label: "Unauthorized Access",
    value: 30
  }, {
    label: "Policy Violations",
    value: 25
  }];
  const activityData = [40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95];
  return;
};
export default SecurityDashboard;