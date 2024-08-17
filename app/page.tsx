"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import EventCountdown from './components/EventCountdown/EventCountdown';
import About from './components/About/About';
import Mentors from './components/Mentors/Mentors';
import EventTimeline from './components/EventTimeline/EventTimeline';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>E-VOLVE | IEEE SRMIST</title>
        <meta name="description" content="Explore the future of artificial intelligence with hands-on experience in Generative AI. Join the GenAI Workshop at IEEE SRMIST to learn, innovate, and create AI-powered solutions." />
        <meta name="keywords" content="GenAI Workshop, IEEE SRMIST, artificial intelligence, generative AI, innovation, technology, hands-on workshop" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Mentors />
      <EventTimeline />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;