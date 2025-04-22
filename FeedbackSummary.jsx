import React from 'react';

const FeedbackSummary = ({ data }) => {
  const values = data.map(item => item.feedback);
  const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
  const max = Math.max(...values);
  const min = Math.min(...values);

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p><strong>Average:</strong> {avg}</p>
      <p><strong>Maximum:</strong> {max}</p>
      <p><strong>Minimum:</strong> {min}</p>
    </div>
  );
};

export default FeedbackSummary;
