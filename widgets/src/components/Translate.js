import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const selectionOptions = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Urdu', value: 'ur' },
];

const Translate = () => {
  const [language, setLanguage] = useState(selectionOptions[0]);
  const [text, setText] = useState('');

  const onTextChange = (value) => {
    setText(value);
  };

  const onSelectionChange = (selectedLang) => {
    setLanguage(selectedLang);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text for translation</label>
          <input
            className="input"
            type="text"
            onChange={(e) => onTextChange(e.target.value)}
            value={text}
          />
        </div>
      </div>
      <br />
      <Dropdown
        label="Select a language"
        selectedOption={language}
        selectionOptions={selectionOptions}
        onSelectedOptionChange={onSelectionChange}
      />
      <br />
      <div className="ui divider"></div>

      <Convert text={text} targetLanguage={language} />
    </div>
  );
};

export default Translate;
