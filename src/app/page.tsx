"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleTextbox from '@/components/textbox/SimpleTextbox';
import StandardTextbox from '@/components/textbox/StandardTextbox';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { useState } from 'react';

const mockPortfolioItems = [
  { title: 'Portrait 1', image: '/images/placeholder1.avif' },
  { title: 'Portrait 2', image: '/images/placeholder2.avif' },
  { title: 'Portrait 3', image: '/images/placeholder3.avif' },
  { title: 'Portrait 4', image: '/images/placeholder4.avif' },
  { title: 'Portrait 5', image: '/images/placeholder5.avif' },
  { title: 'Portrait 6', image: '/images/placeholder6.avif' },
  { title: 'Portrait 7', image: '/images/placeholder7.avif' },
  { title: 'Portrait 8', image: '/images/placeholderwide1.jpg' },
];

const mockTestimonials = [
  { quote: "Absolutely stunning work!", by: "Client A" },
  { quote: "Transformed my vision into reality!", by: "Client B" },
];

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submit logic
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="border rounded p-2" />
      <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border rounded p-2" />
      <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required className="border rounded p-2" />
      <button type="submit" className="bg-blue-500 text-white rounded py-2">Send Message</button>
    </form>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-gradient-to-b from-[rgba(124,58,237,.25)] to-[rgba(10,10,20,.9)] p-8">
        <CyclopsHero title="Futurist Frame" subtitle="Capturing the essence of modern photography" primaryButtonText="See My Work" secondaryButtonText="Contact Me" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      </section>
      <section id="portfolio" className="bg-[#0B1020] p-8">
        <GalleryBento items={mockPortfolioItems} className="grid grid-cols-2 sm:grid-cols-4 gap-4" />
      </section>
      <section id="about" className="bg-glass p-8">
        <StandardTextbox title={<h2>About Me</h2>} description={<p>Passionate photographer with a unique style.</p>} />
      </section>
      <section id="services" className="bg-gradient-to-b from-[rgba(2,6,23,.0)] to-[rgba(2,6,23,.2)] p-8">
        <StandardTextbox title={<h2>My Services</h2>} description={<p>I offer portrait, editorial, branding, and events photography.</p>} />
      </section>
      <section id="testimonials" className="bg-[#0A0A14] p-8">
        {mockTestimonials.map((testimonial, index) => (
          <SimpleTextbox key={index} title={<h3>{testimonial.by}</h3>} description={<p>{testimonial.quote}</p>} />
        ))}
      </section>
      <section id="contact" className="bg-glass p-8">
        <h2 className="text-xl">Get In Touch</h2>
        <ContactForm />
      </section>
      <footer className="bg-[#0A0A14] p-4">
        <SimpleFooter columns={[]} copyrightText="© 2023 Futurist Frame" onPrivacyClick={() => {}} />
      </footer>
    </SiteThemeProvider>
  );
}
