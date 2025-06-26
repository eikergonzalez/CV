import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { socialLinks } from '../data/social';

export const ContactSection: React.FC = () => {
  const { content } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message is too short';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);

    try {
      const response = await fetch('https://api.eikergonzalez.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setIsSubmitting(false);
        setErrors({ form: 'Error enviando el mensaje. Intenta de nuevo.' });
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setErrors({ form: 'Error enviando el mensaje. Intenta de nuevo.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {content.contact.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {content.contact.description}
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{content.contact.formEmail}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{content.info.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{content.contact.phone}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{content.info.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{content.contact.location}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{content.info.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-gray-900 dark:text-white font-medium mb-4">{content.contact.connect}</h3>
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                  <Check className="text-green-600 dark:text-green-400\" size={32} />
                </div>
                <p className="text-green-600 dark:text-green-400 text-lg font-medium text-center">
                  {content.contact.formSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">
                    {content.contact.formName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                        : 'border-gray-300 dark:border-gray-700 focus:ring-blue-200 dark:focus:ring-blue-900'
                    } focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">
                    {content.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                        : 'border-gray-300 dark:border-gray-700 focus:ring-blue-200 dark:focus:ring-blue-900'
                    } focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">
                    {content.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                        : 'border-gray-300 dark:border-gray-700 focus:ring-blue-200 dark:focus:ring-blue-900'
                    } focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-blue-400 dark:bg-blue-600 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
                  } transition-colors duration-300`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{content.contact.formSubmit}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};