import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setStatus('sending');
    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="py-xl px-md max-w-container-max mx-auto reveal" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
        
        {/* Left Side: Info */}
        <div>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-md font-bold text-on-surface">
            Let's Connect
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-md">
            I'm currently looking for new opportunities or collaborations. Feel free to reach out for projects or a coffee chat!
          </p>
          <div className="space-y-lg">
            
            {/* Email */}
            <a className="flex items-center gap-md group cursor-pointer" href="mailto:aslimich22@gmail.com">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h6 className="font-label-md text-label-md text-on-surface-variant uppercase font-bold">
                  Email
                </h6>
                <p className="font-body-md text-primary font-bold group-hover:text-primary/70 transition-colors">
                  aslimich22@gmail.com
                </p>
              </div>
            </a>
            
            {/* Phone */}
            <a className="flex items-center gap-md group cursor-pointer" href="tel:+918903252575">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <h6 className="font-label-md text-label-md text-on-surface-variant uppercase font-bold">
                  Phone
                </h6>
                <p className="font-body-md text-primary font-bold group-hover:text-primary/70 transition-colors">
                  +91 89032 52575
                </p>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a className="flex items-center gap-md group cursor-pointer" href="https://www.linkedin.com/in/asli-mich-jose-844916296/" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined">link</span>
              </div>
              <div>
                <h6 className="font-label-md text-label-md text-on-surface-variant uppercase font-bold">
                  LinkedIn
                </h6>
                <p className="font-body-md text-primary font-bold group-hover:text-primary/70 transition-colors">
                  ASLI MICH JOSE
                </p>
              </div>
            </a>
            
            {/* Location */}
            <div className="flex items-center gap-md group">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h6 className="font-label-md text-label-md text-on-surface-variant uppercase font-bold">
                  Location
                </h6>
                <p className="font-body-md text-primary font-bold">
                  KK District, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-surface-container-low p-xl rounded-xl border border-outline-variant/30 hover:shadow-lg transition-shadow duration-500">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-md space-y-md animate-fadeIn">
              <span className="material-symbols-outlined text-6xl text-primary-container">check_circle</span>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Message Sent!</h4>
              <p className="font-body-md text-on-surface-variant max-w-sm">
                Thank you for reaching out. I'll get back to you as soon as possible!
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="btn-interact px-md py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant font-bold">
                    Full Name *
                  </label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface transition-all outline-none" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant font-bold">
                    Email Address *
                  </label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface transition-all outline-none" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant font-bold">
                  Subject
                </label>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface transition-all outline-none" 
                  placeholder="Project Inquiry" 
                  type="text"
                />
              </div>
              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant font-bold">
                  Message *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface transition-all outline-none" 
                  placeholder="How can I help you?" 
                  rows={4}
                />
              </div>
              <button 
                disabled={status === 'sending'}
                className="btn-interact w-full py-md bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-sm disabled:opacity-70" 
                type="submit"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
