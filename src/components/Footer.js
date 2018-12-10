import React from 'react';
import Fade from 'react-reveal/Fade';
import { scroller } from 'react-scroll';

import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const socialLinks = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/TheCanalClub/',
      icon: ['fab', 'facebook-f']
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/thecanalclub?lang=en',
      icon: ['fab', 'twitter']
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/thecanalclub/',
      icon: ['fab', 'instagram']
    },
    {
      name: 'email',
      link: '/',
      icon: ['fas', 'envelope']
    }
  ];

  const scrollToTop = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  };

  const renderSocialLinks = socialLinks.map(socialLink => {
    return (
      <a
        href={socialLink.link}
        rel="noopener noreferrer"
        target="_blank"
        key={socialLink.name}
        className="footer__social-link"
      >
        <FontAwesomeIcon
          icon={socialLink.icon}
          size="3x"
          className={`footer__social--${socialLink.name}`}
        />
      </a>
    );
  });

  return (
    <footer className="footer">
      <Fade delay={300}>
        <div className="footer__logo">The Canal Club</div>
        <div className="footer__social">{renderSocialLinks}</div>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => scrollToTop('Featured Artist')}
          style={{ fontSize: '1.2rem' }}
          className="footer__nav-link"
        >
          Back to top
        </Button>
      </Fade>
    </footer>
  );
};

export default Footer;
