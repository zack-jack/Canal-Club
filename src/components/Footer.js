import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <Fade delay={500}>
        <div className="footer__logo">The Canal Club</div>
        <div className="footer__social">
          <FontAwesomeIcon
            icon={['fab', 'facebook-f']}
            color="#fff"
            size="3x"
            className="footer__social--facebook"
          />
          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            color="#fff"
            size="3x"
            className="footer__social--twitter"
          />
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            color="#fff"
            size="3x"
            className="footer__social--instagram"
          />
          <FontAwesomeIcon
            icon="envelope"
            color="#fff"
            size="3x"
            className="footer__social--email"
          />
        </div>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
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
