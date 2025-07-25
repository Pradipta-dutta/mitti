import React from 'react';

const ModernCard = ({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  trend, 
  trendValue, 
  color = 'primary',
  loading = false,
  className = '' 
}) => {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-secondary-500 to-secondary-600',
    warning: 'from-accent-warning to-orange-500',
    success: 'from-primary-500 to-secondary-500',
    info: 'from-blue-500 to-cyan-500'
  };

  const bgColorClasses = {
    primary: 'bg-primary-50 dark:bg-primary-900/20',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20',
    warning: 'bg-orange-50 dark:bg-orange-900/20',
    success: 'bg-green-50 dark:bg-green-900/20',
    info: 'bg-blue-50 dark:bg-blue-900/20'
  };

  return (
    <div className={`
      relative overflow-hidden rounded-xl bg-white dark:bg-earth-800 
      border border-earth-200 dark:border-earth-700 
      shadow-sm hover:shadow-md transition-all duration-300 
      group hover:-translate-y-1 ${className}
    `}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />
      </div>

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`
            p-3 rounded-lg ${bgColorClasses[color]} 
            group-hover:scale-110 transition-transform duration-300
          `}>
            {Icon && (
              <Icon className={`w-6 h-6 text-${color}-600 dark:text-${color}-400`} />
            )}
          </div>
          
          {trend && (
            <div className={`
              flex items-center space-x-1 text-sm font-medium
              ${trend === 'up' ? 'text-green-600 dark:text-green-400' : 
                trend === 'down' ? 'text-red-600 dark:text-red-400' : 
                'text-earth-500 dark:text-earth-400'}
            `}>
              <span>{trendValue}</span>
              <svg 
                className={`w-4 h-4 ${trend === 'up' ? 'rotate-0' : 'rotate-180'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-earth-600 dark:text-earth-400 uppercase tracking-wide">
            {title}
          </h3>
          
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-earth-900 dark:text-earth-100">
                {value}
              </span>
              {unit && (
                <span className="text-lg font-medium text-earth-500 dark:text-earth-400">
                  {unit}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Gradient Border */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-1 
          bg-gradient-to-r ${colorClasses[color]} 
          transform scale-x-0 group-hover:scale-x-100 
          transition-transform duration-300 origin-left
        `} />
      </div>
    </div>
  );
};

export default ModernCard;