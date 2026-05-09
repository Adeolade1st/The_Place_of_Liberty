import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'School Address',
    lines: ['1, Alhaji Masha Road,', 'Onisemo Junction, Surulere,', 'Lagos, Nigeria'],
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    lines: ['+234 806 063 6704 , 
            +234 802 312 6250'],
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['info@placeofliberty.com'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Clock,
    title: 'School Hours',
    lines: ['Mon – Fri: 7:30 AM – 3:00 PM', 'Sat – Sun: Closed', 'Visit by appointment'],
    color: 'bg-amber-50 text-amber-600',
  },
];

const subjects = [
  'General Enquiry',
  'Admissions',
  'Donation / Partnership',
  'Therapy Services',
  'Vocational Programme',
  'Media & Press',
  'Volunteering',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(21,128,61,0.88), rgba(21,128,61,0.93)), url(https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-green-100 max-w-xl mx-auto leading-relaxed">
          Have a question about admissions, therapy, donations, or partnership? Our team is here to help. Reach out and we will get back to you promptly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: contact details */}
          <div className="lg:col-span-1 space-y-5">
            {contactInfo.map(({ icon: Icon, title, lines, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-sm">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="School location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.355!3d6.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMTguMCJOIDPCsDIxJzE4LjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500">1, Alhaji Masha Road, Onisemo Junction, Surulere, Lagos</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="mt-6 text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                  
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="080.."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject <span className="text-red-400">*</span></label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message <span className="text-red-400">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
