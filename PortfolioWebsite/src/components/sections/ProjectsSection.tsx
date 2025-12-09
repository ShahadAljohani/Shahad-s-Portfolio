import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built to handle 10,000+ daily transactions.',
      image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjUyMjMwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard for business intelligence with interactive charts, custom reporting, and data export capabilities. Processes millions of data points daily.',
      image: 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTE4NDM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['TypeScript', 'Next.js', 'D3.js', 'MongoDB', 'GraphQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking application with workout plans, nutrition tracking, and social features. Used by 50,000+ active users worldwide.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1MjkxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'Firebase', 'Redux', 'REST API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with task tracking, team communication, and time tracking features. Supports agile and waterfall methodologies.',
      image: 'https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjUyOTQ5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebSocket', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 5,
      title: 'AI Code Assistant',
      description: 'Intelligent code completion and suggestion tool powered by machine learning. Helps developers write better code faster with context-aware suggestions.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MTk4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Kubernetes'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 6,
      title: 'Social Media Platform',
      description: 'Decentralized social networking platform with end-to-end encryption, content moderation, and privacy-first features. Built for the modern web.',
      image: 'https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTE5NzMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Go', 'Blockchain', 'IPFS', 'GraphQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building scalable, user-focused applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
