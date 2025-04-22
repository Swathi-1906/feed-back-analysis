// App.jsx
import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackChart from './components/FeedbackChart';
import FeedbackSummary from './components/FeedbackSummary';

const App = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  const handleSubmit = (data) => {
    if (data.length === 5) {
      setFeedbackData(data.map((value, index) => ({ index: index + 1, feedback: Number(value) })));
    } else {
      alert('Please enter exactly 5 values.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Feedback Analysis</h1>
      <FeedbackForm onSubmit={handleSubmit} />
      {feedbackData.length === 5 && (
        <>
          <FeedbackChart data={feedbackData} />
          <FeedbackSummary data={feedbackData} />
        </>
      )}
    </div>
  );
};

export default App;