import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

// main component
const Convert = ({ text, targetLanguage }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  // debounce text
  useEffect(() => {
    const debounceTimeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(debounceTimeoutId);
    };
  }, [text, targetLanguage]);

  // async perform translation when debouncedText changes
  useEffect(() => {
    const doTranslation = async (inputText, targetLang) => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: inputText,
            target: targetLang,
            key: KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    if (debouncedText) doTranslation(text, targetLanguage.value);
  }, [debouncedText, targetLanguage]);

  return (
    <div>
      <h3 className="ui header">Output:</h3>
      {translated}
    </div>
  );
};

export default Convert;
