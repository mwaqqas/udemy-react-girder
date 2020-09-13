import React from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (
    <div className="ui container">
      <h1>Widgets App</h1>
      {/* <Accordian items={items} /> */}
      <Search />
    </div>
  );
};
