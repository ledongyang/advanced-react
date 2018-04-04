class StateApi {
  // constructor
  constructor(rawData) {
    this.state = {
      articles: this.mapArrayToObj(rawData.articles),
      authors: this.mapArrayToObj(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }
  // map array to object
  mapArrayToObj = (array) => {
    return array.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookUpAuthor = (authorId) => {
    return this.state.authors[authorId];
  }

  getState = () => {
    return this.state;
  }

  subscribe = (cb) => {
    this.lastSubscriptionId += 1;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  mergeWithState = (stateChange) => {
    this.state = {
      ...this.state,
      ...stateChange
    };
    this.notifySubscribers();
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm
    });
  }

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  }
}

export default StateApi;
