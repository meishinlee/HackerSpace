import React from 'react';
import './App.css';
import APIProject from "./api/apiProject";
import Card from "./components/card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "project name": null,
      pronouns:null,
      lgbtq:null,
      disabled:null,
      veteran:null,
      projects:null,
      cardArray:null
    };
  }

  projectNameHandler(e) {
    this.setState({ "project name": e.target.value}); // just copy paste this code to the onSelect attribute of each dropdown
  }

  getFilteredData(){
    const filters = {};
    for (var key in this.state){
      if (this.state.key != null){
        filters[key] = this.state.key;
      }
    }
    let projects = APIProject.getFilteredProjects(filters).then((data) =>
      this.setState({
        projects: data,
      })
    );
  }

  componentDidMount() {
    try {
      console.log("component mounted");
      let projects = APIProject.getAllProjects().then((data) =>
        this.setState({
          projects: data,
        }, 
        () => this.displayAll())
      );
    } catch (error) {
      console.log(error);
    }
  }

  displayAll() {
    let projectListHTMLArr = [];
    let data = this.state.projects;
    for (var i = 0; i < data.length; i++){
      projectListHTMLArr.push(
        <Card
          projectName={data[i]['project name']}
          ownerName={data[i].name}
          email={data[i].email}
          pronouns={data[i].pronouns}
          lgbtq={data[i].lgbtq}
          disabled={data[i].disabled}
          veteran={data[i].veteran}
        />
      );
    }
    this.setState({cardArray:projectListHTMLArr});
  }

  render(){
    let results = [];
    if (this.state.cardArray){
      results = this.state.cardArray;
    }
     return (
      <main>
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
                <a class="navbar-brand" href="#page-top">Hacker Space</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#!">Sign Up</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Log In</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container px-5">
                    <h1 class="masthead-heading mb-0">Hacker Space</h1>
                    <h2 class="masthead-subheading mb-0">The choice is in your hands.</h2>
                    <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Browse projects</a>
                </div>
            </div>
        </header>

        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
        </div>

        <form class="form-inline">
          <div class="form-group">
            <label >Has a female lead</label>
            <select  class="form-control" >
                <option> </option>
                <option>Yes</option>
                <option>No</option>

              </select>
              
            <label >Veteran Led</label>
            <select  class="form-control" >
                <option> </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              
              <label >LGBTQ+ Led</label>
            <select  class="form-control" >
                <option> </option>
                <option>Yes</option>
                <option>No</option>
              </select>

          </div>
        </form>

        <section id="scroll">
          <div class="projects_container">
            {results}
          </div>
        </section>

        <footer class="masthead text-center text-white">
        </footer>

      </main>
    );
  }
 
}

export default App;