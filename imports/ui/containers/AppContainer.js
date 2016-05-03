import AppLayout from '../layouts/AppLayout';
import { Memos } from '../../api/memos/memos';
import { createContainer } from 'meteor/react-meteor-data';

const createMemo = content => {
  Memos.insert({content});
};

const removeMemo = memoId => {
  Memos.remove({_id: memoId});
};

export default createContainer(() => {
  return {
    memos: Memos.find({}, {sort: {createdAt: -1}}).fetch(),
    createMemo,
    removeMemo,
  };
}, AppLayout);