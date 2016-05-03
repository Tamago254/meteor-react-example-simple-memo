import React from 'react';

export default class MemoItem extends React.Component {
  render() {
    const { memo } = this.props;
    return (
      <div className="memo-item">
        <textarea className="textarea" defaultValue={memo.content} />
      </div>
    );
  }
}

MemoItem.propTypes = {
  memo: React.PropTypes.object.isRequired,
};