import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const featuredPost = {
    title: "The Rising Threat of Insider Data Breaches in 2025",
    excerpt: "As organizations become more digital, the risk of insider threats continues to grow. Learn how AI-powered solutions are changing the game in data leak prevention.",
    date: "January 20, 2025",
    readTime: "8 min read",
    category: "Threat Intelligence",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
  };

  const posts = [
    {
      title: "Understanding Data Loss Prevention: A Complete Guide",
      excerpt: "Everything you need to know about DLP solutions, from basic concepts to advanced implementation strategies.",
      date: "January 15, 2025",
      readTime: "12 min read",
      category: "DLP Fundamentals"
    },
    {
      title: "5 Signs Your Organization Needs Better Endpoint Security",
      excerpt: "Is your current security setup adequate? Here are the warning signs that indicate you need to upgrade your endpoint protection.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Endpoint Security"
    },
    {
      title: "GDPR Compliance in 2025: What's Changed?",
      excerpt: "Stay up to date with the latest GDPR requirements and learn how to ensure your organization remains compliant.",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Compliance"
    },
    {
      title: "AI in Cybersecurity: Beyond the Hype",
      excerpt: "Separating fact from fiction in AI-powered security solutions. What actually works and what's just marketing?",
      date: "December 28, 2024",
      readTime: "9 min read",
      category: "AI & ML"
    },
    {
      title: "Building a Security-First Culture in Your Organization",
      excerpt: "Technical solutions alone aren't enough. Learn how to create a culture where security is everyone's responsibility.",
      date: "December 20, 2024",
      readTime: "7 min read",
      category: "Security Culture"
    },
    {
      title: "The True Cost of a Data Breach: 2025 Analysis",
      excerpt: "Breaking down the financial, reputational, and operational impacts of data breaches on modern organizations.",
      date: "December 15, 2024",
      readTime: "11 min read",
      category: "Industry Insights"
    }
  ];

  const categories = [
    "All Posts",
    "DLP Fundamentals",
    "Threat Intelligence",
    "Compliance",
    "AI & ML",
    "Security Culture",
    "Industry Insights",
    "Endpoint Security"
  ];

  const filteredPosts = activeCategory === "All Posts" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const showFeatured = activeCategory === "All Posts" || featuredPost.category === activeCategory;

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-6xl font-bold mb-6">
                  CyberEye <span className="text-gradient">Blog</span>
                </h1>
                <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Stay informed with the latest cybersecurity trends, best practices, 
                  and insights from our security experts.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Post */}
        {showFeatured && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="max-w-5xl mx-auto">
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group cursor-pointer">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="aspect-video md:aspect-auto">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            Featured
                          </span>
                          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                            {featuredPost.category}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {featuredPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                        <Button variant="hero" className="w-fit gap-2">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                {activeCategory === "All Posts" ? "Latest Articles" : activeCategory}
                <span className="text-muted-foreground text-lg ml-2">({filteredPosts.length})</span>
              </h2>
            </AnimatedSection>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredPosts.map((post, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/50 transition-all group cursor-pointer">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-grow mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection>
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No articles found in this category.</p>
                  <Button 
                    variant="heroOutline" 
                    className="mt-4"
                    onClick={() => setActiveCategory("All Posts")}
                  >
                    View All Posts
                  </Button>
                </div>
              </AnimatedSection>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <AnimatedSection delay={0.5}>
                <div className="text-center mt-12">
                  <Button variant="heroOutline" size="lg" className="gap-2">
                    Load More Articles
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Want to Learn More About <span className="text-gradient">CyberEye</span>?
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-8">
                  See how our AI-powered DLP solution can protect your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/demo">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      Request a Demo
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
