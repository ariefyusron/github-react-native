import axios from "axios";

import { ENV } from ".";

const host = axios.create({
  baseURL: ENV.host,
});

// type body
/* in here
..
..
*/

const api = {
  getRepos: (username: string) => host.get(`users/${username}/repos`),
};

export default api;
