import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "558ba8753dbc4071ae3835a3ee0263f8",
  },
});

export default apiClient;
