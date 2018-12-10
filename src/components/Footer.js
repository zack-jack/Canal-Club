import React from 'react';
import Fade from 'react-reveal/Fade';
import { scroller } from 'react-scroll';

import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const scrollToTop = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  };

  return (
    <footer className="footer">
      <Fade delay={300}>
        <div className="footer__logo">The Canal Club</div>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/TheCanalClub/"
            target="_blank"
            className="footer__social-link"
          >
            <FontAwesomeIcon
              icon={['fab', 'facebook-f']}
              size="3x"
              className="footer__social--facebook"
            />
          </a>
          <a
            href="https://twitter.com/thecanalclub?lang=en"
            target="_blank"
            className="footer__social-link"
          >
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              size="3x"
              className="footer__social--twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/thecanalclub/"
            target="_blank"
            className="footer__social-link"
          >
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              size="3x"
              className="footer__social--instagram"
            />
          </a>
          <a href="/" className="footer__social-link">
            <FontAwesomeIcon
              icon="envelope"
              size="3x"
              className="footer__social--email"
            />
          </a>
        </div>
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
