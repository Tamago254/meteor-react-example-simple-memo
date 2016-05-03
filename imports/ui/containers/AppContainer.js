import AppLayout from '../layouts/AppLayout';
import { Memos } from '../../api/memos/memos';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

const createMemo = content => {
  Meteor.call('Memos.insert', content);
};

const removeMemo = memoId => {
  Meteor.call('Memos.remove', memoId);
};

const updateMemoContent = (memoId, content) => {
  Meteor.call('Memos.update', memoId, content);
};

export default createContainer(() => {
  return {
    memos: Memos.find({}, {sort: {createdAt: -1}}).fetch(),
    createMemo,
    removeMemo,
    updateMemoContent,
  };
}, AppLayout);