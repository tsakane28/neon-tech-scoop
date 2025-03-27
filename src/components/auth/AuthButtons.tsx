
import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ 
  variant = 'default',
  size = 'default'
}) => {
  const getButtonClasses = () => {
    let base = 'rounded-lg font-medium transition-colors inline-flex items-center justify-center';
    
    // Size
    if (size === 'sm') {
      base += ' px-3 py-1.5 text-sm';
    } else if (size === 'lg') {
      base += ' px-6 py-3 text-base';
    } else {
      base += ' px-4 py-2 text-sm';
    }
    
    return base;
  };
  
  const getPrimaryClasses = () => {
    let classes = getButtonClasses();
    
    if (variant === 'outline') {
      classes += ' border border-primary text-primary hover:bg-primary/10';
    } else if (variant === 'ghost') {
      classes += ' text-primary hover:bg-primary/10';
    } else {
      classes += ' bg-primary text-primary-foreground hover:bg-primary/90';
    }
    
    return classes;
  };
  
  const getSecondaryClasses = () => {
    let classes = getButtonClasses();
    
    if (variant === 'outline') {
      classes += ' border border-input text-foreground hover:bg-muted';
    } else if (variant === 'ghost') {
      classes += ' text-foreground hover:bg-muted';
    } else {
      classes += ' bg-secondary text-secondary-foreground hover:bg-secondary/80';
    }
    
    return classes;
  };

  return (
    <div className="flex items-center gap-3">
      <Link to="/auth/login" className={getPrimaryClasses()}>
        <LogIn className="mr-2 h-4 w-4" />
        Sign In
      </Link>
      
      <Link to="/auth/register" className={getSecondaryClasses()}>
        <UserPlus className="mr-2 h-4 w-4" />
        Register
      </Link>
    </div>
  );
};

export default AuthButtons;
