import { Code, Layers, Settings } from 'lucide-react';

export function SkillsSection() {
  const programmingLanguages = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'SQL', 'HTML/CSS'
  ];

  const frameworksLibraries = [
    'React', 'Next.js', 'Node.js', 'Express', 'Vue.js', 'Django', 
    'Flask', 'Spring Boot', 'TailwindCSS', 'Redux', 'GraphQL', 'REST APIs'
  ];

  const toolsPlatforms = [
    'Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud',
    'MongoDB', 'PostgreSQL', 'Redis', 'Jenkins', 'GitHub Actions', 'Figma'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and tools I use to build modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-blue-600" size={24} />
            </div>
            <h3 className="text-gray-900 mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-blue-100 hover:border-blue-300 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Layers className="text-purple-600" size={24} />
            </div>
            <h3 className="text-gray-900 mb-4">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {frameworksLibraries.map((framework) => (
                <span
                  key={framework}
                  className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-purple-100 hover:border-purple-300 transition-colors"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Settings className="text-green-600" size={24} />
            </div>
            <h3 className="text-gray-900 mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {toolsPlatforms.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-green-100 hover:border-green-300 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
