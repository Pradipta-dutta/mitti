import React from 'react';
import Link from 'next/link';

const ModernButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  disabled = false, 
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props 
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg 
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
    dark:focus:ring-offset-earth-900 disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-105 active:scale-95
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-primary-600 to-primary-700 text-white 
      hover:from-primary-700 hover:to-primary-800 
      focus:ring-primary-500 shadow-lg hover:shadow-xl
      dark:from-primary-500 dark:to-primary-600 
      dark:hover:from-primary-600 dark:hover:to-primary-700
    `,
    secondary: `
      bg-white dark:bg-earth-800 text-primary-600 dark:text-primary-400 
      border-2 border-primary-500 hover:bg-primary-50 dark:hover:bg-earth-700 
      focus:ring-primary-500 shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent text-primary-600 dark:text-primary-400 
      border-2 border-primary-500 hover:bg-primary-500 hover:text-white 
      dark:hover:bg-primary-500 dark:hover:text-white 
      focus:ring-primary-500 shadow-sm hover:shadow-md
    `,
    ghost: `
      bg-transparent text-primary-600 dark:text-primary-400 
      hover:bg-primary-50 dark:hover:bg-earth-800 
      focus:ring-primary-500
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600 text-white 
      hover:from-red-600 hover:to-red-700 
      focus:ring-red-500 shadow-lg hover:shadow-xl
    `,
    success: `
      bg-gradient-to-r from-green-500 to-green-600 text-white 
      hover:from-green-600 hover:to-green-700 
      focus:ring-green-500 shadow-lg hover:shadow-xl
    `
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="w-4 h-4 ml-2" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default ModernButton;