import React from 'react';
import { QuizOption } from 'components/QuizOption';
import { ReactComponent as QuizImage } from 'assets/undraw_adventure_4hum 1.svg';
import 'style/App.css';

export const QuizBox: React.FC = () => {
  const questionInfo = {
    optionId: 'A',
    optionSentence: 'hoge hoge',
  };
  const a = false;

  return (
    <div className="Quiz-box">
      <div className="Quiz-title">COUNTRY QUIZ</div>
      <div className="Quiz-container">
        <div className="Question-sentence">hoge hoge sentence</div>
        <div className="Question-options-container">
          <QuizOption {...questionInfo} />
          <QuizOption {...questionInfo} />
          <QuizOption {...questionInfo} />
          <QuizOption {...questionInfo} />
        </div>
        <div
          style={{
            width: '100%',
            height: '64px',
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '32px',
          }}>
          <div
            className="Next-button"
            style={a ? { display: 'none' } : { display: 'flex' }}>
            Next
          </div>
        </div>
      </div>
      <div className="Quiz-title-image">
        <QuizImage />
      </div>
    </div>
  );
};
