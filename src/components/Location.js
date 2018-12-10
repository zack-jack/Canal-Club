import React from 'react';

const Location = () => {
  return (
    <div className="location">
      <div className="location__heading">
        <div>Location</div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.9543895610923!2d-77.43180618435264!3d37.53257243382942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1111eaec76d59%3A0xfcf486efc500bb75!2sThe+Canal+Club!5e0!3m2!1sen!2sus!4v1544408471868"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
        title="Google Maps Location"
      />
    </div>
  );
};

export default Location;
