// get all projects
function getAllProjects() {
    var path = "/api/project/";
    return fetch(path, {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
  }

  // get projects through filters
function getFilteredProjects(filters) {
    var query = require('querystring').stringify(filters);
    var path = "/api/project/filters?"+query;
    return fetch(path, {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

export default {
    getAllProjects,
    getFilteredProjects,
};