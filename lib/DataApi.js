class DataApi {
  // constructor
  constructor(rawData) {
    this.rawData = rawData;
  }
  // map array to object
  mapArrayToObj = (array) => {
    return array.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  // get all articles
  getArticles = () => {
    return this.mapArrayToObj(this.rawData.articles);
  }
  // get all authors
  getAuthors = () => {
    return this.mapArrayToObj(this.rawData.authors);
  }
}

export default DataApi;
