import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {

  static displayTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }

  render() {
    const {timestampDisplay} = this.props;
    return (
      <div>
        {timestampDisplay}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestampDisplay: Timestamp.displayTime(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);
