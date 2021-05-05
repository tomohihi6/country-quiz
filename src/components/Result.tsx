import React from 'react';
import { ReactComponent as ResultImage } from 'assets/undraw_winners_ao2o 2.svg';
import 'style/App.css';

export const Result: React.FC = () => {
  const correct = 4;
  return (
    <div className="Quiz-box">
      <div className="Quiz-title">COUNTRY QUIZ</div>
      <div className="Result-container">
        <ResultImage />
        <div className="Result-title">Results</div>
        <div className="Result-correct-num-sentence">
          You got <span className="Result-correct-num">{correct}</span> correct
          answers
        </div>
        <div className="Try-again-button">Try again</div>
      </div>
    </div>
  );
};
