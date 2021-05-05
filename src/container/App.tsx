import React from 'react';
import { QuizBox } from 'components/QuizBox';
import { Result } from 'components/Result';
import 'style/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Result />
    </div>
  );
};

export default App;
