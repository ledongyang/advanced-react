import React from 'react';
import PropTypes from 'prop-types';

const storePrivider = (extraProps = () => ({})) => (Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    }

    usedState = () => {
      return extraProps(this.context.store, this.props);
    }

    state = this.usedState()

    // the callback pass into the store subscribe
    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.usedState());
      }
    }
    // subscribe to store, pass in a callback
    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
    // unsubscribe
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = undefined;
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.usedState()}
          store={this.context.store}
        />
      );
    }
  };
};

export default storePrivider;
