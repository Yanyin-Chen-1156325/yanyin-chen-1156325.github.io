import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
  className = ''
}) => {
  return (
    <div className={`section-header ${className}`}>
      {icon && (
        <div className="section-icon">
          {icon}
        </div>
      )}
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="header-line"></div>
    </div>
  );
};

export default SectionHeader;