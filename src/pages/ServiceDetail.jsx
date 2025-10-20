import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Clock, Users } from 'lucide-react';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const serviceDetails = {
    'web-development': {
      overview: 'Our web development service creates modern, responsive, and scalable web applications using the latest technologies. We focus on user experience, performance, and maintainability.',
      deliverables: [
        'Custom Web Application',
        'Responsive Design',
        'Database Integration',
        'API Development',
        'Admin Dashboard',
        'SEO Optimization',
        'Performance Optimization',
        'Security Implementation',
        'And Types Websites'
      ],
      timeline: '4 weeks',
      teamSize: '3-8 developers',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript','Javascript']
    },
    'app-development': {
      overview: 'We develop native and cross-platform mobile applications that provide excellent user experiences across iOS and Android platforms.',
      deliverables: [
        'Native iOS App',
        'Native Android App',
        'Cross-platform Solution',
        'Backend API',
        'User Authentication',
        'Push Notifications',
        'App Store Deployment',
        'Analytics Integration'
      ],
      timeline: '6-16 weeks',
      teamSize: '2-4 developers',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    'branding': {
      overview: 'Complete brand identity and visual design solutions that help your business stand out and connect with your target audience.',
      deliverables: [
        'Logo Design',
        'Brand Guidelines',
        'Color Palette',
        'Typography System',
        'Business Cards',
        'Letterhead Design',
        'Social Media Kit',
        'Brand Style Guide'
      ],
      timeline: '2-6 weeks',
      teamSize: '1-2 designers',
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Illustrator']
    },
    'cloud-solutions': {
      overview: 'Scalable cloud infrastructure and deployment solutions that ensure your applications are reliable, secure, and performant.',
      deliverables: [
        'Cloud Architecture',
        'Infrastructure Setup',
        'Auto Scaling Configuration',
        'Load Balancing',
        'Database Management',
        'Monitoring & Alerts',
        'Backup Solutions',
        'Security Configuration'
      ],
      timeline: '2-8 weeks',
      teamSize: '1-3 engineers',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    'ai-integration': {
      overview: 'Artificial intelligence and machine learning solutions that automate processes and provide intelligent insights for your business.',
      deliverables: [
        'AI Model Development',
        'ChatGPT Integration',
        'Data Analytics Dashboard',
        'Automation Scripts',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'API Integration'
      ],
      timeline: '6-20 weeks',
      teamSize: '2-4 specialists',
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Pandas', 'Scikit-learn']
    },
    'consulting': {
      overview: 'Strategic technology consulting and architecture services to help you make informed decisions about your technology stack and development approach.',
      deliverables: [
        'Technology Assessment',
        'Architecture Design',
        'Code Review',
        'Performance Audit',
        'Security Assessment',
        'Team Training',
        'Best Practices Guide',
        'Implementation Roadmap'
      ],
      timeline: '1-4 weeks',
      teamSize: '1-2 consultants',
      technologies: ['Various based on project', 'Architecture Tools', 'Analysis Tools']
    }
  };

  const detail = serviceDetails[serviceId] || serviceDetails['web-development'];

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
           
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {detail.overview}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">What You'll Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {detail.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {detail.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <div>
                      <div className="font-medium">Timeline</div>
                      <div className="text-gray-600 dark:text-gray-400">{detail.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <div>
                      <div className="font-medium">Team Size</div>
                      <div className="text-gray-600 dark:text-gray-400">{detail.teamSize}</div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Get a free consultation and detailed quote for your project.
                </p>
                <div className="space-y-3">
                  <Link to="/contact" className="btn-primary w-full text-center block">
                    Get Free Quote
                  </Link>
                  <Link to="/pricing" className="btn-secondary w-full text-center block">
                    View All Pricing
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Other Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our other professional services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== serviceId)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-4">{relatedService.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{relatedService.description}</p>
                  <Link
                    to={`/services/${relatedService.id}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;