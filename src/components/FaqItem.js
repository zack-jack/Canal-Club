import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <div className="faq-item">
      <h2 className="faq-item__question">{question}</h2>
      <div className="faq-item__answer">{answer}</div>
    </div>
  );
};

export default FaqItem;
