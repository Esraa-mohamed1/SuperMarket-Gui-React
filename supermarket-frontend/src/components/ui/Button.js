import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  // Map our custom variants to Bootstrap classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline-primary',
    danger: 'btn-danger',
  };
  
  // Map our custom sizes to Bootstrap sizes
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',  // Default Bootstrap button size
    lg: 'btn-lg',
  };
  
  // Bootstrap classes for width
  const widthClass = fullWidth ? 'w-100' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;