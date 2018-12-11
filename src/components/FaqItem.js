import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <div className="faq-item">
      <h2 className="faq-item__title">{question}</h2>
      <div className="faq-item__description">{answer}</div>
    </div>
  );
};

export default FaqItem;
