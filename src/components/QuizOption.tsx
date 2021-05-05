import React from 'react';
import 'style/App.css';

type Props = {
  optionId: string;
  optionSentence: string;
};

export const QuizOption: React.FC<Props> = ({ optionId, optionSentence }) => {
  const correct = true;
  return (
    <div
      className={
        'Option-container ' +
        (correct ? 'Correct-option-container' : 'Normal-option-container')
      }>
      <div style={{ display: 'flex' }}>
        <div className="Option-id">{optionId}</div>
        <div className="Option-sentence">{optionSentence}</div>
      </div>
      <div style={{ display: 'none' }}>あ</div>
    </div>
  );
};
