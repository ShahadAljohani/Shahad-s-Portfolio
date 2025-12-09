import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm mb-4">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-gray-900 mb-6">
          Hi, I'm Alex Johnson
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          A passionate full-stack developer with 5+ years of experience building scalable web applications. 
          I specialize in creating elegant solutions that bridge the gap between design and functionality, 
          transforming complex problems into intuitive user experiences.
        </p>

        <div className="mb-8">
          <h2 className="text-gray-900 mb-4">Focus Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-sm">
              Web Development
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-sm">
              Cloud Architecture
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-sm">
              UI/UX Design
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-sm">
              Mobile Development
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <Mail size={20} />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
}
