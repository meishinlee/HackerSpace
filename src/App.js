import React from 'react';
import APIProject from "./api/apiProject";
import Card from "./components/card";
import "./effect.js";

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
      //this.setState({projects:data}),
      //() => this.displayAll()
      console.log(data)
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
                        <li class="nav-item"><a class="nav-link" href="#page-top"> Home </a></li>
                        <li class="nav-item"><a class="nav-link" href="//forms.gle/nUWeKcENLTWiBJX67" target="_blank"> Add Project</a></li>
                        <li class="nav-item"><a class="nav-link" href="#footer"> Contact </a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="masthead text-center text-white" id="page-top">
            <div class="masthead-content">
                <div class="container px-5">
                    <h1 class="  text title_container masthead-heading mb-0">Hacker Space</h1>
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


        <div class="form-group">
          <div class = "form-item">
            <label >Female Led?</label>
            <select  class="form-control" >
                <option> Select one: </option>
                <option>Yes</option>
                <option>No</option>
            </select>
          </div>

          <div class = "form-item">
            <label >Veteran Led?</label>
            <select  class="form-control" >
                <option> Select one: </option>
                <option>Yes</option>
                <option>No</option>
            </select>
          </div>

          <div class = "form-item">
            <label >LGBTQ+ Led?</label>
            <select  class="form-control" >
                <option> Select one: </option>
                <option>Yes</option>
                <option>No</option>
              </select>
          </div>

          <div class = "form-item">
              <label> Project Category </label>
              <select  class="form-control" >
                <option> Select one: </option>
                <option>Machine Learning/Artificial Intelligence</option>
                <option>Robotics</option>
                <option>Web development</option>
                <option>Cybersecurity</option>
                <option>Algorithmic/Research</option>
                <option>Data analysis</option>
              </select>
            </div>
        </div>

        <section id="scroll">
          <div class="projects_container">
          {/* {results} */}
            <div class="project_item">
              <h3> Project Name </h3>
              <h5> Project Owner <p id="text1"> (she/her) </p> </h5>
              <p> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <details>
              <summary>
               <span id="open">read more</span>
               <span id="close">close</span>
              </summary>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </details>
            </div>
          </div>
        </section> 

        <div class="footer footer_text">
        Inclusion is the practice of providing everyone with equal access to opportunities and resources. Inclusion efforts in the workplace help to give traditionally marginalized groups, like those based on gender, race or even those with physical or mental disabilities, a means for them to feel equal in the workplace. Inclusive actions, like creating employee resource groups or hosting information sessions, make the workplace a safer, more respectful environment for all employees.
       </div>

      </main>
    );
  }
 
}

export default App;