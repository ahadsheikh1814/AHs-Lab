import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ahadsheikh1814', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/AhadSheikh1814_', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/md-ahad-shaeikh-50419a371/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ahadsheikh1814@outlook.com', label: 'Email' }
  ];

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Documentation', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  return (
    <footer className="w-full min-h-[30vh] border-t border-primary/10 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-ahs bg-clip-text text-transparent">
              AHs Lab
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Building beautiful and functional components for modern web applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-ahs dark:group-hover:text-ahs transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-ahs dark:hover:text-ahs transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {currentYear} AHs Lab. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              by Md. Ahad Sheikh
            </p>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="w-full flex justify-center items-center absolute -bottom-1/3 pointer-events-none">
        <h1 className="text-[10vw] sm:text-[12vw] lg:text-[14vw] font-black tracking-tight text-gray-200/30 dark:text-gray-800/30 select-none">
          AHs Lab
        </h1>
      </div>
    </footer>
  );
};

export default Footer;