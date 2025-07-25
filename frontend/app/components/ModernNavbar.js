"use client"
import React, { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon,
  BeakerIcon,
  SparklesIcon,
  CloudIcon,
  DocumentChartBarIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const ModernNavbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Soil Analysis', href: '/soilHealth', icon: BeakerIcon },
    { name: 'Fertilizer Recommendations', href: '/fertilizerType', icon: SparklesIcon },
    { name: 'Weather Updates', href: '/weather', icon: CloudIcon },
    { name: 'Reports', href: '/dashboard', icon: DocumentChartBarIcon },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-earth-900/95 backdrop-blur-md border-b border-primary-100 dark:border-earth-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-display font-bold text-primary-800 dark:text-primary-400 tracking-tight">
              Mitti
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-earth-700 dark:text-earth-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-earth-800 transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {!session ? (
              <Link href="/login">
                <button className="inline-flex items-center px-4 py-2 border border-primary-500 rounded-lg text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-earth-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-earth-900">
                  <UserCircleIcon className="w-4 h-4 mr-2" />
                  Sign In
                </button>
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-earth-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-earth-900"
                >
                  <Image
                    className="w-8 h-8 rounded-full ring-2 ring-primary-200 dark:ring-earth-700"
                    src={session.user.image}
                    width={32}
                    height={32}
                    alt="Profile"
                  />
                  <span className="hidden sm:block text-sm font-medium text-earth-700 dark:text-earth-300">
                    {session.user.name?.split(' ')[0]}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-earth-800 rounded-lg shadow-lg border border-earth-200 dark:border-earth-700 py-1 animate-fade-in">
                    <div className="px-4 py-2 border-b border-earth-200 dark:border-earth-700">
                      <p className="text-sm font-medium text-earth-900 dark:text-earth-100">
                        {session.user.name}
                      </p>
                      <p className="text-xs text-earth-500 dark:text-earth-400 truncate">
                        {session.user.email}
                      </p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-earth-700 dark:text-earth-300 hover:bg-primary-50 dark:hover:bg-earth-700 transition-colors duration-200"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsProfileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-earth-700 dark:text-earth-300 hover:bg-primary-50 dark:hover:bg-earth-700 transition-colors duration-200"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-earth-700 dark:text-earth-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-earth-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-earth-900"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-primary-100 dark:border-earth-800 py-4 animate-slide-up">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-earth-700 dark:text-earth-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-earth-800 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavbar;