
import React, { useState } from 'react';

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const countWord = (event) => {
    const text = event.target.value.trim();
    const words = text ? text.split(/\s+/) : [];
    setWordCount(words.length);
  };

  return (
    <div>
      <textarea id="word" onInput={countWord} rows="10" cols="60" />
      <div>No of words entered are: {wordCount}</div>
    </div>
  );
};

export default WordCounter;
