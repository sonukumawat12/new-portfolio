import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Github, Linkedin, Twitter, MessageSquare, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import axios from 'axios';

const SocialIcon = ({ icon }: { name: string; icon: string }) => {
  const iconMap: { [key: string]: any } = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  };
  
  const IconComponent = iconMap[icon];
  
  return (
    <a
      href={portfolioData.social.find(s => s.icon === icon)?.url}
      className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-blue-400/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <IconComponent size={24} className="relative z-10" />
    </a>
  );
};

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});

  // Validation functions
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 50) return 'Name must be less than 50 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        if (value.trim().length > 100) return 'Subject must be less than 100 characters';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show validation errors
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as {[key: string]: boolean});
    setTouched(allTouched);
    
    // Validate form before submission
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fix the errors below before submitting.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await axios.post(
        "https://getform.io/f/akkpegna",
        formData,
        { 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
        setTouched({});
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate field on blur
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-rose-950/20 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Floating message icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 text-rose-500/20 text-4xl animate-spin">
          💬
        </div>
        <div className="absolute bottom-20 left-20 text-blue-500/20 text-5xl animate-pulse">
          📧
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-500/10 to-blue-500/10 border border-rose-400/20 rounded-full mb-8 animate-fade-in">
            <MessageSquare size={20} className="text-rose-400" />
            <span className="text-rose-400 font-medium tracking-wider">LET'S CONNECT</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 animate-slide-up">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              Touch
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Ready to bring your vision to life? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                        touched.name && errors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-700 focus:border-blue-400'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                        touched.email && errors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-700 focus:border-blue-400'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                      touched.subject && errors.subject 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-gray-700 focus:border-blue-400'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    rows={6}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 resize-none ${
                      touched.message && errors.message 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-gray-700 focus:border-blue-400'
                    }`}
                  ></textarea>
                  {touched.message && errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || Object.values(errors).some(error => error !== '')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:from-green-400 hover:to-emerald-400 hover:shadow-xl hover:shadow-green-400/30 transition-all duration-300 shadow-lg shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-400/30 rounded-lg text-green-400">
                    <CheckCircle size={20} />
                    <span>{submitMessage}</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-400/30 rounded-lg text-red-400">
                    <AlertCircle size={20} />
                    <span>{submitMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">{personal.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">{personal.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {portfolioData.social.map((social) => (
                    <SocialIcon key={social.name} name={social.name} icon={social.icon} />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-8 text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <Zap size={32} className="text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Quick Response</h4>
              <p className="text-gray-400 mb-6">
                I typically respond within 24 hours. Let's discuss your project!
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-400 hover:to-emerald-400 hover:shadow-xl hover:shadow-green-400/30 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                <Mail size={18} />
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;