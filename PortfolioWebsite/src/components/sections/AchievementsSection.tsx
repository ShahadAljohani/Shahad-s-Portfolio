import { Trophy, Star, Target, Users } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      icon: Trophy,
      title: 'Developer of the Year 2023',
      organization: 'TechCorp Solutions',
      description: 'Recognized for outstanding technical contributions and leadership in driving innovation across multiple projects.'
    },
    {
      id: 2,
      icon: Star,
      title: 'Best Innovation Award',
      organization: 'StartupHub Inc.',
      description: 'Awarded for developing an AI-powered feature that increased user retention by 45% and generated $2M in additional revenue.'
    },
    {
      id: 3,
      icon: Target,
      title: 'Hackathon Winner',
      organization: 'Global Tech Summit 2022',
      description: 'First place among 200+ teams for building a real-time collaboration tool in 48 hours.'
    },
    {
      id: 4,
      icon: Users,
      title: 'Open Source Contributor',
      organization: 'GitHub',
      description: 'Contributed to 50+ open source projects with over 10,000 stars collectively. Maintained 3 popular libraries.'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Code Commits', value: '15,000+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Team Members Mentored', value: '25+' }
  ];

  const awards = [
    {
      id: 1,
      year: '2023',
      title: 'Google Developer Expert',
      category: 'Web Technologies'
    },
    {
      id: 2,
      year: '2023',
      title: 'AWS Community Builder',
      category: 'Cloud Architecture'
    },
    {
      id: 3,
      year: '2022',
      title: 'Microsoft MVP',
      category: 'Developer Technologies'
    },
    {
      id: 4,
      year: '2022',
      title: 'Top 1% Stack Overflow Contributor',
      category: 'JavaScript & React'
    },
    {
      id: 5,
      year: '2021',
      title: 'CSS Design Awards',
      category: 'Best UI Design'
    },
    {
      id: 6,
      year: '2021',
      title: 'Webby Awards Nominee',
      category: 'Technical Achievement'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Achievements & Awards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition and milestones achieved throughout my career
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl"
            >
              <div className="text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-gray-900 mb-8 text-center">Major Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.id}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{achievement.organization}</p>
                      <p className="text-gray-500 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Awards Timeline */}
        <div>
          <h3 className="text-gray-900 mb-8 text-center">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award) => (
              <div 
                key={award.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs">
                    {award.year}
                  </span>
                  <Trophy className="text-yellow-500" size={20} />
                </div>
                <h4 className="text-gray-900 mb-1 text-sm">{award.title}</h4>
                <p className="text-gray-600 text-xs">{award.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
