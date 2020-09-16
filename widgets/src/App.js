import React, { useState } from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Dropdown from './components/Dropdown';
import Header from './components/Header';

const items = [
  {
    title: 'What is ReactJS?',
    content:
      'Jean shorts succulents post-ironic farm-to-table thundercats, twee banjo pinterest shoreditch.',
  },
  {
    title: 'Why use ReactJS',
    content:
      "Chillwave polaroid beard 3 wolf moon ennui. Fashion axe you probably haven't heard of them.",
  },
  {
    title: 'How to use ReactJS?',
    content:
      'Hell of cold-pressed poutine williamsburg man braid 8-bit intelligentsia everyday carry.',
  },
];

const options = [
  { label: 'The color red', value: 'red' },
  { label: 'The color green', value: 'green' },
  { label: 'The color blue', value: 'blue' },
];

// const showAccordian = () => {
//   if (window.location.pathname === '/') {
//     return <Accordian items={items} />;
//   }
// };

// const showSearch = () => {
//   if (window.location.pathname === '/search') {
//     return <Search />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

export default () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showDropdown, setDropdownStatus] = useState(true);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <div className="ui container">
        <Route path="/">
          <Accordian items={items} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select a color"
            selectedOption={selected}
            selectionOptions={options}
            onSelectedOptionChange={setSelected}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
};
