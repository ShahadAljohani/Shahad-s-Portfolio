import { GraduationCap, Award, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function EducationSection() {
  const education = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      duration: '2016 - 2018',
      gpa: '3.9/4.0',
      description: 'Specialized in Distributed Systems and Machine Learning'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'MIT',
      duration: '2012 - 2016',
      gpa: '3.8/4.0',
      description: 'Dean\'s List all semesters, Senior Thesis on Cloud Computing'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      credentialId: 'AWS-PSA-12345'
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'Aug 2023',
      credentialId: 'GCP-PD-67890'
    },
    {
      id: 3,
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'May 2023',
      credentialId: 'CKA-54321'
    },
    {
      id: 4,
      name: 'Meta Front-End Developer Professional',
      issuer: 'Meta',
      date: 'Mar 2023',
      credentialId: 'META-FE-98765'
    }
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Engineering Manager at TechCorp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
      text: 'Alex is one of the most talented developers I\'ve worked with. Their ability to tackle complex problems and deliver elegant solutions is exceptional. They consistently exceed expectations and are a great mentor to junior team members.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO at StartupHub Inc.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
      text: 'Working with Alex was a game-changer for our startup. They brought technical expertise, leadership, and a product-focused mindset that helped us scale from 0 to 100k users. I highly recommend Alex for any senior engineering role.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager at Digital Creative',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
      text: 'Alex has an incredible talent for understanding user needs and translating them into technical solutions. Their collaborative approach and attention to detail made every project a success. A true professional!'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Education & Credentials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic background, professional certifications, and testimonials from colleagues
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-gray-900" size={28} />
            <h3 className="text-gray-900">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div 
                key={edu.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-gray-900 mb-2">{edu.degree}</h4>
                <p className="text-gray-700 mb-2">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-2">{edu.duration}</p>
                <p className="text-gray-600 text-sm mb-2">GPA: {edu.gpa}</p>
                <p className="text-gray-500 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-gray-900" size={28} />
            <h3 className="text-gray-900">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-gray-600" size={24} />
                </div>
                <h4 className="text-gray-900 mb-2 text-sm">{cert.name}</h4>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-2">{cert.date}</p>
                <p className="text-gray-400 text-xs">ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Quote className="text-gray-900" size={28} />
            <h3 className="text-gray-900">Recommendations</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec) => (
              <div 
                key={rec.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Quote className="text-gray-300 mb-4" size={32} />
                <p className="text-gray-600 mb-6 text-sm italic">{rec.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <ImageWithFallback
                    src={rec.image}
                    alt={rec.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900">{rec.name}</p>
                    <p className="text-gray-600 text-sm">{rec.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
