import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      organization: 'TechCorp Solutions',
      duration: 'Jan 2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      achievements: [
        'Led a team of 5 developers in building a microservices-based platform that increased system performance by 40%',
        'Architected and implemented a real-time data processing pipeline handling 1M+ events per day',
        'Reduced deployment time by 60% by implementing CI/CD pipelines with Docker and Kubernetes',
        'Mentored junior developers and conducted code reviews, improving team code quality by 35%'
      ]
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      organization: 'StartupHub Inc.',
      duration: 'Jun 2020 - Dec 2021',
      location: 'Remote',
      type: 'Full-time',
      achievements: [
        'Developed and launched 3 major features that increased user engagement by 50%',
        'Optimized database queries reducing API response time from 2s to 200ms',
        'Implemented comprehensive testing strategy achieving 85% code coverage',
        'Collaborated with design team to rebuild the entire frontend using React and TypeScript'
      ]
    },
    {
      id: 3,
      role: 'Frontend Developer',
      organization: 'Digital Creative Agency',
      duration: 'Mar 2019 - May 2020',
      location: 'New York, NY',
      type: 'Full-time',
      achievements: [
        'Built responsive web applications for 15+ clients across various industries',
        'Improved website performance scores by 40% through code optimization and lazy loading',
        'Created a reusable component library that reduced development time by 30%',
        'Won "Best Developer of the Year" award for outstanding contributions'
      ]
    },
    {
      id: 4,
      role: 'Junior Developer',
      organization: 'WebDev Studios',
      duration: 'Jan 2018 - Feb 2019',
      location: 'Boston, MA',
      type: 'Full-time',
      achievements: [
        'Contributed to 10+ client projects using HTML, CSS, JavaScript, and WordPress',
        'Debugged and resolved 100+ production issues, improving system stability',
        'Participated in agile development processes and daily stand-ups',
        'Completed advanced training in React and Node.js'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey through different roles and organizations, building impactful solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gray-900 rounded-full border-4 border-white" />
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-gray-900 mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Briefcase size={16} />
                      <span>{exp.organization}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                      <span className="text-gray-400">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-700">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-600 text-sm">
                        <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
