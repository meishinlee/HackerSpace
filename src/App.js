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
    console.log("component mounted");
    let projects = APIProject.getAllProjects().then(data => {
      // console.log(data)
      this.setState({projects:data})
      // console.log(this.state.projects)
      this.displayAll()
    }
    );
  }

  displayAll() {
    let projectListHTMLArr = [];
    let data = this.state.projects;
    // console.log(data);
    for (var i = 0; i < data.length; i++){
      projectListHTMLArr.push(
        <Card
          projectName={data[i]['project name']}
          projectDescription={data[i]['project description']}
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
      <main class="main-container">
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

        <div class="dropdown-filter">
            <div class="instructions"></div>
            <div class="dropdown-container">
                <div class="dropdown-button noselect">
                    <div class="dropdown-label">Gender</div>
                    <div class="dropdown-quantity">(<span class="quantity">Any</span>)</div>
                    <i class="fa fa-filter"></i>
                </div>
                <div class="dropdown-list" style={{"display": "none;"}}>
                    <input type="search" placeholder="Search states" class="dropdown-search"/>
                    <ul></ul>
                </div>
            </div>
            <div class="dropdown-container">
                <div class="dropdown-button noselect">
                    <div class="dropdown-label">LGBTQ+ Led</div>
                    <div class="dropdown-quantity">(<span class="quantity">Any</span>)</div>
                    <i class="fa fa-filter"></i>
                </div>
                <div class="dropdown-list" style={{"display": "none;"}}>
                    <input type="search" placeholder="Search states" class="dropdown-search"/>
                    <ul></ul>
                </div>
            </div>
            <div class="dropdown-container">
                <div class="dropdown-button noselect">
                    <div class="dropdown-label">Veteran Led</div>
                    <div class="dropdown-quantity">(<span class="quantity">Any</span>)</div>
                    <i class="fa fa-filter"></i>
                </div>
                <div class="dropdown-list" style={{"display": "none;"}}>
                    <input type="search" placeholder="Search states" class="dropdown-search"/>
                    <ul></ul>
                </div>
            </div>
        
            <div class="dropdown-container">
                <div class="dropdown-button noselect">
                    <div class="dropdown-label">Project Category</div>
                    <div class="dropdown-quantity">(<span class="quantity">Any</span>)</div>
                    <i class="fa fa-filter"></i>
                </div>
                <div class="dropdown-list" style={{"display": "none;"}}>
                    <input type="search" placeholder="Search states" class="dropdown-search"/>
                    <ul></ul>
                </div>
            </div>
        </div>

        <section id="scroll">
          <div class="projects_container">
            {results}
          </div>
        </section>

        <footer class="py-5 bg-black">
      
        </footer>

      </main>
    );
  }
 
}

export default App;