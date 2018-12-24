import axios from "../utils/axios";

class WebService {
  _headers;

  constructor() {
    this._headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

  }

  searchArticle = (searchInput) => {
    return axios.post("/sites/MLA/search?q=" + searchInput, { headers: this.getHeaders() }).then(response => response.data);
  }

  searchArticleById = (productId) => {
    return axios.get("/items/" + productId, { headers: this.getHeaders() }).then(response => response.data);
  }

  getHeaders() {
    let headers = {
      ...this._headers,
    };
    return headers;
  }
}

const webService = new WebService();

export default webService;
