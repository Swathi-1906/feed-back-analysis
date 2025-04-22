import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [values, setValues] = useState(['', '', '', '', '']);

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      {values.map((val, index) => (
        <input
          key={index}
          type="number"
          value={val}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Feedback ${index + 1}`}
          className="w-full p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Analyze</button>
    </form>
  );
};

export default FeedbackForm;
