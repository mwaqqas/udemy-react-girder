import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={Faker.name.findName()}
          date={Faker.date.recent().toDateString()}
          content={Faker.lorem.sentence()}
          imageUrl={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
