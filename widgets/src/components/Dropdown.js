import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({
  label,
  selectedOption,
  onSelectedOptionChange,
  selectionOptions,
}) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  // close dropdown when click event in doc
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    //clean up
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  // useEffect(() => {
  //   console.log(selectedOption);
  // }, [selectedOption]);

  // render list of options for dropdown
  const renderedOptions = selectionOptions.map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedOptionChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // main component
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          ref={ref}
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
