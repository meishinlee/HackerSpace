// get all projects
function getAllProjects() {
    var path = "/api/project/";
    console.log("getting all projects");
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