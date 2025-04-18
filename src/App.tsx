import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Database, Brain, BarChart as ChartBar, Code2, Download, Award, BookOpen, Briefcase, Menu, X, ChevronDown, Rocket, FlaskRound as Flask, Notebook as Robot, LineChart, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: "Predictive Analytics Platform",
      description: "Built an end-to-end ML platform for predictive maintenance using sensor data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "machine-learning",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      details: {
        technologies: ["TensorFlow", "Python", "Docker", "AWS"],
        link: "https://github.com/example/predictive-analytics",
        features: [
          "Real-time sensor data processing",
          "Advanced anomaly detection",
          "Automated maintenance scheduling",
          "Interactive dashboards"
        ]
      }
    },
    {
      title: "NLP Research Analysis",
      description: "Developed NLP models for analyzing research papers and extracting insights",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
      category: "nlp",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      details: {
        technologies: ["BERT", "PyTorch", "Hugging Face", "spaCy"],
        link: "https://github.com/example/nlp-research",
        features: [
          "Text classification",
          "Named entity recognition",
          "Semantic analysis",
          "Citation network analysis"
        ]
      }
    },
    {
      title: "Computer Vision System",
      description: "Implemented a real-time object detection system for manufacturing quality control",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      category: "computer-vision",
      icon: <Robot className="w-6 h-6 text-green-400" />,
      details: {
        technologies: ["OpenCV", "YOLO", "Keras", "NVIDIA CUDA"],
        link: "https://github.com/example/vision-system",
        features: [
          "Real-time object detection",
          "Defect classification",
          "Quality metrics tracking",
          "Production line integration"
        ]
      }
    },
    {
      title: "Time Series Forecasting",
      description: "Created advanced forecasting models for financial market prediction",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800",
      category: "machine-learning",
      icon: <LineChart className="w-6 h-6 text-yellow-400" />,
      details: {
        technologies: ["Prophet", "LSTM", "Pandas", "Scikit-learn"],
        link: "https://github.com/example/time-series",
        features: [
          "Multi-variate forecasting",
          "Seasonal decomposition",
          "Automated feature engineering",
          "Model ensemble techniques"
        ]
      }
    },
    {
      title: "Recommendation Engine",
      description: "Built a personalized content recommendation system using collaborative filtering",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "machine-learning",
      icon: <Target className="w-6 h-6 text-red-400" />,
      details: {
        technologies: ["Apache Spark", "Redis", "FastAPI", "MongoDB"],
        link: "https://github.com/example/recommender",
        features: [
          "Real-time recommendations",
          "A/B testing framework",
          "User behavior analysis",
          "Content-based filtering"
        ]
      }
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Developed an interactive dashboard for patient outcome analysis",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      category: "data-analysis",
      icon: <Flask className="w-6 h-6 text-indigo-400" />,
      details: {
        technologies: ["R", "Shiny", "PostgreSQL", "D3.js"],
        link: "https://github.com/example/healthcare-analytics",
        features: [
          "Patient outcome prediction",
          "Treatment effectiveness analysis",
          "Resource utilization tracking",
          "Risk factor identification"
        ]
      }
    }
  ];

  const skills = [
    {
      title: "Data Analysis",
      description: "Python, R, SQL, Pandas, NumPy",
      icon: Database,
      github: "https://github.com/topics/data-analysis"
    },
    {
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Scikit-learn",
      icon: Brain,
      github: "https://github.com/topics/machine-learning"
    },
    {
      title: "Visualization",
      description: "Matplotlib, Seaborn, Plotly",
      icon: ChartBar,
      github: "https://github.com/topics/data-visualization"
    },
    {
      title: "Development",
      description: "Git, Docker, AWS, Azure",
      icon: Code2,
      github: "https://github.com/topics/devops"
    }
  ];

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { 
      label: "Projects",
      submenu: [
        { id: "machine-learning", label: "Machine Learning" },
        { id: "nlp", label: "NLP" },
        { id: "computer-vision", label: "Computer Vision" },
        { id: "data-analysis", label: "Data Analysis" }
      ]
    },
    { href: "#contact", label: "Contact" }
  ];

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="#"
              className="text-2xl font-bold gradient-text flex items-center gap-2"
            >
              <Rocket className="w-6 h-6" />
              DS Portfolio
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                'submenu' in link ? (
                  <div key={link.label} className="relative group">
                    <button
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                      className="text-gray-300 hover:text-white transition flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProjectsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 max-h-48 overflow-y-auto">
                        {link.submenu.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => {
                              setIsProjectsOpen(false);
                              scrollToSection(item.id);
                              setActiveFilter(item.id);
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navLinks.map((link) => (
                'submenu' in link ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                      className="w-full text-left py-2 text-gray-300 hover:text-white transition flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProjectsOpen && (
                      <div className="pl-4 max-h-48 overflow-y-auto">
                        {link.submenu.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => {
                              setIsProjectsOpen(false);
                              setIsMenuOpen(false);
                              scrollToSection(item.id);
                              setActiveFilter(item.id);
                            }}
                            className="block w-full text-left py-2 text-gray-300 hover:text-white transition"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-2 text-gray-300 hover:text-white transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-background pt-32 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <div className="flex items-center gap-4">
                  <span>Data Scientist</span>
                  <Brain className="w-12 h-12 text-blue-400" />
                </div>
                <span className="gradient-text">&</span>
                <div>ML Engineer</div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transforming complex data into actionable insights through machine learning and statistical analysis
              </p>
              <div className="flex gap-4">
                <a 
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf"
                  className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
                >
                  <Download size={20} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div data-aos="fade-up" className="bg-gray-700/50 backdrop-blur-lg rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                About Me
                <BookOpen className="w-8 h-8 text-blue-400" />
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=300&h=300"
                    alt="Profile"
                    className="rounded-lg shadow-xl w-full h-[300px] object-cover max-w-xs mx-auto"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    With over 8 years of experience in data science and machine learning, I've helped organizations transform their data into valuable insights and innovative solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="font-semibold">15+ Awards</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <Briefcase className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="font-semibold">8+ Years</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="font-semibold">50+ Projects</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="font-semibold">10+ ML Models</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3" data-aos="fade-up">
            Core Competencies
            <Brain className="w-8 h-8 text-blue-400" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="bg-gray-700 p-6 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <skill.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-300 mb-4">{skill.description}</p>
                <a 
                  href={skill.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  View Projects <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3" data-aos="fade-up">
            Featured Projects
            <Rocket className="w-8 h-8 text-blue-400" />
          </h2>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('machine-learning')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'machine-learning' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => setActiveFilter('nlp')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'nlp' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              NLP
            </button>
            <button
              onClick={() => setActiveFilter('computer-vision')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'computer-vision' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Computer Vision
            </button>
            <button
              onClick={() => setActiveFilter('data-analysis')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'data-analysis' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Data Analysis
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => activeFilter === 'all' || project.category === activeFilter).map((project, index) => (
              <div 
                key={project.title}
                className="bg-gray-700 rounded-xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.icon}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <button
                    onClick={() => toggleProject(project.title)}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-4"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedProject === project.title ? 'rotate-180' : ''}`} />
                    {expandedProject === project.title ? 'Show Less' : 'Show More'}
                  </button>

                  {expandedProject === project.title && (
                    <div className="border-t border-gray-600 pt-4 mt-4">
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.details.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside mb-4 text-gray-300">
                        {project.details.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                      <a 
                        href={project.details.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        View on GitHub <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3" data-aos="fade-up">
            Get in Touch
            <Mail className="w-8 h-8 text-blue-400" />
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center gap-8 mb-12" data-aos="fade-up" data-aos-delay="100">
              <a 
                href="https://github.com"
                className="text-gray-300 hover:text-white transition"
              >
                <Github size={32} />
              </a>
              <a 
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white transition"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-gray-300 hover:text-white transition"
              >
                <Mail size={32} />
              </a>
            </div>
            <form className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Data Scientist Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;