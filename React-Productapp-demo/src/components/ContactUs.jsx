import React, { useState } from "react";

function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow flex items-center justify-center relative">
      
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#D96B43]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#C25830]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Info Text & Cards (5 columns) */}
        <div className="lg:col-span-5 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EFEBE4] text-xs font-semibold text-[#D96B43] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-pulse" />
            Get in touch
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2A2421] tracking-tight leading-tight mb-5">
            Let's Start a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D96B43] to-[#C25830]">
              Conversation
            </span>
          </h1>

          <p className="text-[#6B5E56] text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Have questions about our premium collections, custom shipments, or refund policies? Our dedicated support squad is here to assist you.
          </p>

          {/* Quick Info Rows */}
          <div className="space-y-4 max-w-sm mx-auto lg:mx-0 text-left">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-sm shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#D96B43]/10 flex items-center justify-center text-[#D96B43] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="block text-[10px] text-[#8E8076] uppercase font-bold tracking-wider">Email Support</span>
                <span className="text-sm font-semibold text-[#2A2421]">support@swiftstore.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-sm shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#D96B43]/10 flex items-center justify-center text-[#D96B43] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-[10px] text-[#8E8076] uppercase font-bold tracking-wider">Headquarters</span>
                <span className="text-sm font-semibold text-[#2A2421]">742 Evergreen Terrace, Springfield</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Interactive Form Box (7 columns) */}
        <div className="lg:col-span-7">
          <div className="bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_-6px_rgba(139,94,60,0.15)] relative overflow-hidden">
            
            {formSubmitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#D96B43]/10 border border-[#D96B43]/20 flex items-center justify-center text-[#D96B43] mx-auto mb-6 shadow-sm">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2A2421] mb-2">Message Sent Successfully!</h3>
                <p className="text-[#6B5E56] max-w-sm mx-auto mb-8">Thank you for reaching out. A store representative will reply to you within 24 hours.</p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F2EDE4] border border-[#EFEBE4] text-[#6B5E56] hover:text-[#2A2421] font-semibold text-sm transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form header title */}
                <div>
                  <h2 className="text-xl font-bold text-[#2A2421] mb-1">Send a Message</h2>
                  <p className="text-xs text-[#8E8076]">Fill out this quick form and we will connect with you shortly.</p>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name-input" className="block text-xs font-bold text-[#8E8076] uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#EFEBE4] text-[#2A2421] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D96B43]/40 placeholder-[#8E8076] transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email-input" className="block text-xs font-bold text-[#8E8076] uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#EFEBE4] text-[#2A2421] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D96B43]/40 placeholder-[#8E8076] transition"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message-input" className="block text-xs font-bold text-[#8E8076] uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    required
                    placeholder="How can our squad help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#EFEBE4] text-[#2A2421] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D96B43]/40 placeholder-[#8E8076] transition resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D96B43] to-[#8C6239] hover:from-[#C25830] hover:to-[#8C6239] text-white font-bold text-base transition-all duration-300 shadow-[0_4px_15px_-3px_rgba(217,107,67,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}

export default ContactUs;