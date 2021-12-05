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
    var path = "/api/project/filters?"+JSON.stringify(filters);
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