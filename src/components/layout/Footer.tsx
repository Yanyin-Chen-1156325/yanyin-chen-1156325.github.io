import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Yanyin-Chen-1156325/",
      icon: <Github size={30} />,
      label: "GitHub Profile"
    },
    {
      href: "https://www.linkedin.com/in/ann-chen-ab306b321",
      icon: <Linkedin size={30} />,
      label: "LinkedIn Profile"
    },
    {
      href: "mailto:yyc24nn@gmail.com",
      icon: <Mail size={30} />,
      label: "Email Contact"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : "_blank"}
              rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p>&copy; {currentYear} Yan-Yin Chen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;