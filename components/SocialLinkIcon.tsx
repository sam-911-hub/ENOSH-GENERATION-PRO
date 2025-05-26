
import React from 'react';

interface SocialLinkIconProps {
  name: string;
  url: string;
  iconClass: string;
}

const SocialLinkIcon: React.FC<SocialLinkIconProps> = ({ name, url, iconClass }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      title={name}
      className="text-brand-text-medium hover:text-brand-accent transition-colors duration-300 text-2xl"
    >
      <i className={iconClass}></i>
    </a>
  );
};

export default SocialLinkIcon;
