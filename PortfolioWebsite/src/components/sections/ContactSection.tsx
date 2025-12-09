import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Thank you for reaching out! I\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.johnson@email.com',
      href: 'mailto:alex.johnson@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      username: '@alexjohnson'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      username: '/in/alexjohnson'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      username: '@alexjohnson'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">{info.label}</p>
                        <p className="text-gray-600 text-sm">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a 
                      key={index}
                      href={info.href}
                      className="block hover:opacity-70 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 mb-6">Follow Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <Icon size={20} className="group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm">{social.label}</p>
                        <p className="text-xs text-gray-500">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-gray-900 mb-3">Availability</h4>
              <p className="text-gray-600 text-sm mb-4">
                I'm currently available for freelance projects and consulting opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Response time: Within 24 hours</p>
                <p>Available: Mon - Fri, 9 AM - 6 PM PST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-gray-900 mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">
                      Your Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 text-sm">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help you..."
                    required
                    className="w-full min-h-[180px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
