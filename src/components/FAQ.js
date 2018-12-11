import React from 'react';
import Close from '@material-ui/icons/Close';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton
} from '@material-ui/core';

import FaqItem from './FaqItem';

const FAQ = ({ faqVisible, faqClose }) => {
  const faq = [
    {
      question: 'question',
      answer: 'answer'
    }
  ];

  const renderFaqItems = () => {
    return (
      <div>
        {faq.map(({ question, answer }) => (
          <FaqItem key={question} question={question} answer={answer} />
        ))}
      </div>
    );
  };

  return (
    <Dialog
      aria-labelledby="FAQ"
      aria-describedby="FAQ"
      fullWidth={true}
      maxWidth="md"
      open={faqVisible}
      onBackdropClick={faqClose}
      className="faq"
    >
      <DialogTitle>
        <div className="faq__title">
          <div className="faq__header">FAQ</div>
          <IconButton onClick={faqClose} className="faq__button">
            <Close />
          </IconButton>
        </div>
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <div className="faq__items">{renderFaqItems()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default FAQ;
