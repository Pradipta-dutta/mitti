import React from 'react';
import Image from 'next/image';
import ModernButton from './ModernButton';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const ModernHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/crop1.jpg"
          alt="Sustainable Agriculture"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-secondary-800/70 dark:from-earth-900/90 dark:via-earth-800/80 dark:to-primary-900/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl animate-bounce-gentle" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-300/20 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
            Empowering Sustainable Agriculture
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Smart Farming with{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Mitti
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your agricultural practices with real-time soil analysis, 
            AI-powered fertilizer recommendations, and comprehensive crop health monitoring.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Real-time Soil Analysis', 'AI Recommendations', 'Weather Integration', 'Crop Health Reports'].map((feature) => (
              <div key={feature} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm">
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ModernButton
              href="/dashboard"
              variant="primary"
              size="xl"
              icon={ArrowRightIcon}
              iconPosition="right"
              className="min-w-[200px] shadow-2xl"
            >
              Get Started
            </ModernButton>
            
            <ModernButton
              variant="outline"
              size="xl"
              icon={PlayIcon}
              className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600"
            >
              Watch Demo
            </ModernButton>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10K+', label: 'Farmers Helped' },
              { value: '95%', label: 'Accuracy Rate' },
              { value: '30%', label: 'Yield Increase' },
              { value: '24/7', label: 'Monitoring' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ModernHero;