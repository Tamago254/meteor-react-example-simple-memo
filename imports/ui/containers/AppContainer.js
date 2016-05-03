import AppLayout from '../layouts/AppLayout';
import { Memos } from '../../api/memos/memos';
import { createContainer } from 'meteor/react-meteor-data';

export default createContainer(() => {
  return {
    memos: Memos.find().fetch(),
  };
}, AppLayout);