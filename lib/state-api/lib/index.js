class StateApi {
  // constructor
  constructor(rawData) {
    this.state = {
      articles: this.mapArrayToObj(rawData.articles),
      authors: this.mapArrayToObj(rawData.authors)
    };
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
}

export default StateApi;
